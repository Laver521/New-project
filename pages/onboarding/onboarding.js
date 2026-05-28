const api = require('../../services/api');

Page({
  data: {
    typeOptions: ['换卡', '出售', '求卡', '经验'],
    form: {
      type: '换卡',
      title: '',
      player: '',
      target: '',
      body: '',
      image: ''
    },
    submitted: null
  },

  onInput(event) {
    const field = event.currentTarget.dataset.field;
    this.setData({ [`form.${field}`]: event.detail.value });
  },

  onTypeChange(event) {
    this.setData({ 'form.type': this.data.typeOptions[event.detail.value] });
  },

  async chooseImage() {
    const chosen = await wx.chooseMedia({
      count: 1,
      mediaType: ['image'],
      sourceType: ['album', 'camera']
    });
    this.setData({ 'form.image': chosen.tempFiles[0].tempFilePath });
  },

  async submit() {
    if (!this.data.form.title || !this.data.form.body) {
      wx.showToast({ title: '请补充标题和说明', icon: 'none' });
      return;
    }

    const result = await api.createPost({
      title: this.data.form.title,
      type: this.data.form.type,
      author: '卡友 Ming',
      body: this.data.form.body,
      target: this.data.form.target
    });

    this.setData({ submitted: result.post });
    wx.showToast({ title: '发布成功', icon: 'success' });
  }
});
