

window.onscroll = function() {myFunction()};

var navbar = document.getElementById("navbar");

var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky");
    console.log("sticky");
  } else {
    navbar.classList.remove("sticky");
    console.log("remove sticky");
  }
}

function calculateAge() {
	var birthday = new Date(1953, 12, 28);
	var today = new Date();
	var age = today.getYear() - birthday.getYear();

	document.getElementById("age").innerHTML = age;
}