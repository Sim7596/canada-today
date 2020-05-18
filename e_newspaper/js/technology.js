//show and hide paras
document.getElementById("togglepara2button").onclick = function () {
    var x = document.getElementById("hidepara2");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
};
document.getElementById("togglepara3button").onclick = function () {
    var x = document.getElementById("hidepara3");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
};

$("#technoimg1").hover(
    function(){$(this).stop().animate({width: "300px", height:"300px"}, 3000);},
    function(){$(this).stop().animate({width: "200px", height:"200px"}, 3000);}
);
$("#technoimg2").hover (
    function(){$(this).stop().animate({width: "300px", height:"200px"}, 3000);},
    function(){$(this).stop().animate({width: "200px", height:"200px"}, 3000);}
);
$("#technoimg3").hover(
    function(){$(this).stop().animate({width: "300px", height:"300px"}, 3000);},
    function(){$(this).stop().animate({width: "200px", height:"200px"}, 3000);}
);