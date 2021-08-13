// start your server here

const server = require('./api/server');

const port = process.env.port || 3000;

server.listen(port, () => {
	console.log(`Server is running on port ${port}`);
});
