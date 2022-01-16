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

    // html語法 若要寫入 id or class ，最外層需要用 單引號 包覆
    div.innerHTML = 'DIY COOKIE版權宣告 &copy; 2019 - <span id="year"></span> YUKIMOE DESIGN';

    // 調整 框架 位置

    let address = document.getElementById('address');

    // 3. 在被選取的元素之前插入內容 before() 置入被選取元素之前
    address.before(div);
}

smallnavcon();

// 新增 smallnavcon 的內容
function smallnavcon() {
    // 新增標籤 ul 與 li
    let ul = document.createElement('ul');
    let li = document.createElement('li');

    // 在 smallnav 內新增，宣告變數
    let SN = document.getElementById('smallnav');

    // 建立 ul 框架，給予 id 名稱
    SN.appendChild(ul);
}