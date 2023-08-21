function tuDaiNhat() {
    let text = document.getElementById('input').value;
    let words = text.split(' ');
    let longestWord= '';

    for (let i = 0; i < words.length; i++) {
        if (words[i].length > longestWord.length) {
            longestWord = words[i];
        }
    }
     
    document.getElementById('result').innerText = longestWord;
}
