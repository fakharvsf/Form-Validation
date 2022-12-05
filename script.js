'use strict';

//Retriving data fromDOM
const form = document.querySelector('#info-form');
const startDate = document.getElementById('start-date');
const endDate = document.getElementById('end-date');
const fullName = document.getElementById('name');
const DoB = document.getElementById('date-of-birth');
let filess = document.getElementById('myFile');
const myFormData = {};
// console.log(form);

//onSubmit Events
form.addEventListener('submit', alpha => {
  // const startDate = Number(document.getElementById('start-date').value);
  //Date Validation for start and end date
  if (startDate.value > endDate.value) {
    alert('⛔Warning the please enter a valid satrt and end date⛔');
  }
  //add data to the empaty object
  alpha.preventDefault();
  myFormData.dateOfBirth = `${DoB.value}`;
  myFormData.startDate = `${startDate.value}`;
  myFormData.endDate = `${endDate.value}`;
  myFormData.name = `${fullName.value}`;
  myFormData.file = `${filess.value}`;

  // console.log(myFormData);
  let jsonFormat = JSON.stringify(myFormData);
  console.log(jsonFormat);
  // Saved to local storage
  localStorage.setItem('', jsonFormat);

  if (
    myFormData.dateOfBirth &&
    myFormData.startDate &&
    myFormData.endDate &&
    myFormData.name &&
    myFormData.filess
  )
    alert('🎉Your data is stored to the local storage🎉');
});

//downlaod file

//new function event to save file

const input = document.getElementById('myFile');
const link = document.getElementById('link');
let objectURL;

input.addEventListener('change', function () {
  if (objectURL) {
    // revoke the old object url to avoid using more memory than needed
    URL.revokeObjectURL(objectURL);
  }

  const fil = this.files[0];
  objectURL = URL.createObjectURL(fil);

  link.download = fil.name; // this name is used when the user downloads the file
  link.href = objectURL;
});
