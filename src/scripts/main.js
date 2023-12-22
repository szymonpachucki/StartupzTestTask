'use strict';

document.addEventListener('DOMContentLoaded', function() {
  function hideAssistant() {
    const assistantSection = document.querySelector('.assistant');

    if (assistantSection) {
      assistantSection.style.display = 'none';
    }
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

  const burgerButton = document.querySelector('.header__nav-icon');

  burgerButton.addEventListener('click', toggleBurger);

  const closeButton = document.querySelector('.header__nav-close');

  closeButton.addEventListener('click', toggleBurger);

  const closeButtonAssistant = document.getElementById('xButton');

  if (closeButtonAssistant) {
    closeButtonAssistant.addEventListener('click', hideAssistant);
  }

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
});
