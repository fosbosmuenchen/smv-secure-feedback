//define where to find the <form> Element in the DOM
const htmlFormElement = $("#feedback-form-element");

//define where to find the form sections in the DOM
const formSectionSubmitterName = $("#name-input-container");
const formSectionSubmitterInvolvation = $("#involved-container");
const formSectionSubmitterInvolvationDetails = $("#involved-details-container");
const formSectionSubmitterClass = $("#class-container");
const formSectionIncidentDate = $("#date-container");
const formSectionIncidentHour = $("#hour-container");
const formSectionIncidentLesson = $("#lesson-container");
const formSectionIncidentDetails = $("#event-details-container");
const formSectionPrivacyPolicy = $("#privacy-notice-container");
const formSectionFormControlButtons = $("#form-control-button-container");

//define where to find the user inputs in the DOM
const userTextInputSubmitterSurname = $("#surname-input");
const userTextInputSubmitterName = $("#name-input");
const userRadioInputSubmitterInvolvedAloneTrue = $("#involved-alone-true");
const userRadioInputSubmitterInvolvedAloneFalse = $("#involved-alone-false");
const userTextAreaInputSubmitterInvolvedDetails = $("#involved-details-input");
const userTextInputSubmitterClass = $("#class-input");
const userDateInputIncidentDate = $("#date-input");
const userSelectInputIncidentHour = $("#hour-select");
const userSelectInputIncidentLesson = $("#lesson-select");
const userTextAreaInputIncidentDetails = $("#event-details-input");
const userCheckboxInputAcceptPrivacyPolicy = $("#privacy-notice-accepted-box");

//define where to find the reset and submit buttons in the DOM
const formButtonReset = $("#form-control-button-reset");
const formButtonSubmit = $("#form-control-button-submit");

//define the variables for data storage etc to prevent function scope errors because I still don't understand JS that way
let formDataSubmitterSurname = "ERROR: Default value unchanged";
let formDataSubmitterName = "ERROR: Default value unchanged";
let formDataSubmitterInvolvation = undefined;
let formDataSubmitterInvolvationDetails = "ERROR: Default value unchanged";
let formDataSubmitterClass = "ERROR: Default value unchanged";
let formDataIncidentDate = undefined;
let formDataIncidentHour = "ERROR: Default value unchanged";
let formDataIncidentLesson = "ERROR: Default value unchanged";
let formDataIncidentDetails = "ERROR: Default value unchanged";
let formDataPrivacyPolicy = undefined;

//define working variables

//validation vars

//global form validation
let isFormValid = false;

//component validation
let userTextInputSubmitterSurnameIsValid = false;
let userTextInputSubmitterNameIsValid = false;
let userRadioInputSubmitterInvolvationIsValid = false;
let userTextAreaInputSubmitterInvolvedDetailsIsValid = false;
let userTextInputSubmitterClassIsValid = false;
let userDateInputIncidentDateIsValid = false;
let userSelectInputIncidentHourIsValid = false;
let userSelectInputIncidentLessonIsValid = false;
let userTextAreaInputIncidentDetailsIsValid = false;
let userCheckboxInputAcceptPrivacyPolicyIsValid = false;

//store required state for the InvolvationDetails
let requireInvolvationDetails = false;

//element specific event listeners go here:






//define the functions to read, interpret and purify the form Data

//validate any input with the type "text" by passing the jQuery Selector stored in a variable above
let textInputValidation = (inputToValidate = "", requiredState) => {
    //set a default result for debugging and error catching purposes
    let result = "ERROR: result not changed before return call"
        //check if the value of the passed element is empty
    if (eval(inputToValidate).val() || eval(inputToValidate).val() != "") {
        //if the value of the passed element is not empty set the result to the value of the passed element
        result = eval(inputToValidate).val();
        eval("" + inputToValidate + "IsValid = true");
    } else {
        //if the value of the passed element is empty set the result to a fixed string for debugging and error catching
        result = "NoDataInput"
    }
    //return the result to be able to store it in a variable
    return result;
};

//validate the radiobuttons for the involvation state
let radioInputInvolvationValidation = () => {
    let result = "ERROR: result not changed before return call"
    if (userRadioInputSubmitterInvolvedAloneTrue.is(":checked")) {
        result = userRadioInputSubmitterInvolvedAloneTrue.val();
    } else {
        if (userRadioInputSubmitterInvolvedAloneFalse.is(":checked")) {
            result = userRadioInputSubmitterInvolvedAloneFalse.val();
            requireInvolvationDetails = true;
        } else {
            console.error("ERROR: None of the Radio Buttons are checked!")
            result = "ERROR: None of the Radio Buttons are checked!"
        };
    };
    return result;
};

//define a function which checks if the form is complete, if not in the future error messages will show
let checkFormValidity = () => {
    isFormValid = false;
    //add logic
    return isFormValid;
};


//define a funtion to handle the extraction of data from the form and put it into single variables
let fetchFormData = () => {
    //put the data from the form in variables
    formDataSubmitterSurname = textInputValidation("userTextInputSubmitterSurname", true);
    formDataSubmitterName = textInputValidation("userTextInputSubmitterName", true);
    formDataSubmitterInvolvation = radioInputInvolvationValidation().result;
    formDataSubmitterInvolvationDetails = textInputValidation("", requireInvolvationDetails);
    formDataSubmitterClass = textInputValidation("userTextInputSubmitterClass", true);
    formDataIncidentDate = undefined;
    formDataIncidentHour = "";
    formDataIncidentLesson = "";
    formDataIncidentDetails = "";
    formDataPrivacyPolicy = undefined;
    //consider putting some code here for generating the json object right away
};


htmlFormElement.submit((e) => {
    e.preventDefault();
    //fetchFormData();
    //console.log("The following Data has been submitted to the first TextArea (displayed in a new line\n***************\n" + userTextAreaInputSubmitterInvolvedDetails.val() + "\n***************")
});

//put the data in variables
/*WELL, I'm a bit dumb at the moment...
I have to stuff all of this into a function called something like "fetchFormData" (make it arrow please)
with an EventListener for the form submit (use jQuery) and don't forget our good ol' e.preventDefault because
otherwise everything is going to be 💩💩💩 and we don't want that.
and PLEASE don't forget to replace all the empty strings and undefineds with the evaluation functions*/