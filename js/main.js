
// header scroll

let nav =document.querySelector(".navbar-nav");
window.onscroll = function(){
  if(document.documentElement.scrollTop > 50){
    nav.classList.add("header-scrolled");
  }else{
    nav.classList.remove("header-scrolled");
  }
}
// navbar
let navBar =document.querySelectorAll(".nav-link");
let navCollapse=document.querySelector(".navbar-collapse.collapse");
navBar.forEach(function(a){
  a.addEventListener("click",function(){
    navCollapse.classList.remove("show");
  })
})
// swiper slide
var swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'vertical',
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable:true
    },
    autoplay:{
        delay:3500,
    }})
  
    // counter design

    document.addEventListener('DOMContentLoaded',()=>{
      function counter(id, start , end , duration){
        let obj= document.getElementById(id),
        current=start,
        range= end-start,
        increment=end>start?1:-1,
        stop =Math.abs((duration/range)),
        timer=setInterval(
          ()=>{
            current+=increment;
            obj.textContent=current;
            if(current==ens){
              clearInterval(timer);
            }
          }, stop
        );
      }
      counter("count1" , 0 ,1287 , 3000);
      counter("count2" , 100 ,1337 , 2500);
      counter("count3" , 0 ,3387 , 3000);
      counter("count4" , 0 ,77287 , 3000);
    })
    // our partner