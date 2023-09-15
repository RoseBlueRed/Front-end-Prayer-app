const API_LINK = "https://dailyprayer.abdulrcs.repl.co/api/paris";

fetch(API_LINK)
   .then(response => response.json())
   .then(json => console.log(JSON.stringify(json)));

async function getPrayers() {
   let url = 'https://dailyprayer.abdulrcs.repl.co/api/paris';
   try {
      let res = await fetch(url);
      return await res.json(); 
   } catch (error) {
      console.log(error);
   }
}

 async function renderPrayers() {
   let prayers = await getPrayers();
   
      let htmlSegment = `<div class="prayer">
                        <h2>Fajr : ${prayers.data.today.Fajr} <h2>
                        <h2>Dhuhr : ${prayers.data.today.Dhuhr} <h2>
                        <h2>Asr : ${prayers.data.today.Asr} <h2>
                        <h2>Maghrib : ${prayers.data.today.Maghrib} <h2>
                        <h2>Isha : ${prayers.data.today.Isha} <h2>
                        </div>`;
         
                        let container = document.querySelector('.container');
                        container.innerHTML = htmlSegment;
   };

   


renderPrayers();

