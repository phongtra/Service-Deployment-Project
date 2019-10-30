if (process.env.NODE_ENV === 'production') {
  module.exports = require('./config');
} else {
  module.exports = require('./devConfig');
}
