module.exports = function apiExample(APP) {
	const { sync, http, permissions, UserError } = APP;

	const healthcheck = async () => {
		return {
			status: 'ok', // 'ok', 'warning', 'error'
			errorRate: 0,
			plugins: {
				telemetry: 'ok'
			}
		};
	};

	http.root.get('/api/v1/healthcheck', async (req, res) => {
		return res.json(await healthcheck());
	});

	http.root.get('/api/v1/services/:service', (req, res) => {
		const user = req.user;
		const serviceName = String(req.params.service);
		const service = sync.service(serviceName);

		if (!service) {
			throw new UserError('Service not found', 404);
		}

		if (!permissions.can(user.role).read(serviceName).granted) {
			throw new UserError('Not authorized to read state', 403)
		}

		return res.json(service.state);
	});

	http.root.post('/api/v1/services/:service/actions/:action', async (req, res) => {
		const serviceName = String(req.params.service);
		const actionName = String(req.params.action);
		const data = req.body;

		const service = sync.service(serviceName);

		if (!service) {
			throw new UserError('Service not found', 404)
		}

		if (!permissions.can(req.user.role).update(serviceName).granted) {
			throw new UserError('Not authorized to run action', 403);
		}

		const result = await service.invokeAction(actionName, data, req.user);

		return res.json({
			result
		});
	});


	return {
		version: '1.0.0',
		description: 'Bildschirm general API'
	};
};