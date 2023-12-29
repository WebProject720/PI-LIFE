let Aside = document.getElementsByClassName('aside-nav')[0];
let TopNav = document.getElementsByClassName('top-nav')[0];
let footer = document.getElementsByClassName('footer')[0];
let container = document.getElementsByClassName('container-child')[0];
let ArrayClass = ['aside-nav', 'top-nav', 'footer', 'container-child'];
let OpacityBoolean=true;
function Opacity() {
    let opacity;
    if (OpacityBoolean) {
        opacity = 0.5;
        document.body.style.overflow='hidden';
        OpacityBoolean=false;
    } else {
        document.body.style.overflow='auto';
        opacity = 1;
        OpacityBoolean=true;
    }
    ArrayClass.forEach((e) => {
        let element = document.getElementsByClassName(e)[0];
        element.style.opacity = opacity;
    });
}