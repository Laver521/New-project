function formatStatus(status) {
  const map = {
    draft: '待完善资料',
    pending: '审核中',
    approved: '已认证',
    rejected: '认证未通过',
    banned: '账号受限'
  };
  return map[status] || status || '未知';
}

function formatTime(value) {
  if (!value) return '';
  const date = new Date(value);
  return `${date.getMonth() + 1}/${date.getDate()} ${String(date.getHours()).padStart(2, '0')}:${String(date.getMinutes()).padStart(2, '0')}`;
}

module.exports = {
  formatStatus,
  formatTime
};
