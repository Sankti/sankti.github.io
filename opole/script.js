clearElement = (elementID) => {
    document.getElementById(elementID).innerHTML = "";
}

buttonSection = document.getElementById("button-section");

makePlayButton = () => {
    let playButton = document.createElement("div");
        playButton.classList.add("button-round");
        playButton.innerHTML = "Graj w Wojewodę";
        document.getElementById("button-section").appendChild(playButton);
    
    pushButton = () => {
        location.replace("./gra.html");
    }
    playButton.addEventListener("click", pushButton);
}

makePlayButton();

// Right Sidebar
let contentH = document.getElementById("content-h");
let contentP1 = document.getElementById("content-p1");
let contentP2 = document.getElementById("content-p2");

let display = "default";

switchDisplay = () => {
    switch (display) {
        case "opolski":
            contentH.innerHTML = "Powiat Opolski";
            contentP1.innerHTML = "Powiat opolski – powiat w Polsce (w środkowej części województwa opolskiego), utworzony w 1999 roku w ramach reformy administracyjnej. Jego siedzibą jest miasto Opole.";
            contentP2.innerHTML = "Miasta: Niemodlin, Ozimek, Prószków, Tułowice";
            break
        case "namyslowski":
            contentH.innerHTML = "Powiat Namysłowski";
            contentP1.innerHTML = "Powiat namysłowski – powiat w Polsce, w północno-zachodniej części województwa opolskiego, utworzony w 1999 roku w ramach reformy administracyjnej. Jego siedzibą jest miasto Namysłów. Historycznie większość terenu powiatu leży na Dolnym Śląsku, oprócz Gminy Pokój, która położona jest na Górnym Śląsku[2].";
            contentP2.innerHTML = "Miasta: Namysłów";
            break
        case "kluczborski":
            contentH.innerHTML = "Powiat Kluczborski";
            contentP1.innerHTML = "Powiat kluczborski – powiat w Polsce (województwo opolskie), utworzony w 1999 roku w ramach reformy administracyjnej. Jego siedzibą jest miasto Kluczbork.";
            contentP2.innerHTML = "Miasta: Byczyna, Kluczbork, Wołczyn";
            break
        case "oleski":
            contentH.innerHTML = "Powiat Oleski";
            contentP1.innerHTML = "Powiat oleski – powiat w Polsce (w północno-wschodniej części województwa opolskiego), utworzony w 1999 roku w ramach reformy administracyjnej. Jego siedzibą jest miasto Olesno.";
            contentP2.innerHTML = "Miasta: Dobrodzień, Gorzów Śląski, Olesno, Praszka";
            break
        case "brzeski":
            contentH.innerHTML = "Powiat Brzeski";
            contentP1.innerHTML = "Powiat brzeski – powiat w Polsce w województwie opolskim, w obecnym kształcie utworzony w 1999 roku w ramach reformy administracyjnej. Jego siedzibą jest miasto Brzeg. Powiat brzeski obejmuje historyczne części zarówno Dolnego, jak i Górnego Śląska.";
            contentP2.innerHTML = "Miasta: Brzeg, Grodków, Lewin Brzeski";
            break
        case "strzelecki":
            contentH.innerHTML = "Powiat Strzelecki";
            contentP1.innerHTML = "Powiat strzelecki – powiat w Polsce, we wschodniej części województwa opolskiego, utworzony w 1999 roku w ramach reformy administracyjnej. Jego siedzibą jest miasto Strzelce Opolskie.";
            contentP2.innerHTML = "Miasta: Kolonowskie, Leśnica, Strzelce Opolskie, Ujazd, Zawadzkie";
            break
        case "nyski":
            contentH.innerHTML = "Powiat Nyski";
            contentP1.innerHTML = "Powiat nyski – powiat w Polsce (województwo opolskie), utworzony w 1999 roku w ramach reformy administracyjnej. Jego siedzibą jest miasto Nysa.";
            contentP2.innerHTML = "Miasta: Głuchołazy, Korfantów, Nysa, Otmuchów, Paczków";
            break
        case "prudnicki":
            contentH.innerHTML = "Powiat Prudnicki";
            contentP1.innerHTML = "Powiat prudnicki – powiat w Polsce, w południowej części województwa opolskiego, utworzony ponownie w 1999 roku w ramach reformy administracyjnej. Jego siedzibą jest miasto Prudnik.";
            contentP2.innerHTML = "Miasta: Biała, Głogówek, Prudnik";
            break
        case "krapkowicki":
            contentH.innerHTML = "Powiat Krapkowicki";
            contentP1.innerHTML = "Powiat krapkowicki – powiat w Polsce (województwo opolskie), utworzony w 1999 roku w ramach reformy administracyjnej. Jego siedzibą jest miasto Krapkowice.";
            contentP2.innerHTML = "Miasta: Gogolin, Krapkowice, Zdzieszowice";
            break
        case "kedzierzynsko-kozielski":
            contentH.innerHTML = "Powiat Kędzierzyńsko-Kozielski";
            contentP1.innerHTML = "Powiat kędzierzyńsko-kozielski – powiat w Polsce, na terenie województwa opolskiego, utworzony w 1999 roku w ramach reformy administracyjnej. Jego siedzibą jest miasto Kędzierzyn-Koźle.";
            contentP2.innerHTML = "Miasta: Kędzierzyn-Koźle";
            break
        case "glubczycki":
            contentH.innerHTML = "Powiat Głubczycki";
            contentP1.innerHTML = "Powiat głubczycki – powiat w Polsce (województwo opolskie), utworzony w 1999 roku w ramach reformy administracyjnej. Jego siedzibą jest miasto Głubczyce.";
            contentP2.innerHTML = "Miasta: Baborów, Głubczyce, Kietrz";
            break
        case "opole":
            contentH.innerHTML = "Miasto Opole";
            contentP1.innerHTML = "Opole i (niem. Oppeln, dś. Uppeln, cz. Opolí, śl. Uopole[3], łac. Oppelia, Oppolia, Opulia[4]) – miasto na prawach powiatu w południowo-zachodniej Polsce, siedziba władz województwa opolskiego i powiatu opolskiego. Położone w Europie Środkowej, na Nizinie Śląskiej, w Pradolinie Wrocławskiej i Równinie Opolskiej, nad rzeką Odrą. Jedna z historycznych stolic Górnego Śląska i jedno z najstarszych miast w Polsce.";
            contentP2.innerHTML = "Miasto było stolicą księstwa opolsko-raciborskiego, siedzibą władz pruskiej prowincji Górny Śląsk i rejencji opolskiej. Od 28 czerwca 1950 jest stolicą województwa opolskiego[5] i jego głównym ośrodkiem gospodarczym, naukowym, kulturalnym i administracyjnym. Od 1999 siedziba władz ziemskiego powiatu opolskiego. Opole wraz z powiatem opolskim i krapkowickim tworzy aglomerację opolską, zamieszkałą przez ponad 315 tys. osób[6][2].";
            break
        default:
            contentH.innerHTML = "No selection!";
            contentP1.innerHTML = "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum numquam aut deserunt eius perferendis autem nihil, maxime quia hic recusandae fugit neque eos error possimus quis nemo accusamus voluptatem provident?";
            contentP2.innerHTML = "Opis Powiatu.";
            break
    }
}

countySelect = (county) => {
    display = county;
    switchDisplay();
}

// Callback functions for all counties
selectOpolski = () => {
    countySelect("opolski");
}
selectNamyslowski = () => {
    countySelect("namyslowski");
}
selectKluczborski = () => {
    countySelect("kluczborski");
}
selectOleski = () => {
    countySelect("oleski");
}
selectBrzeski = () => {
    countySelect("brzeski");
}
selectStrzelecki = () => {
    countySelect("strzelecki");
}
selectNyski = () => {
    countySelect("nyski");
}
selectPrudnicki = () => {
    countySelect("prudnicki");
}
selectKrapkowicki = () => {
    countySelect("krapkowicki");
}
selectKedzierzynskoKozielski = () => {
    countySelect("kedzierzynsko-kozielski");
}
selectGlubczycki = () => {
    countySelect("glubczycki");
}
selectOpole = () => {
    countySelect("opole");
}

function stopLink(event) {
    event.preventDefault();
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