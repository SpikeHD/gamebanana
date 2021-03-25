const Base = require('./Base')

class Item extends Base {
  constructor(opts) {
    super()

    Object.keys(opts).forEach(k => {
      this[k] = opts[k]
    })
  }

  /**
   * Get allowed item types.
   */
  static async allowedItemTypes() {
    const res = await Base.getInstance().get('Core/Item/Data/AllowedItemTypes')
  
    return JSON.parse(res.body)
  }
  
  /**
   * Get allowed item fields.
   * 
   * @param {String} itemtype
   */
  static async allowedFields(itemtype) {
    const res = await Base.getInstance().get('Core/Item/Data/AllowedFields', {
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
  static async getItem(opts) {
    return await new Item(opts).data()
  }

  /**
   * Retrieve data.
   */
  async data() {
    const res = await this.got.get('Core/Item/Data', {
      searchParams: {
        itemtype: this.itemtype,
        itemid: this.itemid,
        fields: this.fields.join(','),
        format: 'json_min',
        return_keys: true
      }
    })

    return JSON.parse(res.body)
  }
}

module.exports = Item