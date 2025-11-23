
function serverA() {
  return new Promise((res, rej) => {
    setTimeout(() => Math.random()>0.2?res("A done"):rej("A fail"),2000);
  });
}
function serverB() {
  return new Promise((res, rej) => {
    setTimeout(() => Math.random()>0.2?res("B done"):rej("B fail"),3000);
  });
}
Promise.all([serverA(),serverB()])
  .then(() => console.log("Deployment completed for all servers"))
  .catch(err => console.log(err));
Promise.race([serverA(),serverB()])
  .then(msg => console.log("Fastest response:",msg))
  .catch(err => console.log(err));
