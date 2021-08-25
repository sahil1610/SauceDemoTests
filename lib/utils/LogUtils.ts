import * as winston from "winston";

export default class LogUtil {
  level: string;
  constructor(level: string) {
    this.level = level;
  }

  /**
   * get console logger with provided log level
   * @returns {winston.Logger}
   */
  getLogger(): winston.Logger {
    return winston.createLogger({
      level: this.level,
      format: winston.format.combine(
        winston.format.colorize({ all: true }),
        winston.format.simple()
      ),
      transports: [new winston.transports.Console()],
    });
  }
}
