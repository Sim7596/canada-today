<!--for slider-->
var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
    showDivs(slideIndex += n);
}

function currentDiv(n) {
    showDivs(slideIndex = n);
}

function showDivs(n) {
    var i;
    var x = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("demo");
    if (n > x.length) {slideIndex = 1}
    if (n < 1) {slideIndex = x.length}
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }

    x[slideIndex-1].style.display = "block";

}


//for plans
document.getElementById("display_result").style.color = "red";
document.getElementById("display_result").style.textAlign = "center";
document.getElementById("display_result").style.fontSize = "20px";
document.getElementById("display_result").style.padding = "10px";
document.getElementById("display_result").style.fontSize = "bold";
var value1pass = document.getElementById("value1").value;
var value2pass = document.getElementById("value2").value;
var value3pass = document.getElementById("value3").value;
var value4pass = document.getElementById("value4").value;
var value5pass = document.getElementById("value5").value;

document.getElementById("value1").onclick = function () {
    document.getElementById('display_result').innerHTML = "<p>Thank you for choosing free plan</p>";
};
document.getElementById("value2").onclick = function () {
    document.getElementById('display_result').innerHTML = "<p>Thank you for choosing " +value2pass +" plan</p> ";
};
document.getElementById("value3").onclick = function () {
    document.getElementById('display_result').innerHTML = "<p>Thank you for choosing " +value3pass +" plan</p>";
};
document.getElementById("value4").onclick = function () {
    document.getElementById('display_result').innerHTML = "<p>Thank you for choosing " +value4pass +" plan</p>";
};
document.getElementById("value5").onclick = function () {
    document.getElementById('display_result').innerHTML = "<p>Thank you for choosing " +value5pass +" plan</p>";
};

// for learn more button link
document.getElementById("about").onclick = function () {
    location.href = "home.html";
};
document.getElementById("events").onclick = function () {
    location.href = "../e_newspaper/feedback.html";
};
document.getElementById("faq").onclick = function () {
    location.href = " ../Updated Harsh-Thakkar-webProjectPhase3/FAQs.html";
};

//for plans
localStorage.setItem('value1', value1);
localStorage.setItem('value2', value2);
localStorage.setItem('value3', value3);
localStorage.setItem('value4', value4);
localStorage.setItem('value5', value5);
