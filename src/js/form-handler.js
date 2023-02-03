let contactForm;
let contactFormErrorList;
let contactFormSubmitButton;
let contactFormSuccessSection;

contactForm = document.getElementById('contact-form');
contactFormErrorList = document.getElementById('contact-form-error-list');
contactFormSubmitButton = document.getElementById('contact-submit');
contactFormSuccessSection = document.getElementById('contact-form-success');
contactForm.addEventListener('submit', handleSubmit);
contactFormShow();

window.onload = () => {

}

const contactFormFieldMap = {
    'contact-email': 'e-pasts',
    'contact-location': 'Objekta atrašanās vieta',
    'contact-content': 'Apraksts',
    'contact-name': 'Vārds',
    'contact-phone': 'Telefons',
    'g-recaptcha-response': 'Gūgle ķeksis'
};

const contactFormMessageMap = {
    'Min Length 5': 'Vismaz 5 simboli.',
    'Min Length 18': 'Vismaz 18 simboli.',
    'Recaptcha is missing': 'Lūdzu apstipriniet, ka neesat robots.',
    'Incorrect Email': 'Nepareizs e-pasta formāts.'
};

async function handleSubmit(event) {
    event.preventDefault();
    clearContactFormErrors();
    contactFormDisableSubmit();

    const data = new FormData(event.target);
    const postData = Object.fromEntries(data.entries());

    // console.log(postData);

    if (!postData['g-recaptcha-response'].length) {
        console.log('missing GRECAPTCHA');

        const error = {
            'field': 'g-recaptcha-response',
            'message': 'Recaptcha is missing'
        }

        displayContactFormError(error);
        contactFormEnableSubmit();

        return;
    }

    const awsApiUrl = 'https://fi2bbgwiw5.execute-api.eu-north-1.amazonaws.com/beta/'
    const response = await postDataToAws(awsApiUrl, postData);

    // console.log(response);

    const responseBody = JSON.parse(response.body);

    // console.log(responseBody);

    if (responseBody.errors && responseBody.errors.length) {
        responseBody.errors.forEach((error) => {
            displayContactFormError(error);
        });

        contactFormEnableSubmit();

        return;
    }

    if (responseBody.message && responseBody.message === 'Message Sent') {
        contactFormSuccess();
    }
}

async function postDataToAws(url = '', data = {}) {
    try {
        // Default options are marked with *
        const response = await fetch(url, {
            method: 'POST', // *GET, POST, PUT, DELETE, etc.
            // mode: 'no-cors', // no-cors, *cors, same-origin
            // cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
            // credentials: 'same-origin', // include, *same-origin, omit
            headers: {
                'Content-Type': 'application/json'
                // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            redirect: 'follow', // manual, *follow, error
            referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
            body: JSON.stringify(data) // body data type must match "Content-Type" header
        });
        // console.log(response);
        return response.json(); // parses JSON response into native JavaScript objects
    } catch (e) {
        console.warn(e);
    }

    return false;
}

function clearContactFormErrors() {
    while(contactFormErrorList.firstChild) {
        contactFormErrorList.removeChild(contactFormErrorList.lastChild);
    }
}

/**
 * error.field
 * error.message
 * @param {Object} error 
 */
function displayContactFormError(error) {
    const errorField = contactFormFieldMap[error.field] ?? error.field;
    const errorMessage = contactFormMessageMap[error.message] ?? error.message;
    const listItemNode = document.createElement('li');
    const message = document.createTextNode(`${errorField}: ${errorMessage}`);

    listItemNode.appendChild(message);
    contactFormErrorList.appendChild(listItemNode);
}

function contactFormSuccess() {
    contactFormHide();
    contactFormSuccessSection.classList.remove('hide');
}

function contactFormHide() {
    contactForm.classList.add('disabled');
}

function contactFormShow() {
    contactForm.classList.remove('disabled');
}

function contactFormDisableSubmit() {
    contactFormSubmitButton.classList.add('disabled-button');
}

function contactFormEnableSubmit() {
    contactFormSubmitButton.classList.remove('disabled-button');
}
