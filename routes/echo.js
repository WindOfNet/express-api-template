import express from 'express'
import { param, query } from 'express-validator'
import requestValidation from '../middlewares/requestValidation.js'
import controller from '../controllers/echo.js'

const router = express.Router()

/**
 * @openapi
 * /echo/{message}:
 *   get:
 *     tags:
 *       - echo
 *     description: echo result
 *     parameters:
 *       - in: path
 *         name: message
 *         required: true
 *         description: echo message, 這裡有個 "SAP" 的小驚喜
 *         schema:
 *           type: string
 *       - in: query
 *         name: count
 *         required: false
 *         description: "回音次數(1~5), default: 1"
 *         schema:
 *           type: number
 *     responses:
 *       200:
 *         description: operation successful
 *         content:
 *           application/json:
 *             schema:
 *               type: string
 *       400:
 *         description: 傳遞的參數不合法
 */
router.get(
  '/echo/:message',
  param('message').isString(),
  query('count').default(1).isInt({ min: 1, max: 5 }),
  requestValidation,
  controller.echo
)

export default router
