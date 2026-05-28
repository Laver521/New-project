const cards = [
  {
    id: 'curry-gold-01',
    player: 'Stephen Curry',
    team: 'Warriors',
    brand: 'Panini Prizm',
    year: '2021-22',
    rarity: 'Gold /10',
    grade: 'PSA 10',
    price: '¥12,800',
    action: '可交换',
    owner: '湾区三分线',
    city: '上海',
    heat: 98,
    image: 'https://images.unsplash.com/photo-1546519638-68e109498ffc?auto=format&fit=crop&w=900&q=80',
    tags: ['篮球', '限编', '高分评级']
  },
  {
    id: 'messi-auto-02',
    player: 'Lionel Messi',
    team: 'Argentina',
    brand: 'Topps Chrome',
    year: '2022',
    rarity: 'Auto',
    grade: 'BGS 9.5',
    price: '¥8,600',
    action: '出售',
    owner: '蓝白收藏家',
    city: '杭州',
    heat: 94,
    image: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&w=900&q=80',
    tags: ['足球', '签字', '世界杯']
  },
  {
    id: 'ohtani-rc-03',
    player: 'Shohei Ohtani',
    team: 'Dodgers',
    brand: 'Bowman Chrome',
    year: '2018',
    rarity: 'Rookie',
    grade: 'PSA 9',
    price: '¥5,200',
    action: '求同级换',
    owner: '二刀流实验室',
    city: '北京',
    heat: 91,
    image: 'https://images.unsplash.com/photo-1508344928928-7165b67de128?auto=format&fit=crop&w=900&q=80',
    tags: ['棒球', '新秀卡', '热门']
  }
];

const posts = [
  {
    id: 'p1',
    title: '想用库里 Silver + 现金换一张同年 Gold，有愿意聊的吗？',
    author: '湾区三分线',
    type: '换卡',
    replies: 18,
    updatedAt: '10分钟前',
    body: '预算可以补到 4k，优先 PSA 10，上海可面交。'
  },
  {
    id: 'p2',
    title: '整理了一份足球签字卡避坑清单，欢迎补充',
    author: '蓝白收藏家',
    type: '经验',
    replies: 42,
    updatedAt: '38分钟前',
    body: '重点看证书、墨迹状态和卖家历史成交记录。'
  },
  {
    id: 'p3',
    title: '周六线下交换会报名，限 30 人',
    author: '城市卡社',
    type: '活动',
    replies: 9,
    updatedAt: '1小时前',
    body: '带卡册即可入场，现场有评级盒展示区。'
  }
];

const wants = [
  'LeBron James 2003 Topps Chrome RC',
  'Kobe Bryant 1996 Finest',
  'C罗 2018 Prizm World Cup',
  '姚明 2002 Topps Chrome RC'
];

function resolve(result) {
  return Promise.resolve(result);
}

function toastError(error) {
  wx.showToast({
    title: error.message || '操作失败',
    icon: 'none'
  });
  throw error;
}

module.exports = {
  toastError,
  getCards: () => resolve({ cards, wants }),
  getPosts: () => resolve({ posts }),
  getCard: (id) => resolve({ card: cards.find((item) => item.id === id) || cards[0] }),
  createPost: (payload) => resolve({
    post: {
      id: `local-${Date.now()}`,
      replies: 0,
      updatedAt: '刚刚',
      ...payload
    }
  }),
  getProfile: () => resolve({
    profile: {
      nickname: '卡友 Ming',
      city: '上海',
      level: '资深交换者',
      trades: 18,
      rating: '4.9',
      following: 36,
      inventory: 72
    },
    watchlist: wants.slice(0, 3),
    cards: cards.slice(0, 2)
  })
};
