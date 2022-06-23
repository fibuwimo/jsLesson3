window.onload=function(){
    const hides=document.getElementsByClassName("hide");
    for(let h of hides){
        h.addEventListener("mouseover",(e)=>{
            e.target.style.color="blue";
        });
        h.addEventListener("mouseout",(e)=>{
            e.target.style.color="#aaa";
            e.target.style.fontSize="16px";
        });
        h.addEventListener("click",(e)=>{
            e.target.style.fontSize="40px";
        });
    }
}