const { BaseCluster } = require('kurasuta');

module.exports = class extends BaseCluster {
	launch() {
		this.client.login('YOUR_TOKEN_HERE')
	}
};
