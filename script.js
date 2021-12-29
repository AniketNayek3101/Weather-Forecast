

function getData()
{
    city = document.querySelector(".search-box").value;
    api = "f74dabb01c9ee65a2b1f4d31e90a53ef"
    url = "api.openweathermap.org/data/2.5/weather?q="+this.city+"&appid="+this.api;
    /*fetch(url).then((response)=>{
        response.json();
    }).then((data)=>{
        console.log(response);
    })*/
    console.log(this.city);
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