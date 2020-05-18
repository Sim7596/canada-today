var $ = function (id){
    return document.getElementById(id);
}

window.onload = function(){
    $('sub').onclick = validate;
};
function validate() {

    //for first name
    var pattern =/^[a-zA-Z]{3,30}$/;
    var fname = $('fname').value;
    var isvalid =  true;
    $('errfname').style.color = 'red';
    $('errfname').style.fontWeight = 'bold';
    if(fname == ""){
        $('errfname').innerHTML = 'Please enter first name';
        isvalid= false;

    }
    else if(!pattern.test(fname)){
        $('errfname').innerHTML ="Please enter first name with letters";
        isvalid= false;
    }
    else{
        $('errfname').innerHTML ="";
    }


    //for last name
    var lname = $('lname').value;
    $('errlname').style.color = 'red';
    $('errlname').style.fontWeight = 'bold';
    if(lname == ""){
        $('errlname').innerHTML = 'Please enter last name';
        isvalid= false;
    }
    else if(!pattern.test(lname)){
        $('errlname').innerHTML ="Please enter last name with letters";
        isvalid= false;
    }
    else{
        $('errlname').innerHTML ="";
    }



    //for message
    $('errsub').style.color = 'red';
    $('errsub').style.fontWeight = 'bold';
    var sub = $('subject').value;
    if(sub == ""){
        $('errsub').innerHTML = 'Please enter your message';
        isvalid= false;
    }
    else{
        $('errsub').innerHTML ="";
    }

    if(isvalid == true){
        localStorage.setItem('firstname', fname);
        $('feedbackform').submit();

    }

}
