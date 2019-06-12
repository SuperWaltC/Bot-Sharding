const { ShardingManager } = require('kurasuta');
const { join } = require('path');
const sharder = new ShardingManager(join(src, 'main'), {
	// your options here
});

sharder.spawn();
