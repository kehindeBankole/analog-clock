let sec = document.getElementById("sec")
let min = document.getElementById("min")
let hr = document.getElementById("hr")
let bgs = ['red' , 'purple' , 'green']
let date = new Date()
let current = 0
function changesec(){
   sec.style.transform=`rotate(${(new Date().getUTCSeconds() / 60) * 360}deg)`
   min.style.transform=`rotate(${(new Date().getUTCMinutes() / 60) * 360}deg)`
   hr.style.transform=`rotate(${(new Date().getHours() / 12) * 360}deg)`

}
function changeBg(){
    
    document.body.style.backgroundColor=bgs[current]
    if(current==bgs.length - 1){
        current=-1
    }
    current++
}
document.body.addEventListener('click' , ()=>{
    changeBg()
})
setInterval(()=>{
    changesec();
   changeBg()
},1000)
