let input=document.querySelector("input");
const button=document.querySelector("button");
let one=document.querySelector(".three");
let two=document.querySelector(".four");
let loop=document.querySelector(".shubu");
let time_is=true;
let time_is1=false;
input.addEventListener("keypress",(event)=>{
    if(event.key==="Enter"){
    console.log("sunny");
    if(time_is){
    console.log(input.value);
    getFacts();
    // location.reload();

    time_is=true;
    }
}
})
let count=0;
let getFacts=async ()=> {
    let div=document.createElement("div");
    let div1=document.createElement("div");
    let body=document.querySelector("body");
    body.appendChild(div);
   one.appendChild(div);
   body.appendChild(div1);
   two.appendChild(div1)
    console.log("getting some data.......");
    let response=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${input.value}&units=metric&appid=d420584eb96846d2a10a55755e53d2a7`);
  let response1=await response.json();
    div.innerText=`temp in ${input.value} 
    ${response1["main"]["temp"]} °C`;
    div1.innerText=`humidity in ${input.value} 
    ${response1["main"]["humidity"]}% `;
    input.value='';
    input.addEventListener("keypress",(event)=>{
        if(event.key=="Enter"){
            div.innerText=``;
            div1.innerText=``;
        }
    })
}