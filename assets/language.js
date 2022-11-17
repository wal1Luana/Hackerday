function getCurrentURL() {
  return window.location.href;
}

const actuallUrl = getCurrentURL();
console.log(actuallUrl);

const urlList = actuallUrl.split("/");
console.log(urlList);
const urlListLength = urlList.length - 2;
const lastElements = urlList[urlListLength];
console.log(lastElements);

let urlD = "";
let urlF = "";

if (lastElements == "teaser") {
  urlD = "https://data-hackdays-be.ch/teaser/";
  urlF = "https://data-hackdays-be-fr.lehre.digisus-lab.ch/teaser/";
  console.log("on Teaser");
} else if (lastElements == "anmeldung") {
  urlD = "https://data-hackdays-be.ch/anmeldung/";
  urlF = "https://data-hackdays-be-fr.lehre.digisus-lab.ch/anmdelung/";
  console.log("on Anmeldung");
}
console.log(urlD);
console.log(urlF);
