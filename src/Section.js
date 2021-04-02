const Base = require('./Base')

class Section extends Base {
  /**
   * Section search.
   * 
   * @param {Object} opts 
   * @param {String} opts.itemtype
   * @param {String} opts.sort
   * @param {String} opts.direction
   * @param {Number} opts.page
   * @param {String=} opts.filter
   * @param {String=} opts.filterval
   * @param {String=} opts.filterop
   */
  constructor(opts = {}) {
    super()

    this.itemtype = opts.itemtype
    this.sort = opts.sort
    this.direction = opts.direction
    this.page = opts.page
    this.filter = opts.filter
    this.filterval = opts.filterval
    this.filterop = opts.filterop
  }

  /**
   * Allowed item types.
   */
  static async allowedItemTypes() {
    const res = await Base.getInstance().get('Core/List/Section/AllowedItemTypes')
  
    return JSON.parse(res.body)
  }

  /**
   * Allowed item sorts.
   */
  static async allowedSorts(itemtype) {
    const res = await Base.getInstance().get('Core/List/Section/AllowedSorts', {
      searchParams: {
        itemtype
      }
    })
    
    return JSON.parse(res.body)
  }

  /**
   * Allowed item filters.
   * 
   * @param {String} itemtype
   */
  static async allowedFilters(itemtype) {
    const res = await Base.getInstance().get('Core/List/Section/AllowedFilters', {
      searchParams: {
        itemtype
      }
    })
    
    return JSON.parse(res.body)
  }

  /**
   * Allowed item types.
   * 
   * @param {String} filtertype
   */
  static async allowedFilterOperators(filtertype) {
    const res = await Base.getInstance().get('Core/List/Section/AllowedFilterOperators', {
      searchParams: {
        filtertype
      }
    })
    
    return JSON.parse(res.body)
  }

  /**
   * Section search.
   * 
   * @param {Object} opts 
   * @param {String} opts.itemtype
   * @param {String} opts.sort
   * @param {String} opts.direction
   * @param {Number} opts.page
   * @param {String=} opts.filter
   * @param {String=} opts.filterval
   * @param {String=} opts.filterop
   */
  static async list(opts) {
    return await new Section(opts).data()
  }

  /**
   * Retrieve section data.
   */
  async data() {
    const res = await this.got.get('Core/List/Section', {
      searchParams: {
        itemtype: this.itemtype,
        sort: this.sort,
        direction: this.direction,
        page: this.page,
        filter: this.filter,
        filterval: this.filterval,
        filterop: this.filterop,
        format: 'json_min'
      }
    })
    
    return JSON.parse(res.body)
  }
}

module.exports = Section