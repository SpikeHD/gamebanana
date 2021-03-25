const Base = require('./Base')

class Client extends Base {
  /**
   * Class for authentication and data grabbing.
   * 
   * @param {Object} opts 
   * @param {String} opts.api_key
   * @param {String|Number} opts.appid
   * @param {String|Number} opts.userid
   */
  constructor(opts) {
    super()

    this.api_key = opts.api_key
    this.appid = opts.appid
    this.userid = opts.userid
    this.token = null
  }

  /**
   * Authenticate with the API.
   * 
   * @param {String=} api_key 
   */
  async login(api_key = this.api_key) {
    const res = await this.got.get(`/Core/App/Authenticate?api_password=${api_key}&app_id=${this.appid}`)

    console.log(res)
  }
}

module.exports = Client