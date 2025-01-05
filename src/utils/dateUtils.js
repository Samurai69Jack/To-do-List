export const getLast7Days = () => {
  const dates = [];
  for (let i = 6; i >= 0; i--) {
    const date = new Date();
    date.setDate(date.getDate() - i);
    dates.push(date.toISOString().split('T')[0]);
  }
  return dates;
};

export const groupByDate = (analytics) => {
  const clicksByDate = {};
  getLast7Days().forEach(date => {
    clicksByDate[date] = 0;
  });

  analytics.forEach(click => {
    const date = new Date(click.created_at).toISOString().split('T')[0];
    if (clicksByDate[date] !== undefined) {
      clicksByDate[date]++;
    }
  });

  return Object.entries(clicksByDate).map(([date, count]) => ({ date, count }));
};