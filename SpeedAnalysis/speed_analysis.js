let testText = "The quick brown fox jumps over the lazy dog.";
let startTime, endTime;

function startTest() {
    // Встановіть тестовий текст
    document.getElementById("inputText").value = testText;

    // Скидання результатів та таймера
    document.getElementById("output").innerHTML = "";
    startTime = new Date().getTime();

    // Зміна тексту кнопки та функціональності
    var button = document.getElementById("btn");
    button.innerHTML = "Завершити тест";
    button.onclick = endTest;
}

 function endTest() {
    endTime = new Date().getTime();

    // Вимкнути введення користувача
    document.getElementById("userInput").readOnly = true;

    // Обчислити час, що минув, та кількість слів на хвилину (WPM)
    var timeElapsed = (endTime - startTime) / 1000; // в секундах
    var userTypedText = document.getElementById("userInput").value;

    // Розділити текст за допомогою регулярного виразу для правильного підрахунку слів
    var typedWords = userTypedText.split(/\s+/).filter(function (word) {
        return word !== "";
    }).length;

    var wpm = 0; // Значення за замовчуванням

    if (timeElapsed !== 0 && !isNaN(typedWords)) {
        wpm = Math.round((typedWords / timeElapsed) * 60);
    }

    // Відобразити результати
    var outputDiv = document.getElementById("output");
    outputDiv.innerHTML = "<h2>Результати тесту на друк:</h2>" +
        "<p>Набрано слів: " + typedWords + "</p>" +
        "<p>Час, що минув: " + timeElapsed.toFixed(2) + " секунд</p>" +
        "<p>Слів на хвилину (WPM): " + wpm + "</p>";

    // Скинути кнопку
    var button = document.getElementById("btn");
    button.innerHTML = "Почати тест";
    button.onclick = startTest;
}