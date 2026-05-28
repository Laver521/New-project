const api = require('../../services/api');

Page({
  data: {
    posts: [],
    filteredPosts: [],
    types: ['全部', '换卡', '经验', '活动'],
    activeType: '全部'
  },

  async onShow() {
    const result = await api.getPosts();
    this.setData({ posts: result.posts });
    this.applyFilters();
  },

  setType(event) {
    this.setData({ activeType: event.currentTarget.dataset.type });
    this.applyFilters();
  },

  applyFilters() {
    const type = this.data.activeType;
    const filteredPosts = type === '全部'
      ? this.data.posts
      : this.data.posts.filter((post) => post.type === type);
    this.setData({ filteredPosts });
  },

  openPost(event) {
    wx.navigateTo({ url: `/pages/chat/chat?postId=${event.currentTarget.dataset.id}` });
  },

  goPost() {
    wx.navigateTo({ url: '/pages/onboarding/onboarding' });
  }
});
