

//see on sõna
const synad = {
    'teostus': 'реализация',
    'algorytm': 'алгоритм',
    'kavand': 'план',
    'kasutajaliides': 'пользовательский интерфейс',
    'mudel': 'модель',
    'andmebaasi skeem': 'схема базы данных',
    'standart': 'стандарт',
    'tsükkel': 'цикл',
    'andmetöötlus': 'обработка данных',
    'andmestruktuur': 'структура данных',
    'arenduskeskond': 'среда разработки',
    'projektihaldus tööriist': 'инструмент управления проектами',
    'kavandamine': 'планирование',
    'iteratsioon': 'итерация',
    'parandus': 'исправление',
    'koskmudel': 'каскадная модель',
    'agiline mudel':'агильная модель',
    'inkrementaalne mudel':'инкриминтальная модель',
    'nõudmised':'требования',
    'testimine':'тестирование',
    'realiseerimine':'реализация',
    'integreerimine':'интеграция',
    'kasutamine':'использование',
    'hooldus':'обслуживание',
    'eelised':'преимущества',
    'puudused':'недостатки',
    'elutsükkel':'жизненный цикл',
    'arendamine':'разработка',
    'valideerimine':'валидирование'
};

let correctCountEstToRus = 0;
let incorrectCountEstToRus = 0;
let correctCountRusToEst = 0;
let incorrectCountRusToEst = 0;

function randomSyna(type) {
    const keys = Object.keys(synad);
    const juhuslikSyna = keys[Math.floor(Math.random() * keys.length)];
    if (type === 'estoniastvenesse') {
        document.getElementById("random-syna-estoniastvenesse").innerHTML = juhuslikSyna;
    } else if (type === 'venestaeesti') {
        document.getElementById("random-syna-venestaeesti").innerHTML = synad[juhuslikSyna];
    }
}

function kontroll(type) {
    let correctTranslation;
    let correctWord;
    let correctDiv;
    let correctInput;
    let correctStats;
    let correctCount;
    let incorrectCount;

    if (type === 'estoniastvenesse') {
        correctDiv = document.getElementById("vastus-estoniastvenesse");
        correctInput = document.getElementById("kontroll-estoniastvenesse");
        correctStats = document.getElementById("stats-estoniastvenesse");
        correctCount = correctCountEstToRus;
        incorrectCount = incorrectCountEstToRus;
        correctWord = document.getElementById("random-syna-estoniastvenesse").innerHTML;
        correctTranslation = synad[correctWord];
    } else if (type === 'venestaeesti') {
        correctDiv = document.getElementById("vastus-venestaeesti");
        correctInput = document.getElementById("kontroll-venestaeesti");
        correctStats = document.getElementById("stats-venestaeesti");
        correctCount = correctCountRusToEst;
        incorrectCount = incorrectCountRusToEst;
        correctWord = document.getElementById("random-syna-venestaeesti").innerHTML;
        correctTranslation = correctWord;
    }

    const syna = correctInput.value.trim().toLowerCase();

    if (syna === correctTranslation) {
        correctDiv.innerHTML = 'Õige!';
        correctDiv.style.color = 'green';
        correctCount++;
    } else {
        correctDiv.innerHTML = 'Vale! Õige vastus on: ' + correctTranslation;
        correctDiv.style.color = 'red';
        incorrectCount++;
    }

    correctInput.value = '';

    if (type === 'estoniastvenesse') {
        correctCountEstToRus = correctCount;
        incorrectCountEstToRus = incorrectCount;
    } else if (type === 'venestaeesti') {
        correctCountRusToEst = correctCount;
        incorrectCountRusToEst = incorrectCount;
    }

    correctStats.innerHTML = 'Õigeid vastuseid: ' + correctCount + ', Valesid vastuseid: ' + incorrectCount;
}