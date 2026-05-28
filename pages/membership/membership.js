const api = require('../../services/api');

Page({
  data: {
    profile: {},
    watchlist: [],
    cards: [],
    initial: '卡'
  },

  async onShow() {
    const result = await api.getProfile();
    this.setData({
      profile: result.profile,
      watchlist: result.watchlist,
      cards: result.cards,
      initial: result.profile.nickname.slice(0, 1)
    });
  },

  openCard(event) {
    wx.navigateTo({ url: `/pages/chat/chat?cardId=${event.currentTarget.dataset.id}` });
  },

  goPost() {
    wx.navigateTo({ url: '/pages/onboarding/onboarding' });
  }
});
