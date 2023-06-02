import { createLogger, format, transports } from 'winston'
import DailyRotateFile from 'winston-daily-rotate-file'

const logger = createLogger({
  level: 'info',
  format: format.combine(
    format.timestamp({
      format: 'YYYY-MM-DD HH:mm:ss',
    }),
    format.errors({ stack: true }),
    format.splat(),
    format.json()
  ),
  transports: [
    new transports.File({ filename: 'logs/error.log', level: 'error' }),
    new transports.File({ filename: 'logs/combined.log' }),
    new DailyRotateFile({
      filename: 'logs/%DATE%.log',
      datePattern: 'YYYY-MM-DD',
      frequency: 'daily',
      maxFiles: '14d',
    }),
  ],
})

//
// If we're not in production then **ALSO** log to the `console`
// with the colorized simple format.
//
if (!process.env['NODE_ENV'] !== 'production') {
  logger.add(
    new transports.Console({
      format: format.combine(format.colorize(), format.simple()),
    })
  )
}

// logger.log('info', 'Hello, this is a raw logging event');
// logger.warn('eeeee');
// logger.error('eeeee', { hello: 'world' });

// const profiler = logger.startTimer();
// setTimeout(function () {
//   profiler.done({ message: 'Logging message' });
// }, 1000);

export default logger
