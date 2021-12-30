

function getData()
{
    city = document.querySelector(".search-box").value;
    api = "f74dabb01c9ee65a2b1f4d31e90a53ef"
    url = "https://api.openweathermap.org/data/2.5/weather?q="+this.city+"&units=metric&appid="+this.api;
    fetch(url).then((response)=>{
        return response.json();
    }).then((data)=>{
        document.querySelector(".dec").innerText = data.weather[0].description;
        document.querySelector(".city").innerText = "Weather in " + data.name;
        document.querySelector(".icon").src =
        "https://openweathermap.org/img/wn/" + data.weather[0].icon + ".png";
    })
}

document.querySelector(".searchimg").addEventListener("click", function () {
    getData();
})

document
  .querySelector(".search-box")
  .addEventListener("keyup", function (event) {
    if (event.key == "Enter") {
      getData();
    }
  });