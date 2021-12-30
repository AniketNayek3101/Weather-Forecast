

function getData()
{
    city = document.querySelector(".search-box").value;
    api = "f74dabb01c9ee65a2b1f4d31e90a53ef"
    url = "https://api.openweathermap.org/data/2.5/weather?q="+this.city+"&units=metric&appid="+this.api;
    fetch(url).then((response)=>{
        if (!response.ok) {
            alert("No weather found.");
            throw new Error("No weather found.");
          }
        return response.json();
    }).then((data)=>{
        document.querySelector(".dec").innerText = data.weather[0].description;
        document.querySelector(".city").innerText = "Weather in " + data.name;
        document.querySelector(".icon").src =
        "https://openweathermap.org/img/wn/" + data.weather[0].icon + ".png";
        document.querySelector(".temp").innerText = data.main.temp + "°C";
        /*temp1 = data.main.temp;
        if(temp1>20)
            document.body.style.backgroundImage = "url('./Images/hot')"*/
        document.querySelector(".humid").innerText = "Humidity : "+ data.main.humidity+"%";
        document.querySelector(".wind").innerText = "Wind : " + data.wind.speed + "km/h";
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