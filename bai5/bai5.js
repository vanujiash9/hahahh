function gachNoi(){
    let text = document.getElementById('input').value 
    let strings = text.split('')
    let newString = text.replace(/ /g,'-')
    document.getElementById('result').innerText = newString;
}