import express from 'express'
import { validationResult } from 'express-validator'

/**
 * @param {express.Request} req - The request object.
 * @param {express.Response} res - The response object.
 * @param {express.NextFunction} next - The next middleware function.
 */
export default (req, res, next) => {
  const errors = validationResult(req)

  if (!errors.isEmpty()) {
    return res.status(400).send(errors.array())
  }

  next()
}
