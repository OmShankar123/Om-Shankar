const form = document.getElementById('contact-form');
const phoneInput = document.getElementById('phone');


// Validate phone number input
phoneInput.addEventListener('input', function() {
  phoneInput.setCustomValidity('');
  if (!phoneInput.checkValidity()) {
    phoneInput.setCustomValidity('Please enter a 10-digit phone number without dashes or spaces.');
  }
});

// Handle form submission
form.addEventListener('submit', function(event) {
  event.preventDefault();

  const name = form.elements.name.value;
  const email = form.elements.email.value;
  const phone = form.elements.phone.value;
  const message = form.elements.message.value;

  const data = {
    name,
    email,
    phone,
    message
  };

  // Construct email body
  const body = Object.keys(data).map(function(key) {
    return key + ': ' + data[key];
  }).join('\n');

  // Construct email link
  const link = 'mailto:osinghania123@gmail.com'
    + '?subject=New contact form submission'
    + '&body=' + encodeURIComponent(body);

  // Open email client
  window.location.href = link;
  
  alert('Thanks for contacting me!');
  form.reset();
});
// Animate progress bars on scroll
let animated = false;

window.addEventListener('scroll', () => {
  const skillsSection = document.querySelector('#skills');
  const skillsSectionTop = skillsSection.offsetTop;
  const windowHeight = window.innerHeight;
  const scrollY = window.scrollY;
  
  if (scrollY > skillsSectionTop - windowHeight && !animated) {
    const skillProgress = document.querySelector('.skill-progress');
//     const cssProgress = document.querySelector('.css-progress');
//     const jsProgress = document.querySelector('.js-progress');
    
    skillProgress.classList.add('animated');
//     cssProgress.classList.add('animated');
//     jsProgress.classList.add('animated');
    
    animated = true;
  }
});

// Clock

setInterval(()=>{
  const time = document.querySelector(".display #time");
  let date = new Date();
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();
  let day_night = "AM";
  if(hours > 12){
    day_night = "PM";
    hours = hours - 12;
  }
  if(seconds < 10){
    seconds = "0" + seconds;
  }
  if(minutes < 10){
    minutes = "0" + minutes;
  }
  if(hours < 10){
    hours = "0" + hours;
  }
  time.textContent = hours + ":" + minutes + ":" + seconds + " "+ day_night;
});




//with api call
// const form = document.getElementById('contact-form');
// const phoneInput = document.getElementById('phone');

// // Validate phone number input
// phoneInput.addEventListener('input', function() {
//   phoneInput.setCustomValidity('');
//   if (!phoneInput.checkValidity()) {
//     phoneInput.setCustomValidity('Please enter a 10-digit phone number without dashes or spaces.');
//   }
// });

// // Handle form submission
// form.addEventListener('submit', function(event) {
//   event.preventDefault();

//   const name = form.elements.name.value;
//   const email = form.elements.email.value;
//   const phone = form.elements.phone.value;
//   const message = form.elements.message.value;

//   const data = {
//     name,
//     email,
//     phone,
//     message
//   };

//   fetch('https://example.com/contact', {
//     method: 'POST',
//     body: JSON.stringify(data),
//     headers: {
//       'Content-Type': 'application/json'
//     }
//   })
//   .then(function(response) {
//     if (response.ok) {
//       alert('Thanks for contacting us!');
//       form.reset();
//     } else {
//       alert('Oops! Something went wrong.');
//     }
//   })
//   .catch(function(error) {
//     console.log(error);
//   });
// });
