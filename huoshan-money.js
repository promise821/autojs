/**
 * 火山-所有金币任务
 */
var sleeps = require('sleep.js');
var swipes = require('swipe.js');

main();

function main() {
    initEnv();

    launchApp("火山极速版");
    sleeps.s10();

    swipes.return();

    console.log("---------- click 任务界面 ----------")
    click(621, 2201);
    sleeps.s3();

    taskTreasureBox();
    taskAd20();
    taskVideo();
}

// 任务-小视频
function taskVideo() {
    console.log("---------- task video start ----------")

    console.log("---------- index page ----------")
    click(87, 2205);
    sleeps.s3();

    for (var i = 0; i < 50; i++) {
        swipes.down();
        sleeps.s5to10();
    }

    swipes.return();

    console.log("---------- task video end ----------")

    return true;
}

// 任务-20次广告
function taskAd20() {
    console.log("---------- taskAd20 start ----------")

    for (var i = 0; i < 20; i++) {
        var buttonAd = className("android.view.View").text("领100金币");
        if (buttonAd.exists()) {
            buttonAd.click();
            sleeps.s35to40();
            closeAd();
        } else if (className("android.view.View").text("去赚钱").exists()){
            className("android.view.View").text("去赚钱").click();
            sleeps.s35to40();
            closeAd();
        }
    }

    console.log("---------- taskAd20 end ----------")

    return true;
}

// 任务-宝箱
// every 10m
function taskTreasureBox() {
    console.log("---------- taskTreasureBox start ----------")

    var buttonBox = className("android.view.View").text("开宝箱得金币");
    if (!buttonBox.exists()) {
        console.log("---------- click 宝箱 nothing ----------")
        return false;
    }
    console.log("---------- click 宝箱 ----------")
    buttonBox.findOne().click();
    sleeps.s1();

    var buttonAd = className("android.view.View").text("看视频 金币翻8倍");
    if (!buttonAd.exists()) {
        console.log("---------- click ad nothing ----------")
        return false;
    }
    console.log("---------- click ad ----------")
    buttonAd.findOne().click();
    sleeps.s35to40();

    closeAd();

    console.log("---------- taskTreasureBox end ----------")

    return true;
}

// 关闭广告
function closeAd() {
    var buttonCloseAd = className("android.widget.TextView").text("关闭广告");
    if (!buttonCloseAd.exists()) {
        console.log("---------- click ad nothing ----------")
        return false;
    }
    console.log("---------- click ad ----------")
    buttonCloseAd.click();
    sleeps.s3();

    var buttonCloseAdConfirm = id("sp");
    if (!buttonCloseAdConfirm.exists()) {
        console.log("---------- close ad confirm nothing ----------")
        return false;
    }
    console.log("---------- click ad confirm ----------")
    buttonCloseAdConfirm.click();
    sleeps.s3();

    return true;
}

/**
 * 初始化环境
 */
function initEnv() {
    auto();

    setScreenMetrics(1080, 2340);
}