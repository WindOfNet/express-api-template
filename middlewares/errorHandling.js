import express from 'express'
import logger from '../utils/logger.js'

/**
 * @param {Error} error - The error object.
 * @param {express.Request} _req - The request object (not used in this middleware).
 * @param {express.Response} res - The response object.
 * @param {express.NextFunction} _next - The next middleware function (not used in this middleware).
 */
export default (error, _req, res, _next) => {
  logger.error(error)
  return res.status(500).send(error.message)
}
