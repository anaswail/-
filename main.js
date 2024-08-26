// api link => "http://api.aladhan.com/v1/timingsByCity?city=EG&country=" + country;
// Egypt countries iso => Al Qāhirah - Al Jīzah - Al Iskandarīyah - Al Minūfīyah - Qinā - Ash Sharqīyah - As Suways - Kafr ash Shaykh - Aswān - Maţrūḩ

let country = "Al Qāhirah";

let cities = [
  "القاهرة",
  "الجيزة",
  "الأسكندرية",
  "المنوفيه",
  "قنا",
  "الشرقية",
  "السويس",
  "كفر الشيخ",
  "أسوان",
  "مطروح",
];

let citiesContainer = document.querySelector("select");

for (let i = 0; i < cities.length; i++) {
  let option = `
        <option class="text-black"> ${cities[i]} </option>
    `;
  citiesContainer.innerHTML += option;
}

citiesContainer.addEventListener("change", () => {
    console.log(citiesContainer.value)
  if (citiesContainer.value == "القاهرة") {
    country = "Al Qāhirah";
  } else if (citiesContainer.value == "الجيزة") {
    country = "Jīzah";
  } else if (citiesContainer.value == "الأسكندرية") {
    country = "Al Iskandarīyah";
  } else if (citiesContainer.value == "المنوفيه") {
    country = "Al Minūfīyah";
  } else if (citiesContainer.value == "قنا") {
    country = "Qinā";
  } else if (citiesContainer.value == "الشرقية") {
    country = "Ash Sharqīyah";
  } else if (citiesContainer.value == "السويس") {
    country = "As Suways";
  } else if (citiesContainer.value == "كفر الشيخ") {
    country = "Kafr ash Shaykh";
  } else if (citiesContainer.value == "أسوان") {
    country = "Aswān";
  } else if (citiesContainer.value == "مطروح") {
    country = "Maţrūḩ";
  }
  fetch("https://api.aladhan.com/v1/timingsByCity?city=EG&country=" + country)
    .then((response) => response.json())
    .then((value) => {
      let fajer = document.querySelector(".fajer .time h2");
      let shrouq = document.querySelector(".shrouq .time h2");
      let duhr = document.querySelector(".duhr .time h2");
      let asr = document.querySelector(".asr .time h2");
      let maghrib = document.querySelector(".maghrib .time h2");
      let aesha = document.querySelector(".aesha .time h2");

      let timeApi = value.data.timings;

      fajer.innerHTML = timeApi.Fajr;
      shrouq.innerHTML = timeApi.Sunrise;
      duhr.innerHTML = timeApi.Dhuhr;
      asr.innerHTML = timeApi.Asr;
      maghrib.innerHTML = timeApi.Maghrib;
      aesha.innerHTML = timeApi.Isha;
    });
});

fetch("https://api.aladhan.com/v1/timingsByCity?city=EG&country=" + country)
  .then((response) => response.json())
  .then((value) => {
    let fajer = document.querySelector(".fajer .time h2");
    let shrouq = document.querySelector(".shrouq .time h2");
    let duhr = document.querySelector(".duhr .time h2");
    let asr = document.querySelector(".asr .time h2");
    let maghrib = document.querySelector(".maghrib .time h2");
    let aesha = document.querySelector(".aesha .time h2");

    let timeApi = value.data.timings;

    fajer.innerHTML = timeApi.Fajr;
    shrouq.innerHTML = timeApi.Sunrise;
    duhr.innerHTML = timeApi.Dhuhr;
    asr.innerHTML = timeApi.Asr;
    maghrib.innerHTML = timeApi.Maghrib;
    aesha.innerHTML = timeApi.Isha;

    // date 
    let title = document.querySelector('.header .title h2');
    let day = value.data.date.hijri.weekday.ar;
    let fullDate = value.data.date.readable;
    title.innerHTML = day + " " + fullDate;
  });

// Sunrise Dhuhr Asr Maghrib Isha
