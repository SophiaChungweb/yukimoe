copyrightcontent ();
timeyear();

function timeyear(){
    var year = new Date().getFullYear();
    document.getElementById('year').textContent = year;
};


// 新增 html 的標籤與內容

function copyrightcontent () {
    // 宣告變數 在 html 內新增 div 標籤
    let div = document.createElement('div');

    // 宣告變數 在哪個 html 標籤之內新增 div
    let footer = document.getElementById('footer');

    // 在 footer 內，新增 div 子元素
    footer.appendChild(div);

    // 純文字
    // div.textContent = "DIY COOKIE版權宣告 &copy; 2019";

    // html語法
    div.innerHTML = 'DIY COOKIE版權宣告 &copy; 2019 - <span id="year"></span> YUKIMOE DESIGN';
}