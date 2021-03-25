const Base = require('./Base')

class Item extends Base {
  constructor(opts) {
    super()

    Object.keys(opts).forEach(k => {
      this[k] = opts[k]
    })
  }

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