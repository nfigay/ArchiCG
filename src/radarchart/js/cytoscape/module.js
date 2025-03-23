const isServerEnvironment = window.location.protocol === 'http:' || window.location.protocol === 'https:';
if (isServerEnvironment) {
  // Dynamically import modules only in server mode
  import('./modules/module1.js').then(module => module.module1());
  import('./modules/module2.js').then(module => module.module2());
  import('./modules/module3.js').then(module => module.module3());
} else {
  console.log("Running locally. No modules will be imported.");
}