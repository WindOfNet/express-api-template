import express from 'express'
import logger from '../utils/logger.js'

/**
 * @param {express.Request} req - The request object.
 * @param {express.Response} _res - The response object (not used in this middleware).
 * @param {express.NextFunction} next - The next middleware function.
 */
export default (req, _res, next) => {
  logger.info(`%s request received for %s`, req.method, req.url)
  next()
}
