const Base = require('./Base')
const Item = require('./Item')
const List = require('./List')
const Section = require('./Section')
const NewItems = require('./NewItems')
const Member = require('./Member')

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

    // Classes for static functions
    this.Item = Item
    this.List = List
    this.Section = Section
    this.NewItems = NewItems
    this.Member = Member
  }

  /**
   * Authenticate with the API.
   * 
   * @param {String=} api_key 
   */
  async login(api_key = this.api_key) {
    const res = await this.got.get('Core/App/Authenticate', {
      searchParams: {
        api_password: api_key,
        app_id: this.appid,
        userid: this.userid
      }
    })
    
    // Token is returned in an array for some reason
    this.token = JSON.parse(res.body)[0]

    return this
  }
}

module.exports = Client