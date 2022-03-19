const AccessControl = require('accesscontrol');
const autoBind = require('auto-bind');
const logger = require('@helpers/logger').createLogger('Permissions');

/**
 * Class responsible for evaluation role-based permissions
 */
class PermissionsAPI {
	constructor(grants) {
		this.roles = ['guest', 'user', 'admin'];
		this.roleExpands = {
			guest: ['guest'],
			user: ['guest', 'user'],
			admin: ['guest', 'user', 'admin']
		};

		this.access = new AccessControl(grants);

		// Lock AccessControl so permissions can't be changed
		// TODO: Lock dynamic permissions
		// this.access.lock();

		autoBind(this);
	}

	evaluate(role, type, resource, scope = 'any') {
		return this.access.permission({
			role,
			action: `${type}:${scope}`,
			resource
		});
	}

	/**
	 * Determine role for permission check
	 * @param  {string} role [description]
	 * @return {Object}      Role API
	 */
	can(role) {
		/**
		 * Create the api object for a given CRUD type
		 *
		 * This creates an API in the following format:
		 * can('admin').update('user', 'any') // granted: true, attributes, filter
		 * can('user').update('user', 'any') // granted: false, ...
		 * can('user').update('user', 'own') // granted: true, ...
		 */
		const composeCrudHandler = (type) => {
			return (resource, scope = 'any') => {
				if (!this.roleExists(role)) {
					logger.error(`Role doesn't exist`, role);
					throw new Error(`Role doesn't exist`);
				}

				const allRoles = this.roleExpands[role];
				
				let strongestGrant = null;
				let strongestError = null;

				for (const roleToTry of allRoles) {
					const result = this.evaluate(roleToTry, type, resource, scope);

					if (result.granted) {
						strongestGrant = result;
					} else {
						strongestError = result;
					}
				}

				return strongestGrant || strongestError;
			};
		};

		return {
			create: composeCrudHandler('create'),
			read: composeCrudHandler('read'),
			update: composeCrudHandler('update'),
			delete: composeCrudHandler('delete')
		};
	}

	/**
	 * Expose AccessControl grant function, to grant permissions to roles.
	 * @return {Function} AccessControl grant function
	 */
	get grant() {
		return this.access.grant.bind(this.access);
	}

	/**
	 * Check if role exists
	 * @param  {String} role
	 * @return {Boolean}
	 */
	roleExists(role) {
		return role in this.roleExpands;
	}
}

/**
 * Crud actions for permissions
 * @readonly
 * @enum {string}
 */
PermissionsAPI.CRUD = {
	/** User allowed to create a resource */
	create: 'create',

	/** User allowed to read a resource */
	read: 'read',

	/** User allowed to update a resource */
	update: 'update',

	/** User allowed to delete a resource */
	delete: 'delete'
};

/**
 * Permission scopes
 * @readonly
 * @enum {string}
 */
PermissionsAPI.Scope = {
	/** User allowed to access any resource */
	any: 'any',

	/** User allowed to access their own resources */
	own: 'own'
};

/**
 * Array data structure for permissions
 * @typedef {Array<PermissionsAPI.CRUD | String | PermissionsAPI.Scope>} PermissionTriple
 */

module.exports = PermissionsAPI;