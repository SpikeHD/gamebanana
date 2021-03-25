const Base = require('./Base')
const Item = require('./Item')

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

  /**
   * Get allowed item types.
   */
  async allowedItemTypes() {
    const res = await this.got.get('Core/Item/Data/AllowedItemTypes')

    return JSON.parse(res.body)
  }

  /**
   * Get allowed item fields.
   * 
   * @param {String} itemtype
   */
  async allowedFields(itemtype) {
    const res = await this.got.get('Core/Item/Data/AllowedFields', {
      searchParams: {
        itemtype
      }
    })
  
    return JSON.parse(res.body)
  }

  /**
   * Get an item.
   * 
   * @param {Object} opts 
   * @param {String} opts.itemtype
   * @param {String|Number} opts.itemid
   * @param {Array} opts.fields
   */
  async getItem(opts) {
    return new Item(opts).data()
  }
}

module.exports = Client