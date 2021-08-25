declare global {
  namespace NodeJS {
    interface Global {
      log: winston.Logger;
    }
  }
}
export default global;
