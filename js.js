function clicked(){
    console.log('aryansh')
}


let prevstring = document.querySelector('.aryansh')[0].innerHTML;


aryansh.addEventListner('mouseup', function(){
    document.querySelector('.aryansh')[0].innerHTML = prevstring;
    console.log("Mouse up");
})


aryansh.addEventListner('mousedown', function(){
    document.querySelector('.aryansh')[0].innerHTML = "<b>yep...you clicked</b>";
    console.log("Mouse down")
})
