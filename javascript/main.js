// 瀏覽器的控制台 列印語法
/* 雙引號(")和單引號(')為字串，看習慣，兩者皆可，有人說專業用雙引號*/

// 變數 命名：英文開頭，英文與數字，底線，javascript的關鍵字不能設定，英文可設定大小寫混用
// es5 版本 var
// 宣告變數
var one;
var ONE;
var One;
var O_ne;
var O_01ne;

// 賦予 值
one = 1;
ONE = "01";
console.log(one);
console.log(ONE);
console.log("02");


// 日期函數 Date 產生新的 Date
// var year = new.Date().year;


// 年份變數
// var year = "2022";
// 由html顯示資料
// document.getElementById('year').textContent = year;

// 條件判斷 if... else 單一條件
var number = 12;
// 顯示條件成立，執行的資料
if ( number < 5) {
    console.log("數字小於5");
}

if ( number > 10 ) console.log("數字大於 10");

if ( number > 10 )
    console.log("數字為："+number);

// 顯示條件成立，執行的資料，或是不成立時，執行的資料
// if () {

// } else {

// }