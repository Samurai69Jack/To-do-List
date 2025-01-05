/**
 * @swagger
 * /api/analytics/{alias}:
 *   get:
 *     summary: Get analytics for a specific URL
 *     parameters:
 *       - in: path
 *         name: alias
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Analytics data for the URL
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/UrlAnalytics'
 * 
 * /api/analytics/topic/{topic}:
 *   get:
 *     summary: Get analytics for URLs under a specific topic
 *     parameters:
 *       - in: path
 *         name: topic
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Analytics data for the topic
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/TopicAnalytics'
 */