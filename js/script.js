var days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
var femaleNames = ["Akosua","Adwoa","Abenaa","Akua", "Yaa", "Afua", "Ama"];
var maleNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];


function validate() {
var isGender = document.getElementsByName("gender");
    if(document.myForm.year.value == "" || document.myForm.year.value.length != 4 || document.myForm.year.value <= 1900) {
        alert("Please provide a valid year value!");
        document.myForm.year.focus();
        return false;

    }
    else if( document.myForm.month.value == "" || document.myForm.month.value.length !== 2 || isNaN(document.myForm.month.value) ||
    document.myForm.month.value > 12 || document.myForm.month.value <= 0){
        alert("Please provide a valid month value!");
        document.myForm.month.focus();
        return false;
    }
    else if (document.myForm.day.value == "" || document.myForm.day.value.length != 2 || isNaN(document.myForm.day.value) ||
    document.myForm.day.value > 31 || document.myForm.day.value <= 0) {
        alert("Please provide a valid day value!");
        document.myForm.day.focus();
        return false;
    }
    else if(isGender[0].checked == false && isGender[1].checked == false){
        alert("Please select gender");
        return false;
    }
    else{
        return true;
    }
    
}
dayValue => {
    year = document.getElementById("year").value;
    CC = parseInt(year.substring(0,2));
    DD = parseInt(year.substring(2,4));
    MM = parseInt(document.getElementById("month").value);
    DD = parseInt(document.getElementById("day").value);

    d = ( ( (CC/4) -2*CC-1) + ((5*YY/4) ) + ((26*(MM+1)/10)) + DD ) % 7;
    console.log(Math.floor(d));
    
}
