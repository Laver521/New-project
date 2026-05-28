const api = require('../../services/api');

Page({
  data: {
    card: null,
    messages: [
      { id: 'm1', content: '你好，这张卡支持面交验卡吗？', mine: true },
      { id: 'm2', content: '可以，评级盒无裂，支持当面看灯和扫码。', mine: false }
    ],
    draft: ''
  },

  async onLoad(options) {
    if (options.cardId) {
      const result = await api.getCard(options.cardId);
      this.setData({ card: result.card });
    }
  },

  onDraft(event) {
    this.setData({ draft: event.detail.value });
  },

  send() {
    const content = this.data.draft.trim();
    if (!content) return;
    this.setData({
      draft: '',
      messages: this.data.messages.concat({
        id: `m-${Date.now()}`,
        content,
        mine: true
      })
    });
  }
});
