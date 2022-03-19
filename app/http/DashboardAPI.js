const path = require('path');
const fs = require('fs');
const fsPromises = require('fs/promises');
const autoBind = require('auto-bind');
const slugify = require('slugify');

/**
 * Data for a dashboard component
 * @typedef {DashboardAPI~Component}
 * @property {String} name
 * @property {DashboardAPI~Component~Content} [content = null]
 * @property {object} options
 */

/**
 * @typedef {DashboardAPI~Component~Content}
 * @property {'vue' | 'html'} type - The content type (vue component or html file)
 * @property {String} path         - The path to the file
 * @property {String} raw          - The raw contents of the file
 */

/**
 * Data for a dashboard page
 * @typedef {DashboardAPI~Page}
 * @property {String} name
 * @property {DashboardAPI~Component~Content} [content = null]
 * @property {object} options
 */

/**
 * DashboardAPI class
 * 
 * @class
 * @example
 * 	const DashboardAPI = require('dynamic-dashboard');
 * 	const dashboard = new DashboardAPI({
 * 		sync
 * 	});
 * 
 * 	dashboard
 * 		.component('component-name')
 * 		.html('./component.html')
 * 
 */
class DashboardAPI {
	/**
	 * Create a new DashboardAPI instance
	 * @param {Config} config
	 * @param {Sync} sync - An instance of the Sync system
	 */
	constructor(config, sync) {
		this.sync = sync;
		
		/**
		 * The registered dashboard components
		 * @protected
		 * @type {Object.<Component>}
		 */
		this._components = {};

		/**
		 * The registered dashboard components
		 * @protected
		 * @type {Object.<Page>}
		 */
		this._pages = {};

		this.themeColors = require(path.join(config.dashboard.path, 'themes.json'));

		autoBind(this);
	}

	get state() {
		return Object.freeze(this.sync.state);
	}

	get theme() {
		return this.sync.service('theme').state.theme;
	}

	get themeBackground() {
		return this.themeColors[this.theme]['700'];
	}

	get components() {
		const json = Object.keys(this._components)
			.reduce((components, componentId) => {
				components[componentId] = {
					name: this._components[componentId].name
				};

				return components;
			}, {});

		return JSON.stringify(json);
	}

	get pages() {
		let pages = {};

		for (const pageUrl in this._pages) {
			pages[pageUrl] = {
				...this._pages[pageUrl],
				content: undefined
			};
		}

		return pages;
	}

	async getComponentsHTML() {
		let html = '';

		for (const component of Object.values(this._components)) {
			if (component.content === null || component.content.type !== 'custom-html') {
				continue;
			}

			html += `<!-- COMPONENT - CUSTOM - ${component.name} -->\n${await component.content.read()}\n\n`;
		} 

		return html;
	}

	async getPagesHTML() {
		let html = '';

		for (const page of Object.values(this._pages)) {
			if (page.content === null || page.content.type !== 'custom-html') {
				continue;
			}

			html += `<!-- COMPONENT - CUSTOM PAGE - ${page.url} -->\n${await page.content.read()}\n\n`;
		} 

		return html;
	}

	/**
	 * Create a new component and return its component builder.
	 * 
	 * @param  {String} name          - Component name (kebab-case)
	 * @return {ComponentBuilder}
	 */
	component(name) {
		if (name in this._components)
			throw new Error(`Component ${name} already exists`);

		/**
		 * @type {DashboardAPI~Component}
		 */
		this._components[name] = {
			name,
			content: null
		};

		/**
		 * @typedef {ComponentBuilder}
		 */
		const builder = {
			/**
			 * Create new Vue component
			 * @param  {String} vueFilePath The path to the .vue component file
			 * @return {ComponentBuilder} Builder for chaining
			 */
			vue: (vueFilePath) => {
				throw new Error('Vue components are not supported yet.');

				// const absolutePath = path.resolve(this.pluginPath, vueFilePath);

				// this._components[name].content = {
				// 	type: 'vue',
				// 	path: absolutePath,
				// 	raw: fs.readFileSync(absolutePath)
				// };

				// // Read from FS
				// // ? Compile
				
				// return html;
			},

			/**
			 * Create component with raw html content
			 * @param  {String} htmlFilePath The path to the .html file
			 * @return {ComponentBuilder} Builder for chaining
			 */
			custom: (htmlFilePath) => {
				const absolutePath = path.resolve(this.pluginPath, htmlFilePath);
				
				this._components[name].content = {
					type: 'custom-html',
					path: absolutePath,
					raw: fs.readFileSync(absolutePath),
					read: async () => String(await fsPromises.readFile(absolutePath))
				};

				return builder;
			}
		};

		return builder;
	}

	page(name, options = { url: null, title: 'Custom page' }) {
		name = slugify(name);

		if (!options.url)
			options.url = `/${name}`;
		
		if (name in this._pages)
			throw new Error(`Page at ${name} was already registered`);

		/**
		 * @type {DashboardAPI~Page}
		 */
		this._pages[name] = {
			name,
			content: null,
			options
		};

		/**
		 * @typedef {PageBuilder}
		 */
		const builder = {
			/**
			 * Create page with Vue component
			 * @param  {String} vueFilePath The path to the .vue component file
			 * @return {PageBuilder} Builder for chaining
			 */
			vue: (vueFilePath) => {
				throw new Error('Vue components are not supported yet.');

				// const absolutePath = path.resolve(this.pluginPath, vueFilePath);

				// this._pages[url].content = {
				// 	type: 'vue',
				// 	path: absolutePath,
				// 	raw: fs.readFileSync(absolutePath)
				// };

				// // Read from FS
				// // ? Compile

				// return builder;
			},

			/**
			 * Create page with raw html content
			 * @param  {String} htmlFilePath The path to the .html file
			 * @return {PageBuilder} Builder for chaining
			 */
			custom: (htmlFilePath) => {
				const absolutePath = path.resolve(this.pluginPath, htmlFilePath);
				
				this._pages[name].content = {
					type: 'custom-html',
					path: absolutePath,
					raw: fs.readFileSync(absolutePath),
					read: async () => String(await fsPromises.readFile(absolutePath))
				};;

				return builder;
			}
		};
		return builder;
	}
}

module.exports = DashboardAPI;