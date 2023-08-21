function tamGiac(){
    let number = parseInt(document.getElementById('number').value) 
    let result =''
    for( let i =1; i<=number; i++){
        for(let j=1; j<=i; j++){
            result +='*'
        }
        result +="<br>"
    }
    document.getElementById('result').innerHTML = result;
}