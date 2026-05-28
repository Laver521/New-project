Page({
  onLoad() {
    setTimeout(() => this.enter(), 700);
  },

  enter() {
    wx.switchTab({ url: '/pages/discover/discover' });
  }
});
