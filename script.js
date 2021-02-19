document.getElementById('rec').addEventListener('click', recommendation)

function recommendation () {
  let age = document.getElementById('age').value
  if (age >= 17) {
    document.getElementById('result').innerHTML = 'You can see R rated Movies'
  } else if (age >= 13) {
    document.getElementById('result').innerHTML = 'You can see PG-13 Movies Alone'
  } else if (age >= 5) {
    document.getElementById('result').innerHTML = 'You can see G or PG Movies Alone'
  } else {
    document.getElementById('result').innerHTML = 'You are probably too young to watch movies'
  }
  document.getElementById('thanks').innerHTML = "Thank you! For being honest and verifying your age"
}
