const btn = document.getElementById('menu-btn');
const overlay = document.getElementById('overlay');
const menu = document.getElementById('mobile-menu');
const counters = document.querySelectorAll('.counters');


btn.addEventListener('click', navToggle);
document.addEventListener('scroll', scrollPage);


function navToggle() {
    btn.classList.toggle('open');
    overlay.classList.toggle('overlay-show');
    document.body.classList.toggle('stop-scrolling');
    menu.classList.toggle('show-menu');
}


function scrollPage() {
    const scrollPos = window.scrollY;
    
    if(scrollPos > 100 && !scrollStarted) {
        countUp();
        scrolStarted = true;
    } else if (scrollPos < 100 && scrollStarted){
        reset();
        scrollStarted = false;
    }
}

function CountUp() {
    counters.forEach((counter) => {
        counter.innterText = '0';

        const updateCounter = () => {
            //get count target

            const target = +counter.getAttribute('data-target');

            //get current counter value
            const c = +counter.innterText;

            //create an increment
            const increment = target / 100;

            //if counter is less than target , add increment
            if (c < target) {
                counter.innterText = `${Math.ceil(c + increment)}`;

                setTimeout(updateCounter, 75);
            } else {
                counter.innterText = target;
            }
        };
        updateCounter();
    })
}

function reset() {
    counters.forEach((counter) => (counter.innerHTML = '0'));
}