// typescript
class Logger {
    log(msg: string) {
      console.log("LOG:", msg);
    }
  }
  
  const maybeLogger: Logger | undefined = Math.random() > 0.5 ? new Logger() : undefined;
  
  // call log only if maybeLogger exists
  // replace the next line
  maybeLogger?.log("Hello");