const api = require('../../services/api');

Page({
  data: {
    cards: [],
    filteredCards: [],
    wants: [],
    keyword: '',
    sports: ['全部', '篮球', '足球', '棒球'],
    activeSport: '全部'
  },

  async onShow() {
    const result = await api.getCards();
    this.setData({
      cards: result.cards,
      wants: result.wants
    });
    this.applyFilters();
  },

  onSearch(event) {
    this.setData({ keyword: event.detail.value });
    this.applyFilters();
  },

  setSport(event) {
    this.setData({ activeSport: event.currentTarget.dataset.sport });
    this.applyFilters();
  },

  applyFilters() {
    const keyword = this.data.keyword.trim().toLowerCase();
    const sport = this.data.activeSport;
    const filteredCards = this.data.cards.filter((card) => {
      const text = `${card.player} ${card.team} ${card.brand} ${card.tags.join(' ')}`.toLowerCase();
      const keywordMatched = !keyword || text.includes(keyword);
      const sportMatched = sport === '全部' || card.tags.includes(sport);
      return keywordMatched && sportMatched;
    });
    this.setData({ filteredCards });
  },

  openCard(event) {
    wx.navigateTo({ url: `/pages/chat/chat?cardId=${event.currentTarget.dataset.id}` });
  },

  goPost() {
    wx.navigateTo({ url: '/pages/onboarding/onboarding' });
  }
});
