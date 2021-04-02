const Base = require('./Base')

class NewItems extends Base {
  /**
   * NewItems submissions.
   * 
   * @param {Object} opts 
   * @param {String} opts.page
   * @param {String=} opts.itemtype
   * @param {String=|Number=} opts.gameid
   * @param {String=|Number=} opts.userid
   * @param {String=|Number=} opts.studioid
   * @param {String=|Number=} opts.max_age
   * @param {String=} opts.include_updated
   */
  constructor(opts = {}) {
    super()

    this.page = opts.page
    this.itemtype = opts.itemtype
    this.gameid = opts.gameid
    this.userid = opts.userid
    this.studioid = opts.studioid
    this.max_age = opts.max_age
    this.include_updated = opts.include_updated
  }

  /**
   * Allowed item types.
   */
  static async allowedItemTypes() {
    const res = await Base.getInstance().get('Core/List/New/AllowedItemTypes')
    
    return JSON.parse(res.body)
  }

  /**
   * NewItems submissions.
   * 
   * @param {Object} opts 
   * @param {String} opts.page
   * @param {String=} opts.itemtype
   * @param {String=|Number=} opts.gameid
   * @param {String=|Number=} opts.userid
   * @param {String=|Number=} opts.studioid
   * @param {String=|Number=} opts.max_age
   * @param {String=} opts.include_updated
   */
  static async getNewItems(opts) {
    return await new NewItems(opts).data()
  }

  async data() {
    const res = await this.got.get('Core/List/New', {
      searchParams: {
        page: this.page,
        itemtype: this.itemtype,
        gameid: this.gameid,
        userid: this.userid,
        studioid: this.studioid,
        max_age: this.max_age,
        include_updated: this.include_updated,
        format: 'json_min'
      }
    })
    
    return JSON.parse(res.body)
  }
}

module.exports = NewItems