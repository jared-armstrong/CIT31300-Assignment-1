function formValidation() {

    var firstName =
        document.forms.subscribe.firstName.value;
    var lastName =
        document.forms.subscribe.lastName.value;
    var address =
        document.forms.subscribe.address.value;
    var email =
        document.forms.subscribe.email.value;
    var phone =
        document.forms.subscribe.phoneNumber.value;


    var regEmail=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/g;  //Javascript reGex for Email Validation.
    var regPhone=/^\d{10}$/;                                  // Javascript reGex for Phone Number validation.

    if (firstName == "" || firstName.length > 20) {
        window.alert("Please enter your first name properly.");
        firstName.focus();
        return false;
    }

    if (lastName == "" || lastName.length > 30) {
        window.alert("Please enter your last name properly.");
        lastName.focus();
        return false;
    }

    if (address == "" || address.length > 100) {
        window.alert("Please enter your address.");
        address.focus();
        return false;
    }
     
    if (email == "" || !regEmail.test(email) || email.length > 75) {
        window.alert("Please enter a valid e-mail address.");
        email.focus();
        return false;
    }
      
    if (phone == "" || !regPhone.test(phone) || phone.length > 15) {
        alert("Please enter valid phone number.");
        phone.focus();
        return false;
    }

    return true;
}