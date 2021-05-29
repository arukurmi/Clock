function clicked(){
    console.log('aryansh')
}


let prevstring = document.querySelector('.aryansh').innerHTML;


aryansh1.addEventListener('mouseup', function(){
    document.querySelector('.aryansh').innerHTML = prevstring;
    console.log("Mouse up");
})


aryansh1.addEventListener('mousedown', function(){
    document.querySelector('.aryansh').innerHTML = "<b>yep...you clicked</b>";
    console.log("Mouse down");
})
