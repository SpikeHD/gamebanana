const Base = require('./Base')

class Like extends Base {
  /**
   * List.
   * 
   * @param {Object} opts 
   * @param {String} opts.itemtype
   * @param {String} opts.field
   * @param {String} opts.query
   */
  constructor(opts) {
    super()

    this.itemtype = opts.itemtype
    this.field = opts.field
    this.query = opts.query
  }

  /**
   * Get allowed item types.
   */
  static async allowedSearchItemTypes() {
    const res = await Base.getInstance().get('Core/List/Like/AllowedItemTypes')
  
    return JSON.parse(res.body)
  }

  /**
   * Get allowed item types.
   */
  static async allowedSearchFields(itemtype) {
    const res = await Base.getInstance().get('Core/List/Like/AllowedFields', {
      searchParams: {
        itemtype
      }
    })
      
    return JSON.parse(res.body)
  }

  /**
   * Get a list using a search.
   * 
   * @param {Object} opts 
   * @param {String} opts.itemtype
   * @param {String} opts.field
   * @param {String} opts.query
   */
  static async list(opts) {
    return await new Like(opts).data()
  }

  /**
   * Retrieve search data.
   */
  async data() {
    const res = await this.got.get('Core/List/Like', {
      searchParams: {
        itemtype: this.itemtype,
        field: this.field,
        match: this.query,
        format: 'json_min'
      }
    })
  
    return JSON.parse(res.body)
  }
}

module.exports = Like