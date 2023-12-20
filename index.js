const {
    exec
} = require('child_process');
const path = require('path');
const fs = require('hexo-fs');
const utils = require("./libs/utils");
var config = Object.assign({
    enable: false,
    expire: 30,
    rclonepath: "",
    type: [],
}, hexo.config.autobackup);

const flag = "Auto Backup Plugin: "
const w_rclone_filename = "rclone.exe"
const hexo_dir = path.dirname(path.dirname(__dirname));

hexo.on('after_deploy', function () {
    if (!config.enable) {
        return;
    }
    start();
});

const dir = utils.genDateStr();
start();

function start() {
    hexo.log.info(flag + "Backup " + dir);
    config.type.forEach(ele => {
        parseType(ele);
    });
}


function parseType(type) {
    const arr = type.split("<");
    if(!arr[0] || !arr[1]) {
        hexo.log.error(flag + "Invaild type: " + type);
        return;
    }
    type = arr[0].trim();
    dest_path = arr[1].trim();
     // Cache is good, but it does not help anything
    const real_dest_path = path.join(dest_path, dir);
    const source = path.join(real_dest_path, "source");
    const themes = path.join(real_dest_path, "themes")
    // const packagejson = path.join(real_dest_path, "package.json")
    // const configyml = path.join(real_dest_path, "_config.yml")
    if (!config.rclonepath) {hex
        hexo.log.error(flag + "rclonepath not defined!");
        return;
    }
    if (!fs.existsSync(config.rclonepath)) {
        hexo.log.error(flag + "rclone.exe not exist!");
        return;
    }
    const o_source = path.join(hexo_dir, "source");
    const o_themes = path.join(hexo_dir, "themes");
    const o_packagejson = path.join(hexo_dir, "package.json");
    const o_configyml = path.join(hexo_dir, "_config.yml");
    const rcp = path.join(config.rclonepath, w_rclone_filename );
    if (type == "local") {
        type = "";
    } else {
        type += ":";
    }
    cmdWithOutput(`${rcp} copy ${o_source} ${type}${source}`)
    cmd(`${rcp} copy ${o_themes} ${type}${themes}`)
    cmd(`${rcp} copy ${o_packagejson} ${type}${real_dest_path}`)
    cmd(`${rcp} copy ${o_configyml} ${type}${real_dest_path}`)
    if (type == "") type = "local";
    hexo.log.info(flag + type + " backup running!");
}

function cmdWithOutput(cmd) {
    exec(cmd, (error, stdout, stderr) => {
        if (error) {
            hexo.log.error(flag + " backup miscondigured!");
            hexo.log.error(`CMD Err: ${error.message}`);
        }
    });
}

function cmd(cmd) {
    exec(cmd, (error, stdout, stderr) => {
        if (error) {
            hexo.log.error(flag + " cmd error!");
        }
    });
}

