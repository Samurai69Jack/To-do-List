export const groupByType = (analytics, key) => {
  const grouped = analytics.reduce((acc, item) => {
    const type = item[key];
    if (!acc[type]) {
      acc[type] = {
        name: type,
        uniqueClicks: new Set(),
        uniqueUsers: new Set()
      };
    }
    acc[type].uniqueClicks.add(item.id);
    acc[type].uniqueUsers.add(item.ip_address);
    return acc;
  }, {});

  return Object.values(grouped).map(item => ({
    name: item.name,
    uniqueClicks: item.uniqueClicks.size,
    uniqueUsers: item.uniqueUsers.size
  }));
};

export const calculateAnalytics = (analytics) => ({
  totalClicks: analytics.length,
  uniqueClicks: new Set(analytics.map(a => a.id)).size,
  uniqueUsers: new Set(analytics.map(a => a.ip_address)).size,
  clicksByDate: groupByDate(analytics),
  osType: groupByType(analytics, 'os_type'),
  deviceType: groupByType(analytics, 'device_type')
});