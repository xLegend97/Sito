function showMore1() {
    var x = document.getElementById("sm1");
    if (x.innerHTML === "I'm a dreamer.") {
        x.innerHTML = "I grew up with cartoons, movies and music that made me dream and made me who I am.";
    } else {
        x.innerHTML = "I'm a dreamer.";
    }
}

function showMore2() {
    var x = document.getElementById("sm2");
    if (x.innerHTML === "I'm a Computer Science student.") {
        x.innerHTML = "I'm studying computer science at the University of Genoa. My computer skills are: C, C ++, HTML, CSS, JAVASCRIPT and PYTHON.";
    } else {
        x.innerHTML = "I'm a Computer Science student.";
    }
}

function showMore3() {
    var x = document.getElementById("sm3");
    if (x.innerHTML === "From Imperia, Italy.") {
        x.innerHTML = "I grew up in this small town, where I studied and graduated from the Ruffini Institute as a surveyor.";
    } else {
        x.innerHTML = "From Imperia, Italy.";
    }
}