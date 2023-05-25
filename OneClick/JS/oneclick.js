function cambiarLogin (element){
    var elemnt = "Login";
    if (element.innerHTML === "Login") {
        element.innerHTML = "Logout";
    } else {
        element.innerHTML = "Login";
    }
}

function Hide(element){
    element.remove();
}

var count = 13;
function SumarLike(elemento){
    count++;
    elemento.innerHTML = count + " Likes";
    alert("Ninja recibio un me gusta")
}

var counter = 37;

function PlusLike(elemento){   
    counter++;
    elemento.innerHTML = counter + " Likes";
    alert("Ninja recibio un me gusta")
}



