function kiemTraChuoi() {
    let a = document.getElementById('in').value;
    
    if ( a === 'hoclaptrinh') {
        document.getElementById('result').innerText = 'True';
    } else {
        document.getElementById('result').innerText = 'False';
    }
}

