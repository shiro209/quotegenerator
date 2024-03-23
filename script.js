const apiUrl = "https://api.quotable.io/random";

async function getapi(url){

  try{
    const response = await fetch(url);
    var data = await response.json();
    console.log(data);
    displayQuote(data);
  }
  catch(error) {
    console.error("Error finding data: ", error);
  }
  
}
getapi(apiUrl);

function displayQuote(data){
  const quoteContainer = document.querySelector('.quoteContainer');
  const authorName = document.querySelector('.author');
  quoteContainer.innerHTML = `<p>"${data.content}"</p>`;

}

function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min; 
}


document.getElementById("btn").addEventListener("click", function() {
  getapi(apiUrl);
  document.getElementById("AdviceNo").innerText = "ADVICE #" + randomNumber(1, 1000);
});



