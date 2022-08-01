var BuyerChecker = true;
var DobChecker = true;
var GenderChecker = true;
var EmailChecker = true;
var MobileChecker = true;
var PanNumberChcker = true;
var AddressChecker = true;
var PasswordChecker = true;


function BuyerNameValidation() {
    var BuyerName = $("#BuyerName").val();
    var NameRegex = /^[a-zA-Z\s]+$/gm;

    if (BuyerName == "") {

        $("#buyer").show();
        $("#buyer").html("Please Enter Your Name");
        $("#buyer").css("color", "red");
        BuyerChecker = false;
    }
    else if (!NameRegex.test(BuyerName)) {

        $("#buyer").show();
        $("#buyer").html("Please Enter Valid Name");
        $("#buyer").css("color", "red");
        BuyerChecker = false;
    }
    else {
        $("#buyer").hide();
        BuyerChecker = true;
    }
}

function DateValidation() {
    var DOB = $("#DOB").val();
    var now = new Date();                          
    var currentY = now.getFullYear();                
    var currentM = now.getMonth();                   

    var dob = new Date(DOB);                          
    var prevY = dob.getFullYear();                         
    var prevM = dob.getMonth();                        

    var age = currentY - prevY;

    if (DOB == "") {
        $("#DateSpan").show();
        $("#DateSpan").html("Please Enter Date");
        $("#DateSpan").css("color", "red");

        DobChecker = false;
    }
   else  if (age < 18) {
        $("#DateSpan").show();
        $("#DateSpan").html("More than 18+ age is valid");
        $("#DateSpan").css("color", "red");
        DobChecker = false;
    }
    else {
        $("#DateSpan").hide();

        DobChecker = true;
    }
}


function GenderValidation() {
    var Gender = $("#Gender").val();

    if (Gender == "Gender") {
        $("#GenderSpan").show();
        $("#GenderSpan").html("Please Select Gender");
        $("#GenderSpan").css("color", "red");
        GenderChecker = false;
    }
    else {
        $("#GenderSpan").hide();
        GenderChecker = true;

    }
}

function EmailValidation() {
    var Email = $("#Email").val();
    var EmailRegex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/gm
    if (Email == "") {
        $("#EmailHelper").show();
        $("#EmailHelper").html("Please Enter Email");
        $("#EmailHelper").css("color", "red");
        EmailChecker = false;
    }
    else if (!EmailRegex.test(Email)) {
        $("#EmailHelper").show();
        $("#EmailHelper").html("Please Enter Valid Email");
        $("#EmailHelper").css("color", "red");
        EmailChecker = false;
    }
    else {
        $("#EmailHelper").hide();
        EmailChecker = true;
    }
}


function MobileValidation() {
    var MobileRegex = /^[6-9]\d{9}$/gm;
    var Mobile = $("#Mobile").val();
    if (Mobile == "") {
        $("#MobileHelper").show();
        $("#MobileHelper").html("Please enter Mobile Number");
        $("#MobileHelper").css("color", "red");
        MobileChecker = false;
    }
    else if (!MobileRegex.test(Mobile)) {

        $("#MobileHelper").show();
        $("#MobileHelper").html("Please enter valid Mobile Number");
        $("#MobileHelper").css("color", "red");
        MobileChecker = false;
    }
    else {
        $("#MobileHelper").hide();
        MobileChecker = true;

    }
}

function PanNumberValidation() {
    var PanNumber = $("#PanNumber").val();
    if (PanNumber == "") {
        $("#PanNumberHelper").show();
        $("#PanNumberHelper").html("Please enter Pan Number");
        $("#PanNumberHelper").css("color", "red");
        PanNumberChcker = false;

    }
    else {
        $("#PanNumberHelper").hide();
        PanNumberChcker = true;


    }
}

function AddressValidation() {
    var Address = $("#Address").val();
    if (Address == "") {
        $("#AddressHelper").show();
        $("#AddressHelper").html("Please Enter Your Address");
        $("#AddressHelper").css("color", "red");
        AddressChecker = false
    }
    else {
        $("#AddressHelper").hide();
        AddressChecker = true

    }
}

function PasswordValidation() {
    var Password = $("#Password").val();
    if (Password == "") {

        $("#PasswordHelper").show();
        $("#PasswordHelper").html("Please Enter Your Password");
        $("#PasswordHelper").css("color", "red");
        PasswordChecker = false
    }
    else {
        $("#PasswordHelper").hide();
        PasswordChecker = true

    }
}

$(document).ready(function () {

    $("#buyer").hide();
    $("#DateSpan").hide();
    $("#GenderSpan").hide();
    $("#EmailHelper").hide();
    $("#MobileHelper").hide();
    $("#PanNumberHelper").hide();
    $("#AddressHelper").hide();
    $("#PasswordHelper").hide();
    $("#loder-img").hide();


})

function SaveBuyerData() {



    BuyerNameValidation()
    DateValidation()
    GenderValidation()
    EmailValidation()
    MobileValidation()
    PanNumberValidation()
    AddressValidation()
    PasswordValidation()




    if (BuyerChecker == true && DobChecker == true && GenderChecker == true && EmailChecker == true && MobileChecker == true && PanNumberChcker == true && AddressChecker == true && PasswordChecker == true) {
        $("#loder-img").show();

        var BuyerName = $("#BuyerName").val();
        var DOB = $("#DOB").val();
        var Gender = $("#Gender").val();
        var Email = $("#Email").val();
        var Mobile = $("#Mobile").val();
        var PanNumber = $("#PanNumber").val();
        var Address = $("#Address").val();
        var Password = $("#Password").val();

        let obj = {
            BuyerName: BuyerName,
            DateOfBirthDate: DOB,
            Gender: Gender,
            Email: Email,
            Mobile: Mobile,
            PanNumber: PanNumber,
            Address: Address,
            Password: Password
        }

    $.ajax({

        url: "/Home/BuyerDataForRegister",
        method: "POST",
        data: obj,
        success: function (data) {
            $("#BuyerName").val(null);
            $("#DOB").val(null);
            $("#Gender").val(null);
            $("#Email").val(null);
            $("#Mobile").val(null);
            $("#PanNumber").val(null);
            $("#Address").val(null);
            $("#Password").val(null);
            $("#loder-img").hide();


        },
        error: function (err) {
            console.error(err);
        }
    })
    }
    else {
        return false;
    }

}
