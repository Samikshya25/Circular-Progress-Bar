const contendor= document.querySelectorAll(".container .texto");
let tiempo =1000
contendor.forEach(element =>{
    setInterval(()=>{
        setTimeout(() =>{
            element.classList.toggle("animar")
        }, tiempo);
        tiempo +=100;
    },300);
})
