let main=document.querySelector('main');
var arr=["https://i.pinimg.com/236x/62/a7/92/62a7926b057081e30322d95234c6f324.jpg", 
 "https://i.pinimg.com/236x/4f/82/bd/4f82bd416fd55b8924607d378918cf54.jpg",
 " https://i.pinimg.com/236x/17/f6/28/17f6287ea8f039367ded71a3ee5f5b78.jpg" ,
 "https://i.pinimg.com/originals/fb/b8/40/fbb840f6f112970c3fba7b780974a9c6.png",
 " https://i.pinimg.com/236x/cc/e8/ee/cce8ee1d6d8dc3f01e9cdf5960024688.jpg "];
let s='';
   for(let i=1;i<51;i++){
let r=Math.floor(Math.random()*arr.length);

s+= `<div class="cards"><img src=${arr[r]}></img></div>`;
}
main.innerHTML=s;