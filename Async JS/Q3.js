
function getBugs() {
  return new Promise((res, rej) => {
    const fail = Math.random() < 0.3;
    setTimeout(() => fail ? rej("Failed to fetch bugs") : res(["UI glitch","API timeout","Login failure"]), 1000);
  });
}
getBugs()
  .then(bugs => console.table(bugs))
  .catch(err => console.log(err));
