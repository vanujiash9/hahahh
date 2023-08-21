function xepB(){
    let text = document.getElementById('input').value
  let strings = text.split('')
  strings.sort();
  let sortStrings = strings.join('')
  document.getElementById('result').innerText = sortStrings;
}


