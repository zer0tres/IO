'use strict'
const switcher = document.querySelector('.btn');
switcher.addEventListener('click', function(){
    document.body.classList.toggle('dark-theme')

    var className = document.body.className;
    if(className == "ligth-theme") {
        this.textcontent = "Dark";
    }
    else {
        this.textcontent = "Light";
    }
    console.log('current class name:'+ className);
});