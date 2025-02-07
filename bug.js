const express = require('express');
const app = express();
app.get('/', (req, res) => {
  // Asynchronous operation that might fail
  doSomethingAsync().then(() => {
    res.send('OK');
  }).catch(err => {
    // Error handling missing here.  Express doesn't automatically handle async errors
    console.error('Error:', err);
  });
});
app.listen(3000, () => console.log('Server listening on port 3000'));

async function doSomethingAsync() {
  // Simulate an asynchronous operation that might throw an error
  await new Promise((resolve, reject) => {
    setTimeout(() => {
      // Simulate an error 50% of the time
      if (Math.random() < 0.5) {
        reject(new Error('Something went wrong'));
      } else {
        resolve();
      }
    }, 1000);
  });
}