let count = 0; // Initialize count to 0

function displayCount() {
    document.getElementById('countDisplay').innerHTML=count; // Відобразити кількість в HTML
}

function checkCountValue() {
  if (count === 10) {
    alert("Ваш пост в Instagram отримав 10 підписників! Вітаємо!");
  } else if (count === 20) {
    alert("Ваш пост в Instagram отримав 20 підписників! Продовжуйте в тому ж дусі!");
  }
}

function increaseCount() {
  count++; // Збільшити count на 1
  displayCount(); // Відобразити count
  checkCountValue(); // Перевірити значення count і відобразити повідомлення
}