// JavaScript

function accordionClick(target,className){
    console.log('open');
    console.log(target);

    var hideSections = document.getElementsByClassName(className);
    for(var i=0; i<hideSections.length; i++){
        hideSections[i].style.contentVisibility = "hidden";
    }

    const section = document.getElementById(target);
    section.style.contentVisibility = "visible";
     
    /*if(section.style.contentVisibility == "visible"){
        section.style.contentVisibility = "hidden";
    }
    else{
        section.style.contentVisibility = "visible";
    }
    */
    
}