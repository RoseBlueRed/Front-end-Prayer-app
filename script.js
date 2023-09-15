const API_LINK = "https://dailyprayer.abdulrcs.repl.co/api/paris";

async function logPrayers() {
   const response = await fetch(API_LINK);
   const prayers = await response.json();
   console.log(prayers);
}
logPrayers();




async function Prayers(){
   const response = await fetch(API_LINK);
   const obj = await response.json();
   
   console.log(obj.today.Fajr);
   // Expected output: 42
   
   console.log(obj.today.Dhuhr);
   // Expected output: true
   
   
}

Prayers();









async function renderPrayers() {
   const response = await fetch(API_LINK);
   const obj = await response.json();
   
   
  
   

      let htmlSegment = `<div class="prayer">
                        <h2>Fajr : ${obj.today.Fajr} <h2>
                        <h2>Dhuhr : ${obj.today.Dhuhr} <h2>
                        <h2>Asr : ${obj.today.Asr} <h2>
                        <h2>Maghrib : ${obj.today.Maghrib} <h2>
                        <h2>Isha :  <h2> 
                        </div>`;
         
                        let container = document.querySelector('.container');
                        container.innerHTML = htmlSegment;
   };

   


renderPrayers();


