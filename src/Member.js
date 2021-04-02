const Base = require('./Base')

class Member extends Base {
  /**
   * Get member.
   * 
   * @param {Object} opts
   * @param {String=|Number=} userid
   * @param {String=} username 
   */
  constructor(opts = {}) {
    super()

    this.userid = opts.userid
    this.username = opts.username
  }

  /**
   * Gets by whatever method is available. Defaults to ID if
   * both values are present.
   */
  async find() {
    if (this.userid) {
      return await this.findByID(this.userid)
    } else {
      return await this.findByName(this.username)
    }
  }

  /**
   * Get member.
   * 
   * @param {Object} opts
   * @param {String=|Number=} userid
   * @param {String=} username 
   */
  static async get(opts) {
    return await new Member(opts).find()
  }

  /**
   * Find user by ID.
   * 
   * @param {String|Number} userid 
   */
  static async findByID(userid) {
    const res = await Base.getInstance().get('Core/Member/IdentifyById', {
      searchParams: {
        userid
      }
    })
    
    return JSON.parse(res.body)
  }

  /**
   * Find user by name.
   * 
   * @param {String|Number} userid 
   */
  static async findByName(username) {
    const res = await Base.getInstance().get('Core/Member/Identify', {
      searchParams: {
        username
      }
    })
      
    return JSON.parse(res.body)
  }
}

module.exports = Member