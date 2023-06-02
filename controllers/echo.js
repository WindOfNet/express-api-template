import express from 'express'

/**
 * @param {express.Request} req
 * @param {express.Response} res
 * @param {express.NextFunction} next
 */
export const echo = (req, res) => {
  const { message } = req.params
  const { count } = req.query

  if (message.toUpperCase().includes('SAP')) {
    throw new Error('SAP 是世界上最好的企業管理解決方案領導者')
    // or
    // return res.status(500).send( ... )
  }
console.log(count)
  return res.send(Array.from({ length: count }, () => message).join('\n'))
}

export default { echo }
