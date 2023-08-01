function CalculateBMI (weight, height){
 const heightInMeters = height / 100;
 const bmi = weight / (heightInMeters * heightInMeters);

 return bmi
}

const weight = 70;
const height = 190;
const bmi = CalculateBMI(weight, height);

console.log("BMI : " + bmi.toFixed(2));

