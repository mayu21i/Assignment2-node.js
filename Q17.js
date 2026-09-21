//q17
const os = require("node:os");

function osInfo(){
    let platform = os.platform();
    let arch = os.arch();
    return {
        Platform: platform,
        Arch: arch
    }
}
console.log(osInfo());