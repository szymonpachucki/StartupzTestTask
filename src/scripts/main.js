'use strict';

document.addEventListener('DOMContentLoaded', function() {
  function submitForm(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    const nameFrame = document.getElementById('name');
    const emailFrame = document.getElementById('email');
    const messageFrame = document.getElementById('message');
    let valid = true;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      // alert('It is not an e-mail!');
      emailFrame.style.border = '1px solid red';
      document.getElementById('email').value = '';
      document.getElementById('email').placeholder = 'It is not an e-mail!';

      setTimeout(() => {
        emailFrame.style.border = '';
        document.getElementById('email').placeholder = 'Email*';
      }, 3000);

      valid = false;
    }

    if (name.length < 2 || name.length > 20) {
      nameFrame.style.border = '1px solid red';
      document.getElementById('name').value = '';
      // eslint-disable-next-line max-len
      document.getElementById('name').placeholder = 'Name must be between 2 and 20 letters';

      setTimeout(() => {
        nameFrame.style.border = '';
        document.getElementById('name').placeholder = 'Name*';
      }, 3000);

      valid = false;
    }

    if (message.length < 5 || message.length > 90) {
      messageFrame.style.border = '1px solid red';
      document.getElementById('message').value = '';
      // eslint-disable-next-line max-len
      document.getElementById('message').placeholder = 'Message must be between 5 and 90 letters';

      setTimeout(() => {
        messageFrame.style.border = '';
        document.getElementById('message').placeholder = 'Message*';
      }, 3000);

      valid = false;
    }

    if (valid) {
      // alert('Data send successfully.');
      document.getElementById('name').value = '';
      document.getElementById('email').value = '';
      document.getElementById('message').value = '';
      document.getElementById('rocket').classList.toggle('show');
    }
  }

  function hideAssistant() {
    const assistantSection = document.querySelector('.assistant');

    if (assistantSection) {
      assistantSection.style.display = 'none';
    }
  }

  const closeButtonAssistant = document.getElementById('xButton');

  if (closeButtonAssistant) {
    closeButtonAssistant.addEventListener('click', hideAssistant);
  }

  let menuToggled = false;

  function toggleBurger() {
    const menu = document.querySelector('.header__burger');
    const close = document.querySelector('.header__nav-close');
    const nav = document.querySelector('.header__burger-nav');
    const icon = document.querySelector('.header__nav-icon');
    const body = document.body;

    if (menuToggled) {
      body.style.overflowY = 'auto';
      icon.style.display = 'block';
      close.style.display = 'none';
      nav.style.display = 'none';
      menu.style.display = 'none';
    } else {
      body.style.overflowY = 'hidden';
      icon.style.display = 'none';
      close.style.display = 'block';
      nav.style.display = 'flex';
      menu.style.display = 'flex';
    }
    menuToggled = !menuToggled;
  }

  function scrollToSection(sectionId) {
    const targetElement = document.getElementById(sectionId);

    toggleBurger();

    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  }

  const burgerLinks = document.querySelectorAll('.header__burger-nav-link');

  burgerLinks.forEach(function(link) {
    link.addEventListener('click', function() {
      scrollToSection(link);
    });
  });

  const submitButton = document.querySelector('.contact__contactForm-button');

  submitButton.addEventListener('click', submitForm);

  const burgerButton = document.querySelector('.header__nav-icon');

  burgerButton.addEventListener('click', toggleBurger);

  const closeButton = document.querySelector('.header__nav-close');

  closeButton.addEventListener('click', toggleBurger);

  const startupsLink
  = document.querySelector('.header__nav-link[href="#ourWork"]');
  const contactLink
  = document.querySelector('.header__nav-link[href="#contact"]');
  const contactButton
  = document.querySelector('.header__burger-nav-button[href="#contact"]');

  if (startupsLink) {
    startupsLink.addEventListener('click', function() {
    });
  }

  if (contactLink) {
    contactLink.addEventListener('click', function() {
    });
  }

  if (contactButton) {
    contactLink.addEventListener('click', function() {
    });
  }

  if (submitButton) {
    submitButton.addEventListener('click', function() {
    });
  }
});
