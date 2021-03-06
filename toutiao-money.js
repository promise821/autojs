/**
 * 头条-所有金币任务
 */
var clicks = require('function-clicks.js');
var others = require('function-others.js');
var sleeps = require('function-sleeps.js');
var swipes = require('function-swipes.js');

main();

function main() {
    others.initEnv();

    others.launchApp('com.ss.android.article.lite');

    task();
}

// 任务
function task() {
    console.log("---------- task start ----------");

    var buttonClickTask = id("ey").className("android.widget.TextView").text("任务");
    if (!buttonClickTask.exists()) {
        console.log("---------- 任务界面 nothing ----------");
        return false;
    }
    console.log("---------- 点击 任务界面 ----------");
    buttonClickTask.findOne().parent().click();
    sleeps.s3();

    taskLottery();
    taskSleep();
    taskTreasureBox();
    taskVideo();
    // taskNovel();

    console.log("---------- task end ----------");

    return true;
}

// 任务-抽奖
function taskLottery() {
    console.log("---------- task start ----------");

    var buttonClickTask = className("android.view.View").text("去抽奖");
    if (!buttonClickTask.exists()) {
        console.log("---------- check 去抽奖 nothing ----------");
        return false;
    }
    clicks.findOne(buttonClickTask);

    for (var i = 1; i <= 3; i++) {
        var buttonClickTask = className("android.view.View").text("今日剩" + i + "次");
        if (buttonClickTask.exists()) {
            clicks.findOne(buttonClickTask);
            swipes.return();
        }
    }

    swipes.return();

    console.log("---------- task end ----------");

    return true;
}

// 任务-睡觉赚钱
function taskSleep() {
    console.log("---------- task start ----------");

    var buttonClickTask = className("android.widget.Image").text("睡觉赚钱");
    if (!buttonClickTask.exists()) {
        console.log("---------- task sleep nothing ----------");
        return false;
    }
    console.log("---------- click sleep ----------");
    buttonClickTask.findOne().parent().click();
    sleeps.s3();

    var buttonClickTask = className("android.view.View").text("我睡醒了");
    if (buttonClickTask.exists()) {
        clicks.findOne(buttonClickTask);
    }
    
    var buttonClickTask = className("android.view.View").text("领取3600金币");
    if (buttonClickTask.exists()) {
        clicks.findOne(buttonClickTask);
    }
        
    var buttonClickTask = className("android.view.View").text("我要睡了");
    if (buttonClickTask.exists()) {
        clicks.findOne(buttonClickTask);
    }

    swipes.return();

    console.log("---------- task end ----------");

    return true;
}

// 任务-小说
function taskNovel() {
    console.log("---------- task novel start ----------");

    var buttonClickTask = className("android.widget.Button").text("看小说");
    if (!buttonClickTask.exists()) {
        console.log("---------- task novel nothing ----------");
        return false;
    }
    console.log("---------- click novel ----------");
    buttonClickTask.findOne().parent().click();
    sleeps.s3();

    console.log("---------- click last novel ----------");
    clicks.xy(264, 687);

    for (var i = 0; i < 50; i++) {
        swipes.right200();
        sleeps.s2to3();

        // 随机出现奖励金币，但是无法定位，只能先关闭
        // click(477, 1637);

        var buttonAd = id("ant");
        if (buttonAd.exists()) {
            console.log("this's ad, next");
            swipes.right200();
        }
    }

    swipes.return();

    console.log("---------- task novel end ----------");

    return true;
}

// 任务-视频
function taskVideo() {
    console.log("---------- task video start ----------");

    var buttonClickTask = className("android.widget.Button").text("去阅读");
    if (!buttonClickTask.exists()) {
        console.log("---------- task video nothing ----------");
        return false;
    }
    console.log("---------- click video ----------");
    buttonClickTask.findOne().parent().click();
    sleeps.s3();

    swipes.right();
    swipes.right();
    swipes.right();

    swipes.refresh();

    console.log("---------- click first video ----------");
    clicks.xy(465, 597);

    for (var i = 0; i < 50; i++) {
        swipes.right();
        sleeps.s10to30();
    }

    swipes.return();

    console.log("---------- task video end ----------");

    return true;
}

// 任务-宝箱
// every 10m
function taskTreasureBox() {
    console.log("---------- taskTreasureBox start ----------");

    console.log("---------- 点击 宝箱 ----------");
    clicks.xy(750 + 100, 1860 + 70);

    if (text("Close").exists()) {
        clicks.xy(750 + 100, 1860 + 70);
        return false;
    }

    var buttonClickAd = className("android.view.View").text("看完视频再领");
    if (!buttonClickAd.exists()) {
        console.log("---------- taskTreasureBox nothing ----------");
        return false;
    }

    console.log("---------- 点击 视频 ----------");
    buttonClickAd.click();
    sleeps.s35to40();

    closeAd();

    console.log("---------- taskTreasureBox end ----------");

    return true;
}

function closeAd() {
    var buttonCloseAd = className("android.widget.LinearLayout");
    if (!buttonCloseAd.exists()) {
        console.log("---------- closeAd nothing ----------");
        return false;
    }

    console.log("---------- 点击 关闭广告 ----------");
    buttonCloseAd.click();
    sleeps.s3();

    return true;
}
