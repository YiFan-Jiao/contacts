'use strict'

const createBtn = document.querySelector('.create-button');
const contactInput = document.querySelector('.contact-input');
const errorInfo = document.querySelector('.error-info');
const bigCenter = document.querySelector('.big-center');
const unit = document.querySelector('.Unit');
const result = document.querySelector('.result');

let inputInfo = [];
const contactsArray = [];

class Contact {
    #name;
    #city;
    #email;

    constructor(name,city,email) {
        this.#name = name;
        this.#city = city;
        this.#email = email;
    }

    get getname() {
        return this.#name
    }

    get getcity() {
        return this.#city
    }

    get getemail() {
        return this.#email
    }
}

createBtn.addEventListener('click', () => {
    
    inputInfo = contactInput.value.trim().split(',');

    const verifyName = /^([A-Za-z]+\s?)*[A-Za-z]$/;
    const verifyCity = /^([A-Za-z]+\s?)*[A-Za-z]$/;
    const verifyEmail = /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;

    if (verifyName.test(inputInfo[0]) && 
        verifyCity.test(inputInfo[1]) && 
        verifyEmail.test(inputInfo[2])) {
        const contact = new Contact(inputInfo[0],inputInfo[1],inputInfo[2]);
        errorInfo.style.visibility = 'hidden';
        contactsArray.push(contact);
    } else {
        errorInfo.style.visibility = 'visible';
    }

    function listContact(array) {
        bigCenter.innerHTML = '';
        array.forEach(element => {
            const contactDiv = document.createElement("div");
            contactDiv.className = "Unit";
            contactDiv.innerHTML = `<div class="contact-name">${element.getname}</div>
                                    <div class="contact-city">${element.getcity}</div>
                                    <div class="contact-email">${element.getemail}</div>`
            bigCenter.appendChild(contactDiv);
            result.innerHTML = array.length;
        });

        const allUnit = document.querySelectorAll('.Unit');
        allUnit.forEach((element,index) => {
            element.addEventListener('click', () => {
                contactsArray.splice(index,1);
                element.remove();
                listContact(contactsArray);
            });
        });
    }
    
    listContact(contactsArray);
});

