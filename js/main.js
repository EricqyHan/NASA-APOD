//The user will enter a date. Use that date to get the NASA picture of the day from that date! https://api.nasa.gov/
fetch(
  `https://api.nasa.gov/planetary/apod?api_key=qRvJnslXKsxgrQPBG9WqHE0XTxpy7Uae5qtKKcxl`
)
  .then((res) => res.json()) // parse response as JSON
  .then((data) => {
    console.log(data);
    console.log(data.hdurl);
    console.log(data.media_type == "image");
    document.querySelector(".pictureDate").innerText = data.date;
    document.querySelector(".description").innerText = data.explanation;
    document.querySelector(".mediaType").innerText = data.media_type;
    document.querySelector("img").src = data.hdurl;
    document.querySelector("img").classList.toggle("hidden");
    document.querySelector("iframe").classList.add("hidden");
  })
  .catch((err) => {
    console.log(`error ${err}`);
  });

document
  .querySelector("button")
  .addEventListener("click", getNerdsOfAverageScienceAbility);

function getNerdsOfAverageScienceAbility() {
  let date = document.querySelector("input").value;

  fetch(
    `https://api.nasa.gov/planetary/apod?api_key=qRvJnslXKsxgrQPBG9WqHE0XTxpy7Uae5qtKKcxl&date=${date}`
  )
    .then((res) => res.json()) // parse response as JSON
    .then((data) => {
      console.log(data);
      console.log(data.hdurl);
      console.log(data.url);
      console.log(data.media_type == "video");
      // document.querySelector("iframe").src = data.url;
      if (data.media_type === "video") {
        document.querySelector("iframe").src = data.url;
        document.querySelector(".pictureDate").innerText = data.date;

        document.querySelector(".description").innerText = data.explanation;
        document.querySelector(".mediaType").innerText = data.media_type;
        document.querySelector("iframe").classList.toggle("hidden");
        document.querySelector("img").classList.add("hidden");
      } else if (data.media_type === "image") {
        document.querySelector(".pictureDate").innerText = data.date;
        document.querySelector(".description").innerText = data.explanation;
        document.querySelector(".mediaType").innerText = data.media_type;
        document.querySelector("img").src = data.hdurl;
        document.querySelector("img").classList.toggle("hidden");
        document.querySelector("iframe").classList.add("hidden");
      }
    })
    .catch((err) => {
      console.log(`error ${err}`);
    });
}
