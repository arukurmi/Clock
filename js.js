// function clicked(){
//     console.log('aryansh')
// }


let prevstring = document.querySelector('.container').innerHTML;
let i=0;

btnid.addEventListener('mouseup', function(){
    document.querySelector('.container').innerHTML = prevstring;
    console.log("Mouse up",i);
    console.log(prevstring);
    i++;
})

btnid.addEventListener('mousedown', function(){
    document.querySelectorAll('.container')[0].innerHTML = "yep...you clicked";
    console.log(document.getElementsByClassName('.container').innerHTML);
    console.log("Mouse down");
})
