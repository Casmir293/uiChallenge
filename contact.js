const baseUrl = "https://backend.getlinked.ai";
const apiUrl = `${baseUrl}/hackathon/contact-form`;

// Get buttons and inputs
const backBtn = document.getElementById("contact-backbtn");
const contactForm = document.getElementById('contact-form');

// Get form inputs
const nameInput = document.getElementById('name-input');
const emailInput = document.getElementById('email-input');
const messageInput = document.getElementById('message-input');
const topicInput = document.getElementById('topic-input');

// Function to validate form
const validateForm = () => {
  let isValid = true;
  if (nameInput.value.trim() === '') {
    nameInput.style.borderColor = 'red';
    isValid = false;
  } else {
    nameInput.style.borderColor = ''; 
  }
 
  if (emailInput.value.trim() === '') {
    emailInput.style.borderColor = 'red';
    isValid = false;
  } else {
    emailInput.style.borderColor = ''; // Reset border color
  }

  return isValid;
};

// Event listener for back button
backBtn.addEventListener("click", () => {
  window.history.back();
});

// Event listener for form submission
contactForm.addEventListener("submit", (e) => {
  e.preventDefault();
  if (validateForm()) {
    // Form data object
    const formData = {
      email: emailInput.value,
      first_name: nameInput.value,
      topic: topicInput.value,
      message: messageInput.value
      
    };
  
    // Send the form data to the API
    // apiUrl
    fetch(apiUrl, {
      method: "POST",
      body: JSON.stringify(formData),
      headers: {
        "Content-Type": "application/json",
      },
    })
    .then((response) => response.json())
    .then((json) => {
      console.log(json);
    })
    .catch((error) => {
      console.error(error);
    });
  }
});

const submitBtn = document.getElementById('contact-submit-btn') 
submitBtn.addEventListener('click', () => {
  contactForm();
})