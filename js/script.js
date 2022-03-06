var days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
var femaleNames = ["Akosua","Adwoa","Abenaa","Akua", "Yaa", "Afua", "Ama"];
var maleNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];

function validate() {
    if(document.myForm.year.value == "" || document.myForm.year.value.length != 4 || document.myForm.year.value <= 1900) {
        alert("Please provide a valid year");
        document.myForm.year.focus();
        return false

    }
}