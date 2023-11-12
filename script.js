//scroll to top button
document.getElementById('go-up').addEventListener('click', function(){
    window.scrollTo(0,0);
});


//adding copyright year
function year(){
    let now = new Date();
    document.querySelector('.year').textContent = now.getFullYear();
}

year();


//typing effect on the welcome text
var i = 0;
var txt = 'Welcome to my portfolio,';
var speed = 100;

function typeWriter() {
    if (i < txt.length) {
        document.getElementById("welcome").innerHTML += txt.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    }
}

typeWriter();



function checkWidth(){
    if(window.innerWidth < 480){
        let body = document.querySelector('body');
        // body.innerHTML = "";
        window.alert("Dear user, \nThe mobile version of the site is under maintanance. Some functionalities are not optimized. \nSorry for any conveniences caused!\n\n\nSigned,\nMoses Okoth.\nWeb Developer & Admin.");
        // window.location.reload();
    }
}

checkWidth();

//scroll projects -> next
let scrollCount = 0;
let next = document.getElementById('next');
let x = screen.availWidth;

next.addEventListener('click', ()=>{
    if(scrollCount <= 2){
        document.querySelector('.projects-list').scrollBy(x, 0);
    } else if(scrollCount >= 2){
        document.querySelector('.projects-list').scrollBy(-3*x, 0);
    }
});


//scroll projects -> previous
let prev = document.getElementById('prev');


prev.addEventListener('click', ()=>{
    scrollCount--;
    document.querySelector('.projects-list').scrollBy(-(x), 0);

    if(scrollCount > 0){
        scrollCount--;
    }
});

window.setInterval(function(){
    let upBtn = document.getElementById('go-up');

    if(window.scrollY > (0.5*window.innerHeight)){
        upBtn.style = "display: fixed;";
    } else{
        upBtn.style = "display: none;";
    }
}, 1000);

