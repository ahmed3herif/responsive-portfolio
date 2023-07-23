const sections = document.querySelectorAll(".section");
const secBtns = document.querySelectorAll(".controlls");
const secBtn = document.querySelectorAll(".control");
const allSections = document.querySelector(".main-content");

function pageTransitions() {
    for (let i = 0; i < secBtn.length; i++) {
        secBtn[i].addEventListener('click', function(){
            let currentBtn = document.querySelectorAll('.active-btn');
            currentBtn[0].className = currentBtn[0].className.replace('active-btn', ' ');
            this.className += ' active-btn';        
            }
        )
    }
    allSections.addEventListener("click", (e)=>{
        const id = e.target.dataset.id;
        if (id) {
            secBtns.forEach((btn)=>{
                btn.classList.remove("active");
            })
            e.target.classList.add("active");
            
            sections.forEach((section)=>{
                section.classList.remove("active");
            })
                const element = document.getElementById(id);
                element.classList.add("active");
            
        }

    })

    let light = document.getElementById("toggle");

    
    light.addEventListener("click",light_mode);
    function light_mode(){
    document.body.classList.toggle("light-mode");
    if(document.body.classList.contains("light-mode")){
        localStorage.setItem("theme","light");
        light.src ="./images/moon.png";
    }else{
        localStorage.setItem("theme","dark");
        light.src ="./images/sun.png";
    }
    }
    if (localStorage.getItem("theme")=="light") {
        document.body.classList.add("light-mode");
        light.src="./images/moon.png";
    } else {
        document.body.classList.remove("light-mode");
        light.src="./images/sun.png";
    }
}
pageTransitions();