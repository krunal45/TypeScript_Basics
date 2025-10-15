// typescript
type Options = {
    onComplete?: (message: string) => void;
  };
  
  debugger;
  function doTask(opts: Options) {
    // call opts.onComplete with "Done" only if it exists, using optional chaining
    // then continue
    opts.onComplete?.("XYZ");//Condition(?) will check neither the parameter value is null or undefined. If yes then only it will return 'Done'.
    console.log("Task finished");
  }
  
  debugger;
  doTask(
    { 
        onComplete: (m) => console.log("Callback:", m) 
    }
); // expect: Callback: Done
  doTask({
    
  }); // expect: no error 