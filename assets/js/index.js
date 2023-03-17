'use strict'

const createBtn = document.querySelector('.create-button');
const contactInput = document.querySelector('.contact-input');
const errorInfo = document.querySelector('.error-info');
const bigCenter = document.querySelector('.big-center');
const unit = document.querySelector('.Unit');
const result = document.querySelector('.result');

/* let n = 0; */
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

    /* getInfo() {
        return `${this.getname} ${this.getcity} ${this.getemail}`
    } */

    /* listContacts() {
        const contactDiv = document.createElement("div");
        contactDiv.className = "Unit";
        contactDiv.innerText = this.getemail;
        
        bigCenter.appendChild(contactDiv);

        contactDiv.addEventListener('click', () => {
            result.innerHTML = this.getInfo();
            document.querySelector('.Unit').remove();
        });
        console.log(33)
    } */
}

createBtn.addEventListener('click', () => {
    
    inputInfo = contactInput.value.trim().split(',');

    const verifyName = /^([A-Za-z]+\s?)*[A-Za-z]$/;
    const verifyCity = /^([A-Za-z]+\s?)*[A-Za-z]$/;
    const verifyEmail = /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;

    if (verifyName.test(inputInfo[0]) && verifyCity.test(inputInfo[1]) && verifyEmail.test(inputInfo[2])) {
        const contact = new Contact(inputInfo[0],inputInfo[1],inputInfo[2]);
        errorInfo.style.visibility = 'hidden';
        contactsArray.push(contact);
    } else {
        errorInfo.style.visibility = 'visible';
    }
    console.log(contactsArray)
    
});

function listContact(array) {
    array.forEach(element => {
        element.
    });
}