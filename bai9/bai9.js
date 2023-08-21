function divide(){
    let chuoi = document.getElementById('input1').value;
            let kiTu = document.getElementById('input2').value;
            let newString = chuoi.split('');
            let charCount = 0;

            for (let i = 0; i < newString.length; i++) {
                if (newString[i] === kiTu) {
                    charCount++;
                }
            }
    
    document.getElementById('result').innerText=charCount +' lần xuất hiện'
}