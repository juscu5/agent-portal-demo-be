const winston = require('winston');

const logLevels = {
  error: 'error',
  warn: 'warn',
  info: 'info',
  http: 'http',
  verbose: 'verbose',
  debug: 'debug',
  silly: 'silly',
};

let logLevel = logLevels.silly; // default all logs

if (process.env.LOG_LEVEL === 'prod') {
  logLevel = logLevels.info;
}

const logger = winston.createLogger({
  level: logLevel,
  /* log format includes time, level and the log itself */
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.printf(({ level, message, timestamp }) => `${timestamp} ${level}: ${message}`),
  ),
});

/* log to console if not production */
if (process.env.LOG_LEVEL === 'prod') {
  logger.add(new winston.transports.File({ filename: './logs/error.log', level: 'error' }));
  logger.add(new winston.transports.File({ filename: './logs/combined.log' }));
  logger.add(new winston.transports.Console());
} else if (process.env.LOG_LEVEL === 'debug') {
  logger.add(new winston.transports.Console());
}

module.exports = logger;
