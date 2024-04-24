function getDate(){
    const d = new Date();
    document.getElementById("date").innerHTML = d;
    // TBD display current date in the span tag with id="date" in web page footer
    // hint: https://www.w3schools.com/js/tryit.asp?filename=tryjs_date_current
}
function toggleButton(){
    if(document.getElementById("txtSearch").value == "")
    {
        document.getElementById("btnSearch").disabled = true;
    }
    else{
        document.getElementById("btnSearch").disabled = false;
    }
}