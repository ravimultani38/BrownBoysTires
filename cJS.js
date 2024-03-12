// cJS.js

// Hide both email and phone fields by default
document.addEventListener('DOMContentLoaded', function() {
  const emailField = document.getElementById('emailField');
  const phoneField = document.getElementById('phoneField');
  emailField.style.display = 'none';
  phoneField.style.display = 'none';
});



function toggleContactMethod() {
  const emailField = document.getElementById('emailField');
  const phoneField = document.getElementById('phoneField');
  const emailRadio = document.getElementById('emailRadio');

  if (emailRadio.checked) {
    emailField.style.display = 'block';
    phoneField.style.display = 'none';
  } else {
    emailField.style.display = 'none';
    phoneField.style.display = 'block';
  }
}

function submitForm(event) {
  event.preventDefault(); // Prevent the default form submission behavior

  // Get form values
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const phone = document.getElementById('phone').value;
  const message = document.getElementById('message').value;

  // Do something with the form values, like send them to a server
  console.log('Name:', name);
  console.log('Email:', email);
  console.log('Phone:', phone);
  console.log('Message:', message);

  // Clear the form fields
  document.getElementById('name').value = '';
  document.getElementById('email').value = '';
  document.getElementById('phone').value = '';
  document.getElementById('message').value = '';

  // Display confirmation message
  const confirmationMessage = document.getElementById('confirmation-message');
  confirmationMessage.style.display = 'block';
  confirmationMessage.textContent = 'Your message has been sent. We will get back to you soon.';
}


const loadText = document.querySelector('.loading-text')
const bg = document.querySelector('.bg')

let load = 0

let int = setInterval(blurring, 1)

function blurring() {
  load++

  if (load > 99) {
    clearInterval(int)
  }

  loadText.innerText = `${load}%`
  loadText.style.opacity = scale(load, 0, 100, 1, 0)
  bg.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`
}

// https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers
const scale = (num, in_min, in_max, out_min, out_max) => {
  return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min
}