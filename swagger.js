// Add new schema definitions
const analyticsSchemas = {
  UrlAnalytics: {
    type: 'object',
    properties: {
      totalClicks: {
        type: 'number',
        example: 1500
      },
      uniqueClicks: {
        type: 'number',
        example: 1200
      },
      clicksByDate: {
        type: 'array',
        items: {
          type: 'object',
          properties: {
            date: {
              type: 'string',
              format: 'date',
              example: '2024-03-15'
            },
            count: {
              type: 'number',
              example: 150
            }
          }
        }
      },
      deviceType: {
        type: 'array',
        items: {
          type: 'object',
          properties: {
            name: {
              type: 'string',
              example: 'mobile'
            },
            uniqueClicks: {
              type: 'number',
              example: 800
            },
            uniqueUsers: {
              type: 'number',
              example: 600
            }
          }
        }
      }
    }
  }
};

// Add to existing doc object
doc.definitions = {
  ...doc.definitions,
  ...analyticsSchemas
};