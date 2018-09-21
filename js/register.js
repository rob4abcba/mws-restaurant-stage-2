/**
 * From https://developers.google.com/web/fundamentals/primers/service-workers/
 */
// RL debugger;
console.log('Just entered register.js');

if ('serviceWorker' in navigator) {
  window.addEventListener('load', function() {
    navigator.serviceWorker.register('../sw.js').then(function(registration) {
      // Registration was successful
      // RL debugger;
      console.log('RL5: ServiceWorker registration successful with scope: ', registration.scope);
    }, function(err) {
      // registration failed :(
      console.log('RL4: ServiceWorker registration failed: ', err);
    });
  });
}