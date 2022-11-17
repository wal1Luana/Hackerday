function getCurrentURL() {
  return window.location.href;
}

const url = getCurrentURL();
console.log(url);

const fragment = url.split("/");
const fragmentLength = fragment.length - 1;
const lastElement = fragment[fragmentLength];
console.log(lastElement);

const newUrlD = "";
const newUrlF = "";

if (lastElement == "teaser") {
  newUrlD = "https://data-hackdays-be.ch/teaser/";
  newUrlF = "https://data-hackdays-be-fr.lehre.digisus-lab.ch/teaser/";
} else if (lastElement == anmeldung) {
  newUrlD = "https://data-hackdays-be.ch/anmeldung/";
  newUrlF = "https://data-hackdays-be-fr.lehre.digisus-lab.ch/anmdelung/";
}
