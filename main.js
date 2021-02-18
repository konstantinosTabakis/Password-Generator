var show=document.querySelector("#showPassword")
var lengthOption=document.querySelector("#length")
var special= document.querySelector("#special")
var btn=document.querySelector("#generate")
var copy=document.querySelector("#copy")


let length=6
var chars="qwertyuioplkjhgfdsazxcvbnm1234567890QWERTYUIOPLKJHGFDSAZXCVBNM"
var specialChars=chars+"!@#$%^&*()_+=-\|]}[{';:/?.>,<" 
let selection=chars


function generate(){
    let result=""
    for(let i=0;i<length;i++){
        let num= Math.floor(Math.random()*selection.length)
        result+= selection.substring(num,num+1)
    }
    return result
}


copy.addEventListener("click",function() {
   
    var selection = window.getSelection();
    var range = document.createRange();
    range.selectNodeContents(show);
    selection.removeAllRanges();
    selection.addRange(range);
    document.execCommand("Copy");
  })
special.addEventListener("change",function(){
    if(special.checked==true){
        selection= specialChars
    }else{
        selection= chars
    }
})

lengthOption.addEventListener("change",function(){
    length=lengthOption.value
})

btn.addEventListener("click",function(){
    show.textContent=generate()
})
