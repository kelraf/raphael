// $(document).ready(function() {
//     alert("Success");
// });

// Navigation

let nav_side = document.getElementById("nav-cont-side");
let docker = document.getElementById("docker");
let line_one = document.getElementById("line-one");
let line_two = document.getElementById("line-two");
let line_three = document.getElementById("line-three");

if(nav_side && docker && line_two && line_one && line_three) {
    docker.onclick = function() {
        if (line_one.style.top == "2px") {
            alert("Success");
        } else {
            console.log(line_one.style);
        }
    }
}

// End of Navigation

