import { Parser } from 'json2csv';
import { getUrlAnalytics } from './analyticsService.js';

export const exportUrlAnalytics = async (alias, format = 'csv') => {
  const analytics = await getUrlAnalytics(alias);
  
  if (format === 'csv') {
    const fields = [
      'totalClicks',
      'uniqueClicks',
      { 
        label: 'Date',
        value: 'clicksByDate.date'
      },
      {
        label: 'Clicks',
        value: 'clicksByDate.count'
      }
    ];
    
    const parser = new Parser({ fields });
    return parser.parse(analytics);
  }
  
  return JSON.stringify(analytics, null, 2);
};