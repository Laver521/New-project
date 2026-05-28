const assert = require('assert');
const api = require('../services/api');

async function run() {
  const { cards, wants } = await api.getCards();
  assert.strictEqual(cards.length >= 3, true);
  assert.strictEqual(wants.includes('姚明 2002 Topps Chrome RC'), true);

  const curry = await api.getCard('curry-gold-01');
  assert.strictEqual(curry.card.player, 'Stephen Curry');
  assert.strictEqual(curry.card.tags.includes('篮球'), true);

  const post = await api.createPost({
    title: '测试换卡',
    type: '换卡',
    author: '测试卡友',
    body: '希望交换一张同级新秀卡。'
  });
  assert.strictEqual(post.post.replies, 0);
  assert.strictEqual(post.post.updatedAt, '刚刚');

  const { profile } = await api.getProfile();
  assert.strictEqual(profile.rating, '4.9');
  console.log('sports card exchange rules ok');
}

run();
