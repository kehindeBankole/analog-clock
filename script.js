let sec = document.getElementById("sec")
let min = document.getElementById("min")
let hr = document.getElementById("hr")
let date = new Date()

function changesec(){
   sec.style.transform=`rotate(${(new Date().getUTCSeconds() / 60) * 360}deg)`
   min.style.transform=`rotate(${(new Date().getUTCMinutes() / 60) * 360}deg)`
   hr.style.transform=`rotate(${(new Date().getHours() / 12) * 360}deg)`
}

setInterval(()=>{
    changesec();
},1000)