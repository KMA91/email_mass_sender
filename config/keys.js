// Checks for environment settings to use keys
module.exports = {
  if(process.env.NODE_ENV === 'production'{
    module.exports = require('./prod');
  }else{
    module.exports = require('./dev');
  })
}
