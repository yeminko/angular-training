export class LoggingService {
  logs: Array<string> = [
    'Server is online',
    'Server is online',
    'Server is offline',
  ];

  printLog(log: string) {
    console.log(log);
  }

  addLog(log: string) {
    this.logs.push(log);
  }

  updateLog(index: number, log: string) {
    this.logs[index] = log;
  }
}
