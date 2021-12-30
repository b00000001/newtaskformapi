import { Service } from 'node-windows';

// Create a new service object
const svc = new Service({
  name: 'Express JS API',
  description: 'New Task Form API.',
  script: 'C:\\Users\\Aaron\\activities\\newtaskformapi\\dist\\src\\server.js'
});

// Listen for the "install" event, which indicates the
// process is available as a service.
svc.on('install', function () {
  svc.start();
  console.log('Started');
});

svc.install();
