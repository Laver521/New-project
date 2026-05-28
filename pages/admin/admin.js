Page({
  data: {
    tasks: [
      { title: '待确认交易纠纷', desc: '买家反馈评级盒运输中受损，需要平台介入。' },
      { title: '疑似重复发帖', desc: '同一张卡在 10 分钟内重复发布 3 次。' },
      { title: '线下活动报名审核', desc: '周六交换会还有 6 位新卡友待确认。' }
    ]
  },

  resolveTask(event) {
    wx.showToast({ title: `已处理${event.currentTarget.dataset.title}`, icon: 'none' });
  },

  ignoreTask() {
    wx.showToast({ title: '已标记稍后', icon: 'none' });
  }
});
