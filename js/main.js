//The user will enter a date. Use that date to get the NASA picture of the day from that date! https://api.nasa.gov/
document.getElementById("input").valueAsDate = new Date();
document.querySelector("button").addEventListener("click", getFetch);

function getFetch() {
  const choice = document.querySelector("input").value;
  const url = `https://api.nasa.gov/planetary/apod?api_key=qRvJnslXKsxgrQPBG9WqHE0XTxpy7Uae5qtKKcxl&date=${choice}`;
  fetch(url)
    .then((res) => res.json()) // parse response as JSON
    .then((data) => {
      console.log(data);
      if (data.media_type === "image") {
        document.querySelector("img").src = data.hdurl;
        document.querySelector("iframe").style.display = "none";
        document.querySelector("img").style.display = "block";
      } else if (data.media_type === "video") {
        document.querySelector("iframe").src = data.url;
        document.querySelector("img").style.display = "none";
        document.querySelector("iframe").style.display = "block";
      }
      document.querySelector(".pictureDate").innerText = data.date;
      document.querySelector("h2").innerText = data.media_type;
      document.querySelector("h3").innerText = data.explanation;
    })
    .catch((err) => {
      console.log(`error ${err}`);
    });
}
