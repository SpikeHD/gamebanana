const got = require('got')
const instance = got.extend({
  prefixUrl: 'https://api.gamebanana.com'
})

class Base {
  constructor() {
    this.got = instance
  }

  static getInstance() { return instance }
}

module.exports = Base