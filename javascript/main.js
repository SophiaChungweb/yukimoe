function timeyear(){
    var year = new Date().getFullYear();
    document.getElementById('year').textContent = year;
};

timeyear();