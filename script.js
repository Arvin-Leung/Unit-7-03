// The line below allows the button to call the function when clicked
document.getElementById('rec').addEventListener('click', recommendation)

// The function below checks if the user's age 
function recommendation () {
  // This stores the input as the variable age
  const age = document.getElementById('age').value
  /* The if statements below check if the age is greater than the requirements to watch the movies. The recommendations will pop up as well if the condition is met. */
  if (age >= 17) {
    document.getElementById('result').innerHTML = 'You can see R rated Movies'
  } else if (age >= 13) {
    document.getElementById('result').innerHTML = 'You can see PG-13 Movies Alone'
  } else if (age >= 5) {
    document.getElementById('result').innerHTML = 'You can see G or PG Movies Alone'
  } else {
    document.getElementById('result').innerHTML = 'You are probably too young to watch movies'
  }

//  The line below thanks the user for inputting their age
document.getElementById('thanks').innerHTML = "Thank you! For being honest and verifying your age"
}
