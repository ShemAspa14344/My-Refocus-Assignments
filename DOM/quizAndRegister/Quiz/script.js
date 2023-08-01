const form = document.forms.quiz;




function checkQuestion1() {
    const answer1 = document.getElementById('answer1').value;
    const CheckerField = document.getElementById('result-question1');
  
    if (answer1.toLowerCase() === "manila") {
      CheckerField.innerText = "Correct answer";
      CheckerField.style.color = 'green';
    } else {
      CheckerField.innerText = "Wrong answer, try again";
      CheckerField.style.color = 'red';
    }
  }
   
  function checkQuestion2() {
    const radio2 = document.getElementsByName('radio2');
    let selectedValue;
  
    radio2.forEach((radio) => {
      if (radio.checked) {
        selectedValue = radio.value;
      }
    });
  
    const CheckerField2 = document.getElementById('result-question2');
  
    if (selectedValue === 'x = 13') {
      CheckerField2.innerHTML = 'Correct Answer';
      CheckerField2.style.color = 'green';
    } else {
      CheckerField2.innerHTML = 'Wrong answer, try again';
      CheckerField2.style.color = 'red';
    }
  }

  

function checkQuestion3(){
    const check1 = document.getElementById('check1')
    const check2 = document.getElementById('check2')
    const check3 = document.getElementById('check3')
    const check4 = document.getElementById('check4')
    const CheckerField3 = document.getElementById('result-question3')

    if (check1.checked && check2.checked && check4.checked && !check3.checked) {
        CheckerField3.innerHTML = 'Correct Answers';
        CheckerField3.style.color = 'green';
      } else {
        CheckerField3.style.color = 'red';
        CheckerField3.innerHTML = 'Wrong answers, try again';
      }
}

form.addEventListener('submit', function(event){
    event.preventDefault();
    checkQuestion1();
    checkQuestion2();
    checkQuestion3();
  })
  
  
form.addEventListener('reset', function(event){
    event.preventDefault();
      // Add more reset of inputs here
      document.getElementById('result-question1').innerText = "";
      document.getElementById('result-question2').innerText = "";
      document.getElementById('result-question3').innerText = "";
  })