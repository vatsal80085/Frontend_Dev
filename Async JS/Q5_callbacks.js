
function design(cb){setTimeout(()=>{console.log("design");cb();},1000);}
function build(cb){setTimeout(()=>{console.log("build");cb();},1000);}
function test(cb){setTimeout(()=>{console.log("test");cb();},1000);}
function deploy(cb){setTimeout(()=>{console.log("deploy");cb();},1000);}
function celebrate(cb){setTimeout(()=>{console.log("celebrate");cb();},1000);}
design(()=>{build(()=>{test(()=>{deploy(()=>{celebrate(()=>{})})})})});
