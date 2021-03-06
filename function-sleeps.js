/**
 * 延迟执行
 */
var s = {};

/**
 * 获取随机整数
 */
s.getRandomInt = function (max) {
    let value = Math.floor(Math.random() * Math.floor(max));
    return value >= 2 ? value : 2;
};

s.getRandom = function (min, max) {
    let value = Math.floor(Math.random() * Math.floor(max));
    return value >= min ? value : min;
};

// x秒
s.custom = function (time) {
    sleep(time * 1000);
};

// 2 ~ 3 秒
s.s2to3 = function () {
    s.custom(s.getRandomInt(3));
};

// 2 ~ 4 秒
s.s2to4 = function () {
    s.custom(s.getRandomInt(4));
};

// 2 ~ 5 秒
s.s2to5 = function () {
    s.custom(s.getRandomInt(5));
};

// 2 ~ 10 秒
s.s2to10 = function () {
    s.custom(s.getRandomInt(10));
};

// 5 ~ 10 秒
s.s5to10 = function () {
    s.custom(s.getRandom(5, 10));
};

// 10 ~ 20 秒
s.s10to20 = function () {
    s.custom(s.getRandom(10, 20));
};

// 10 ~ 30 秒
s.s10to30 = function () {
    s.custom(s.getRandom(10, 30));
};

// 15 ~ 20 秒
s.s15to20 = function () {
    s.custom(s.getRandom(15, 30));
};

// 35 ~ 40 秒
s.s35to40 = function () {
    s.custom(s.getRandom(35, 40));
};

// 60 ~ 70 秒
s.s60to70 = function () {
    s.custom(s.getRandom(60, 70));
};

// 1秒
s.s1 = function () {
    sleep(1 * 1000);
};

// 3秒
s.s3 = function () {
    sleep(3 * 1000);
};

// 5秒
s.s5 = function () {
    sleep(5 * 1000);
};

// 10秒
s.s10 = function () {
    sleep(10 * 1000);
};

// 30秒
s.s30 = function () {
    sleep(30 * 1000);
};

// 35秒
s.s35 = function () {
    sleep(35 * 1000);
};

// 50秒
s.s50 = function () {
    sleep(50 * 1000);
};

// 60秒
s.s60 = function () {
    sleep(60 * 1000);
};

module.exports = s;
