//offer close function
 const offerclose =document.getElementById("offerClose");

 offerclose.addEventListener("click",()=>{
    offerclose.parentElement.remove()
 })
 
 //side menu function

 const sidemenu=document.getElementById("side-menu")
 const sidenavbar=document.getElementById("sidenav")
 const closenav=document.getElementById("closenav")

 sidemenu.addEventListener("click",()=>{
    sidenavbar.style.marginRight =0;
 })

 closenav.addEventListener("click",()=>{
    sidenavbar.style.marginRight="-60%";
 })

 //slider function
 const imgs=document.getElementsByClassName("slider__img");
 const leftArrow=document.getElementById("leftArrow");
 const rightArrow=document.getElementById("rightArrow");

 let slidermargin =0;
 
 rightArrow.addEventListener("click",

    function(){
        slidermargin=slidermargin +100

        if (slidermargin > 200){
            slidermargin=0
            imgs[0].style.marginLeft=0;
        }
        else{
            imgs[0].style.marginLeft="-"+slidermargin + "vw";
        }
    }
 )
 
leftArrow.addEventListener("click",

    function () {

        if (slidermargin == 0) {

            slidermargin = 0
            imgs[0].style.marginLeft = "-" + slidermargin + "vw";
        }
        else {
            slidermargin = slidermargin - 100
            imgs[0].style.marginLeft = "-" + slidermargin + "vw";
        }

    }
)
// favorite list function
var likebuttons=document.querySelectorAll(".black-heart")

likebuttons.forEach((btn)=>{
    btn.addEventListener("click",function(e){
    
        if(e.target.src.indexOf("blackheart")>0)
        {
            e.target.src="./img/redheart.png"
        }
        else{
            e.target.src="./img/blackheart.png"
        }
    })
})