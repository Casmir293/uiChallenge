const baseUrl = "https://backend.getlinked.ai";
const apiUrl = `${baseUrl}/hackathon/registration`;
const categoryUrl = `${baseUrl}/hackathon/categories-list`;




const groupSizeNumber = document.getElementById("group_size");
const customCategory = document.getElementById("category");

// group size
groupSizeNumber.addEventListener('click', () => {
  const numbers = Array.from({ length: 20 }, (_, i) => i + 1);

  for (const number of numbers) {
    const option = document.createElement('option');
    option.value = number;
    option.textContent = number;
    option.style.backgroundColor = "transparent";
    option.style.color = "#000";
    groupSizeNumber.appendChild(option);
  }
} 
)


// category 


customCategory.addEventListener('click', () => {
  fetch(categoryUrl, {  
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    }
  })
  .then((response) => response.json())
  .then((categories) => {
    customCategory.innerHTML = '';

    categories.forEach((category) => {
      const option = document.createElement('option');
      option.value = category.id;
      option.textContent = category.name;
      option.style.backgroundColor = "transparent"
      option.style.textContent = "#000"
      customCategory.appendChild(option);
    });
  })
  .catch((error) => {
    console.error('Error fetching categories:', error);
  });
});
// registration
const registrationForm = document.getElementById("registration-form");

const checkboxInput = document.getElementById('checkbox');
const nameInput = document.getElementById("name-input");
const phoneNumber = document.getElementById("phone_number");
const projectTopic = document.getElementById("project_topic");
const email = document.getElementById("email");

const selectedCustomCategory = parseInt(customCategory.value);


registrationForm.addEventListener("submit", (e) => {
  e.preventDefault();
  
  const privacyPolicyAccepted = checkboxInput.checked;
 
  if (!privacyPolicyAccepted){
    return (error);
  }

    // Form data object
    const formData = {
      id: '',
      email: emailInput.value,
      first_name: nameInput.value,
      topic: topicInput.value,
      phone_number: phoneNumber.value,
      group_size: groupSizeNumber.value,
      custom_category: selectedCustomCategory,
      privacy_poclicy_accepted: privacyPolicyAccepted
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
  // Function to show the modal
  const modal = document.getElementById("modal");
  modal.style.opacity = "0.5";
  modal.style.display = 'block';



});

const registerBtn = document.getElementById('register-btn') 
registerBtn.addEventListener('click', ()=> {
  registrationForm();
    // Function to show the modal
    const modal = document.getElementById("modal");
    modal.style.opacity = "0.5";
    modal.style.display = 'block';
})

backBtn = document.getElementById('back-btn');
backBtn.addEventListener('click', () => {
  window.history.back();
  const modal = document.getElementById("modal");
  modal.style.display = "none";
})
// Function to close the modal





























