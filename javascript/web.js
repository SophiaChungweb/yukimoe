phonemenushow2();

function phonemenushow2() {
    // $ jQuery的變數前綴詞
    // 隱藏選單
    $('#menunav').hide();

    // 開啟選單
    $('#menubtn').click( function() {
        $('#menunav').show();
    });

    // 關閉選單
    $('#close').click( function() {
        $('#menunav').hide();
    });
}

