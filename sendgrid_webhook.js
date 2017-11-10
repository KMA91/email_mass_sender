var localtunnel = require('localtunnel');

localtunnel(5000, { subdomain: 'fasdfjk23fd' }, function(err, tunnel) {
  console.log('LT running');
});
