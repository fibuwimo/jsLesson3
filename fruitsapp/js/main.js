window.onload=function(){
    const result=document.getElementById("result");
    const fruits=document.getElementsByClassName("fruits");
    function numberChange(){
        let sum =0;
        for(let f of fruits){
            sum += f.value * f.getAttribute("data-price");
        }
        result.textContent=sum+"円です！"
    }
    for(let i=0;i<fruits.length;i++){
        fruits[i].addEventListener("change",numberChange);
    }
}