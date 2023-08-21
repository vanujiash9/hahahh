function reverse() {
    let text = document.getElementById('input').value;
    let result = '';
    //Test
    for (let i = 0; i< text.length-1;i--) {
        result += text[i]
    }
    document.getElementById('result').innerHTML = result;

}