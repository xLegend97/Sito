function showMore1() {
    var x = document.getElementById("sm1");
    console.log(x);
    console.log(x.innerText);
    console.log(x.innerHTML);
    if (x.innerHTML === "I'm a dreamer.") {
        x.innerHTML = "Swapped text!";
    } else {
        x.innerHTML = "I'm a dreamer.";
    }
}

function showMore2() {
    var x = document.getElementById("sm2");
    if (x.innerHTML === "I'm a Computer Science student.") {
        x.innerHTML = "Swapped text!";
    } else {
        x.innerHTML = "I'm a Computer Science student.";
    }
}

function showMore3() {
    var x = document.getElementById("sm3");
    if (x.innerHTML === "From The University of Genoa.") {
        x.innerHTML = "Swapped text!";
    } else {
        x.innerHTML = "From The University of Genoa.";
    }
}