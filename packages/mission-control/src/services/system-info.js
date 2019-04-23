const config = require('@config');
const database = require('@database');
const state = require('@state');
const log = require('@helpers/log').logger('System Info');

const si = require('systeminformation');
const publicIp = require('public-ip');

module.exports = async function systemInformation() {
	const [system, cpu, osInfo] = await Promise.all([
		si.system(),
		si.cpu(),
		si.osInfo()
	]);

	const staticInfo = {
		system: {
			manufacturer: system.manufacturer,
			model: system.model
		},
		cpu: {
			manufacturer: cpu.manufacturer,
			brand: cpu.brand,
			cores: cpu.cores,
			speedMax: cpu.speedmax,
			mainTemperature: -1
		},
		os: {
			platform: osInfo.platform,
			distro: osInfo.distro,
			version: osInfo.release,
			name: osInfo.codename,
			architecture: osInfo.arch,
			hostname: osInfo.hostname
		}
	};

	const refreshInfo = async () => {
		const [
			temp,
			memory,
			networkInterfaces,
			currentLoad,
			ip
		] = await Promise.all([
			si.cpuTemperature(),
			si.mem(),
			si.networkInterfaces(),
			si.currentLoad(),
			publicIp.v4({ https: true })
		]);

		const network = networkInterfaces.reduce((mainNetwork, interface) => {
			if (mainNetwork) return mainNetwork;

			if (interface.iface === 'en1') return interface;

			return null;
		}, null);

		const data = {
			...staticInfo,
			cpu: {
				...staticInfo.cpu,
				mainTemperature: temp.main,
				currentLoad: currentLoad.currentload,
				cores: currentLoad.cpus.map(cpu => ({
					load: cpu.load
				}))
			},
			memory: {
				total: memory.total,
				free: memory.free,
				used: memory.used
			},
			network: {
				internalIPv4: network.ip4,
				publicIPv4: ip,
				mac: network.mac,
				speed: network.speed
			}
		};

		state.callAction('SYSTEM-INFO:UPDATE', data);
	};
	refreshInfo();
	setInterval(refreshInfo, 20000);
};
