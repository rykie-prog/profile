const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');

menu.addEventListener('click', function() {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
}

const storageType = localStorage;
const consentPropertyName = "jdc_consent";

const shouldShowPopup = () => !storageType.getItem(consentPropertyName);
const saveToStorage = () => storageType.setItem(consentPropertyName, 'accepted');

window.onload = () => {
    if (shouldShowPopup()) {
        const consent = confirm('Agree to the terms and conditions of the site');
        if (consent) {
            saveToStorage();
        }
    }
};