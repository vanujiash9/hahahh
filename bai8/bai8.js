function soAmDuong(){
    let number = document.getElementById('input').value 
    if(number ===0){
        document.getElementById('result').innerText ='nhập lại số nguyên dương'
    }else{
        if( number < 0){
        document.getElementById('result').innerText = 'Đây là số âm'
        }else{
            document.getElementById('result').innerText = 'Đây là số dương'
        }
    }
}