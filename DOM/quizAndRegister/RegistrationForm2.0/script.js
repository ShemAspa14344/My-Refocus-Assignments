const form = document.forms.registration;
const name = form.name;
const middleName = form.middleName;
const lastName = form.lastName;
const birthday = form.birthday;
const email = form.email;
const region = form.region;
const province = form.province;
const barangay = form.barangay;
const street = form.street;
const gender = form.gender;
const vaccine1 = form.vaccine1;
const dateDose1 = form.date1;
const siteDose1 = form.site;
const yesno = form.yesno;
const vaccine2 = form.vaccine2;
const dateDose2 = form.dateDose2;
const siteDose2 = form.siteDose2;

const radioElems = document.getElementsByName('yesno');
const container = document.getElementById('yesno-container');

radioElems.forEach((radio) => {
  radio.addEventListener('change', function (event) {
    const isYes = event.target.value == 'yes';
    const doseFields2 = document.getElementById('vax2')
    doseFields2.style.display = isYes ? 'block' : 'none';
    // container.style.color = isYes ? 'green' : 'red';
    // container.innerHTML = isYes ? 'You chose yes' : 'NO, that is wrong'; ]
  });
});


document
  .getElementById('registration')
  .addEventListener('submit', function (event) {
    event.preventDefault();
    var formData = new FormData(event.target);

    formData.forEach(function () {
      console.log('name: ' + name.value);
      console.log('middle name: ' + middleName.value);
      console.log('last name: ' + lastName.value);
      console.log('birthday: ' + birthday.value);
      console.log('email: ' + email.value);
      console.log('region: ' + region.value);
      console.log('province: ' + province.value);
      console.log('barangay: ' + barangay.value);
    });

    var displayArea = document.createElement('div');
    displayArea.innerHTML = '<h3>Submitted Information:</h3>';
    formData.forEach(function (value, key) {
      displayArea.innerHTML +=
        '<p><strong>' + key + ':</strong> ' + value + '</p>';
    });
    document.body.appendChild(displayArea);
  });
