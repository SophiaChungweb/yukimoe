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
    

    // 在 smallnav 內新增，宣告變數
    let sn = document.getElementById('smallnav');

    // 建立 ul 框架，給予 id 名稱
    sn.appendChild(ul);
    // 賦予屬性 id or class
    ul.setAttribute("id", "phonenav");  

    let phonenav = document.getElementById('phonenav');

    let navclass = ['about', 'vline', 'shop', 'vline', 'message', 'vline', 'address'];
    let navcon = ['品牌故事', '︱', '購物說明', '︱', '客服留言', '︱', '門市資訊'];
    // 新增標籤時，程式的運作方式為：先新增標籤，賦予屬性，再指定新增的外框架(此為一個迴圈)
    // 迴圈內的數字 7，是因為陣列而產生，故要隨著陣列值的數量而增減
    for ( let i = 0; i < navclass.length; i++) {
        let li = document.createElement('li');
        // 新增屬性
        li.setAttribute("class", navclass[li]);
        // ul 內新增 li 清單
        phonenav.appendChild(li);

        // 新增連結 a
        let A = document.createElement('a');
        // 新增屬性 假連結 javascript:;
        A.setAttribute("href", "javascript:;");
        // li 內新增 a 連結
        li.appendChild(A);
        // 置入 陣列內容
        A.innerText = navcon[i];
    }
}

// menunav();
// 行動裝置 選單
function menunav() {
    let menunav = document.getElementById('menunav');
    // 隱藏 手機版選單
    menunav.style.display = "none";
}

pageload()

function pageload() {
    $('header').load("../web/header.html");
}