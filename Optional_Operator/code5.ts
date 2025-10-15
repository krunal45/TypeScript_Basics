// typescript
type Config = {
    server?: {
      settings?: {
        maxConnections?: number;
      }
    }
  };
  
  function printMax(config?: Config) {
    // If maxConnections exists, print it; otherwise print "Not configured"
    const maxConnections = config?.server?.settings?.maxConnections ?? "Not configured";
    if (maxConnections!=='Not configured') {
        console.log('Max connections:',maxConnections);
    } else {
        console.log(maxConnections);
    }
}
  
  printMax({ server: { settings: { maxConnections: 10 } } }); // expect: Max connections: 10
  printMax({}); // expect: Not configured