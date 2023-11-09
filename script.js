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
var txt = 'Welcome to my portfolio';
var speed = 60;

function typeWriter() {
    if (i < txt.length) {
        document.getElementById("welcome").innerHTML += txt.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    }
}

typeWriter();


//checking width for site compatibility
function checkWidth(){
    if(window.innerWidth < 480){
        let body = document.querySelector('body');
        body.innerHTML = "";
        window.alert("This site is optimized for desktop view! Kindly rotate your device to get the best experience.\nSorry for any inconveniences caused.");

        window.location.reload();
    }
}

window.setInterval(checkWidth, 1500);

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

