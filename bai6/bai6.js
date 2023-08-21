function devide() {
    let soThuNhat = parseInt(document.getElementById('sothu1').value);
    let soThuHai = parseInt(document.getElementById('sothu2').value);
    let arr1 = [];
    let arr2 = [];

    if (soThuNhat === soThuHai) {
        document.getElementById('result').innerText = 'không có số giữa 2 số đã nhập';
    } else {
        for (let i = soThuNhat + 1; i < soThuHai; i++) {
            if (i % 2 === 0) {
                arr1.push(i);
            } else {
                arr2.push(i);
            }
        }
        document.getElementById('result').innerText = 'Số chẵn: ' + arr1.join(', ') + '\nSố lẻ: ' + arr2.join(', ');
    }
}
