var days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
var femaleNames = ["Akosua","Adwoa","Abenaa","Akua", "Yaa", "Afua", "Ama"];
var maleNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
//var gender = ["male","female"]

var dayValue, d, CC, DD, YY, MM;

function validate() {
var isGender = document.getElementsByName("gender");
    if(document.myForm.year.value == "" || document.myForm.year.value.length != 4 || document.myForm.year.value > 2100 || document.myForm.year.value <= 1900) {
        alert("Please provide a valid year value!");
        document.myForm.year.focus();
        return false;

    }
    else if( document.myForm.month.value == "" || document.myForm.month.value.length != 2 || isNaN(document.myForm.month.value) ||
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
function calDayValue() {
    year = document.getElementById("year").value;
    CC = parseInt(year.substring(0,2));
    DD = parseInt(year.substring(2,4));
    MM = parseInt(document.getElementById("month").value);
    DD = parseInt(document.getElementById("day").value);

    d = ( ( (CC/4) -2*CC-1) + ((5*YY/4) ) + ((26*(MM+1)/10)) + DD )%7;
    console.log(d);
    return (math.floor(d))
    
}
function getGender() {
    var isGender = document.getElementsByName("gender");
    if(isGender[0].checked == true){
        var gender = "male";
    }
    else if(isGender[1].checked == true ) {
        var gender = "female";
    }
    else {
        return false;
    }

    switch(gender) {
        case "male":
        if(dayValue == 1) {
            alert("Your Akan name is " +maleNames[0]+"!");
        }
        else if(dayValue == 2) {
            alert("Your Akan name is " +maleNames[1]+"!");
        }
        else if(dayValue == 3) {
            alert("Your Akan name is " +maleNames[2]+"!");
        }
        else if(dayValue == 4) {
            alert("Your Akan name is " +maleNames[3]+"!");
        }
        else if(dayValue == 5) {
            alert("Your Akan name is " +maleNames[4]+"!");
        }
        else if(dayValue == 6) {
            alert("Your Akan name is " +maleNames[5]+"!");
        }
        else if(dayValue == -0) {
            alert("Your Akan name is " +maleNames[6]+"!");
        }
        break;
        case "female":
            if(dayValue == 1) {
                alert("Your Akan name is " +femaleNames[0]+"!");
            }
            else if(dayValue == 2) {
                alert("Your Akan name is " +femaleNames[1]+"!");
            }
            else if(dayValue == 3) {
                alert("Your Akan name is " +femaleNames[2]+"!");
            }
            else if(dayValue == 4) {
                alert("Your Akan name is " +femaleNames[3]+"!");
            }
            else if(dayValue == 5) {
                alert("Your Akan name is " +femaleNames[4]+"!");
            }
            else if(dayValue == 6) {
                alert("Your Akan name is " +femaleNames[5]+"!");
            }
            else if(dayValue == -0) {
                alert("Your Akan name is " +femaleNames[6]+"!");
            }
            break

            default:
       

    }

}

function yourName(){
    dayValue = calDayValue();
    getGender();
  }