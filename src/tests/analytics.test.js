import { describe, it, expect, beforeEach } from 'vitest';
import { calculateAnalytics, groupByType } from '../utils/analyticsUtils';
import { getLast7Days, groupByDate } from '../utils/dateUtils';

describe('Analytics Utils', () => {
  let mockAnalytics;

  beforeEach(() => {
    const today = new Date();
    mockAnalytics = [
      {
        id: '1',
        ip_address: '1.1.1.1',
        os_type: 'Windows',
        device_type: 'desktop',
        created_at: today.toISOString()
      },
      {
        id: '2',
        ip_address: '1.1.1.1',
        os_type: 'Windows',
        device_type: 'desktop',
        created_at: new Date(today.setDate(today.getDate() - 1)).toISOString()
      },
      {
        id: '3',
        ip_address: '2.2.2.2',
        os_type: 'iOS',
        device_type: 'mobile',
        created_at: new Date(today.setDate(today.getDate() - 2)).toISOString()
      }
    ];
  });

  describe('Date Grouping', () => {
    it('should handle empty analytics data', () => {
      const result = groupByDate([]);
      expect(result).toHaveLength(7);
      expect(result.every(day => day.count === 0)).toBe(true);
    });

    it('should handle clicks from future dates', () => {
      const futureDate = new Date();
      futureDate.setDate(futureDate.getDate() + 1);
      
      const analytics = [...mockAnalytics, {
        id: '4',
        created_at: futureDate.toISOString()
      }];
      
      const result = groupByDate(analytics);
      expect(result).toHaveLength(7);
    });
  });

  describe('Device Analytics', () => {
    it('should handle unknown device types', () => {
      const analytics = [...mockAnalytics, {
        id: '4',
        ip_address: '3.3.3.3',
        device_type: 'unknown',
        created_at: new Date().toISOString()
      }];

      const result = calculateAnalytics(analytics);
      expect(result.deviceType.some(d => d.name === 'unknown')).toBe(true);
    });

    it('should calculate correct percentages', () => {
      const result = calculateAnalytics(mockAnalytics);
      const desktopStats = result.deviceType.find(d => d.name === 'desktop');
      expect(desktopStats.uniqueUsers).toBe(1);
      expect(desktopStats.uniqueClicks).toBe(2);
    });
  });
});