const config = require('./config');

App({
  globalData: {
    user: {
      nickname: '卡友 Ming',
      city: '上海',
      level: '资深交换者',
      trades: 18,
      rating: '4.9'
    },
    config
  },

  onLaunch() {
    wx.setStorageSync('visited', true);
  },

  async ensureUser() {
    return this.globalData.user;
  },

  setUser(user) {
    this.globalData.user = user;
  }
});
