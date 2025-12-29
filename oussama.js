

//اظهار واخفاء عبارة حرف حرف 
const text = document.querySelector(".text")
const name = " طالب في السنة الاولى جامعي في قسم هندسة صناعة السيارات هندسة ميكانيكية"
let index=0
let D = false

function typing(){
    if(!D){
        text.textContent=name.slice(0 , index ++)
        if(index > name.length){
            D = true
            setTimeout(typing,1000)
            return
        }
    }else{
        text.textContent = name.slice(0 , index --)
        if(index==0){

            D = false
        }

    }
   setTimeout(typing , 50)
}
typing()



