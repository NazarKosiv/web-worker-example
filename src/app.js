const worker = new Worker('worker.js');

worker.addEventListener('message', data => {
  console.log(data);
});
