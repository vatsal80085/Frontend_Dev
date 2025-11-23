
function step(name){return new Promise(res=>setTimeout(()=>{console.log(name);res();},1000));}
async function pipeline(){
  await step("design");
  await step("build");
  await step("test");
  await step("deploy");
  await step("celebrate");
}
pipeline();
