function compute() 
{
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var year = new Date().getFullYear()+parseInt(years);
    
    if (principal <= 0 ) {
        alert("Enter a positive number")
        document.getElementById("principal").focus()
    } else {
        var interest = principal * years * rate /100;
        var amount = parseInt(principal) + parseFloat(interest)
        var principalDisplay = "<span class=boldbgtext>"+principal+"</span>"
        var rateDisplay = "<span class=boldbgtext>"+rate+"%</span>"
        var amountDisplay = "<span class=boldbgtext>"+amount+"</span>"
        var yearDisplay = "<span class=boldbgtext>"+year+"</span>"

        document.getElementById("result").innerHTML="If you deposit "+principalDisplay+",\<br\>at an interest rate of "+rateDisplay+"\<br\>You will receive an amount of "+amountDisplay+",\<br\>in the year "+yearDisplay+"\<br\>"
    }
}

function updateRate() 
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval;
}
