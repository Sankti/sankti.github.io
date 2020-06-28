clearElement = (elementID) => {
    document.getElementById(elementID).innerHTML = "";
}

// buttonSection = document.getElementById("button-section");

// makePlayButton = () => {
//     let playButton = document.createElement("div");
//         playButton.classList.add("button-round");
//         playButton.innerHTML = "Graj";
//         document.getElementById("button-section").appendChild(playButton);
    
//     pushButton = () => {
//         console.log("Wduszono przycisk.");
//     }
//     playButton.addEventListener("click", pushButton);
// }

// makePlayButton();

// Right Sidebar
let contentH = document.getElementById("content-h");
let contentP1 = document.getElementById("content-p1");
let contentP2 = document.getElementById("content-p2");

function stopLink(event) {
    event.preventDefault();
}

// Callback functions for all counties
selectOpolski = () => {
    answerQuestion(0);
}
selectNamyslowski = () => {
    answerQuestion(1);
}
selectKluczborski = () => {
    answerQuestion(2);
}
selectOleski = () => {
    answerQuestion(3);
}
selectBrzeski = () => {
    answerQuestion(4);
}
selectStrzelecki = () => {
    answerQuestion(5);
}
selectNyski = () => {
    answerQuestion(6);
}
selectPrudnicki = () => {
    answerQuestion(7);
}
selectKrapkowicki = () => {
    answerQuestion(8);
}
selectKedzierzynskoKozielski = () => {
    answerQuestion(9);
}
selectGlubczycki = () => {
    answerQuestion(10);
}
selectOpole = () => {
    answerQuestion(11);
}

const opolski = document.querySelector("#opolski");
const namyslowski = document.querySelector("#namyslowski");
const kluczborski = document.querySelector("#kluczborski");
const oleski = document.querySelector("#oleski");
const brzeski = document.querySelector("#brzeski");
const strzelecki = document.querySelector("#strzelecki");
const nyski = document.querySelector("#nyski");
const prudnicki = document.querySelector("#prudnicki");
const krapkowicki = document.querySelector("#krapkowicki");
const kedzierzynskoKozielski = document.querySelector("#kedzierzynsko-kozielski");
const glubczycki = document.querySelector("#glubczycki");
const opole = document.querySelector("#opole");

// Preventing default events
opolski.addEventListener('click', stopLink);
namyslowski.addEventListener('click', stopLink);
kluczborski.addEventListener('click', stopLink);
oleski.addEventListener('click', stopLink);
brzeski.addEventListener('click', stopLink);
strzelecki.addEventListener('click', stopLink);
nyski.addEventListener('click', stopLink);
prudnicki.addEventListener('click', stopLink);
krapkowicki.addEventListener('click', stopLink);
kedzierzynskoKozielski.addEventListener('click', stopLink);
glubczycki.addEventListener('click', stopLink);
opole.addEventListener('click', stopLink);

// Setting new events
opolski.addEventListener("click", selectOpolski);
namyslowski.addEventListener("click", selectNamyslowski);
kluczborski.addEventListener("click", selectKluczborski);
oleski.addEventListener("click", selectOleski);
brzeski.addEventListener('click', selectBrzeski);
strzelecki.addEventListener('click', selectStrzelecki);
nyski.addEventListener('click', selectNyski);
prudnicki.addEventListener('click', selectPrudnicki);
krapkowicki.addEventListener('click', selectKrapkowicki);
kedzierzynskoKozielski.addEventListener('click', selectKedzierzynskoKozielski);
glubczycki.addEventListener('click', selectGlubczycki);
opole.addEventListener('click', selectOpole);



// Gane Logic

let score = 0;

displayScore = () => {
    return score;
}

const counties = [
    ["Niemodlin", "Ozimek", "Prószków", "Tułowice"],
    ["Namysłów"],
    ["Byczyna", "Kluczbork", "Wołczyn"],
    ["Dobrodzień", "Gorzów Śląski", "Olesno", "Praszka"],
    ["Brzeg", "Grodków", "Lewin Brzeski"],
    ["Kolonowskie", "Leśnica", "Strzelce Opolskie", "Ujazd", "Zawadzkie"],
    ["Głuchołazy", "Korfantów", "Nysa", "Otmuchów", "Paczków"],
    ["Biała", "Głogówek", "Prudnik"],
    ["Gogolin", "Krapkowice", "Zdzieszowice"],
    ["Kędzierzyn-Koźle"],
    ["Baborów", "Głubczyce", "Kietrz"],
    ["Opole"],
]

joinLists = (matrix) => {
    let list = [];
    for (i=0; i<matrix.length; i++) {
        list = list.concat(matrix[i]);
    }
    return list;
}

let cities = joinLists(counties);

pickElement = (list) => {
    let number = Math.floor(Math.random() * list.length);
    return list[number];
}

deleteElement = (list, element) => {
    const index = list.indexOf(element);
    if (index > -1) {
        list.splice(index, 1);
    }
}

pickAndRemove = (list) => {
    let element = pickElement(list);
    deleteElement(list, element);
    return element;
}

let city = null;

displayQuestion = () => {
    contentH.innerHTML = "Wskaż powiat miasta " + city;
    contentP1.innerHTML = "Książę Kazimierz chce się dowiedzieć, gdzie na mapie leży miasto " + city + ". Proszę wskaż mu jego orientacyjne położenie!";
    contentP2.innerHTML = "Twój obecny wynik: " + displayScore();
}

answerQuestion = (answer) => {
    let validity = null;
    selectedCounty = counties[answer];
    for (i=0; i<selectedCounty.length; i++) {
        if (city === selectedCounty[i]) {
            validity = true;
            break;
        } else {
            validity = false;
        }
    }
    countScore(validity);
}

countScore = (boolean) => {
    if (boolean == true) {
        score += 1;
    }
    if (isCitiesArrayEmpty() == true) {
        displayFinalScore();
    } else {
        askQuestion();
    }
}

askQuestion = () => {
    city = pickAndRemove(cities);
    displayQuestion(city);
}

isCitiesArrayEmpty = () => {
    if (cities.length < 1) {
        return true;
    } else {
        return false;
    }
}

displayFinalScore = () => {
    contentH.innerHTML = "Twój wynik to " + displayScore() + " pkt.";
    contentP1.innerHTML = "Co sądzi o tym Książę Kazimierz?";
    if (score < 15) {
        contentP2.innerHTML = "Jestem zasmucony, że Opole zarządzane jest przez tak niekompetentne osoby. Losy stolicy mojego księstwa malują się w ciemnych barwach. Lepiej udam się do Raciborza, gdzie być może znajdę godnego następcę. Do widzenia.";
    } else if (score < 30) {
        contentP2.innerHTML = "Wojewodo, wiesz co nieco na temat naszego regionu, ale twoja wiedza nadal wymaga poszerzenia. Jeśli masz piastować tak wysokie stanowisko, musisz lepiej poznać planszę, na której toczy się gra. Los tej krainy jest w twoich rękach.";
    } else if (score >= 30) {
        contentP2.innerHTML = "Wojewodo! Jesteś prawdziwym czempionem wiedzy na temat geografii Opolszczyzny! Świadomość, że tak wspaniali Opolanie stąpają po ziemi mojego księstwa pozwala mi w spokoju powrócić do mojego grobu. Bywaj, Wojewodo!";
    }
}

askQuestion();