
let weather = {
    fetchWeather: function (city) {
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&APPID=2b5ce6ad3a288231f3766fece2a5938d`)
     .then(res => {
        if(res.ok)
        return res.json()
        else if (res.status === 404)
        {
            alert("Enter a valid city name!")
            document.querySelector(".searchbar").value = '';
            return Promise.reject('error 404')
        }
        else 
        return Promise.reject('Error: ' + response.status)
     })
     .then(data => this.displayWeather(data))
     .catch(err => console.log(err));
    },
    
    search: function() {
        this.fetchWeather(document.querySelector(".searchbar").value);
        document.querySelector(".searchbar").value = '';
    },

    displayWeather: function(data) 
    {
        if(document.body.className)
                 document.body.className = '';
            else
                document.body.className = 'fade';
        const {name,timezone} = data;
        // getting the current time in miliseconds 
        //then adding or substracting the offset in miliseconds
        // then getting the date and converting to utc 
        var d = new Date((new Date().getTime())+(timezone*1000));
        let s = d.toUTCString();
    
        const{temp,humidity} = data.main;
        const{icon, description} = data.weather[0];
        var {id} = data.weather[0];
        const{speed} = data.wind;
        
        document.querySelector(".city").innerText = `${name}`;
        document.querySelector(".timezone").innerText = `${s.substring(17,22)}`;
        document.querySelector(".date").innerText = `\xa0\xa0${s.substring(0,11)}`;
        document.querySelector(".temp").innerText = `${temp} °C\xa0\xa0\xa0`;
        document.querySelector(".icon").src = `http://openweathermap.org/img/wn/${icon}@2x.png`;
        document.querySelector(".description").innerText = `${description}`;
        document.querySelector(".humidity").innerText = `Humidity: ${humidity}%`;
        document.querySelector(".speed").innerText = `\xa0Wind Speed: ${speed} km/h`;
        document.querySelector(".weather").classList.remove("loading");
        document.querySelector(".card").style.top = "35%";
        let timeOfDay = "day";
        var hr = s.substring(17,19);
        if(parseInt(hr)>18 || parseInt(hr)<6)
        timeOfDay = "night";

        if (        id == 200 ||
                    id == 202 ||
                    id == 201 ||
                    id == 210 ||
                    id == 211 ||
                    id == 212 ||
                    id == 221 ||
                    id == 230 ||
                    id == 231 ||
                    id == 232 )
        {
            document.body.style.background= `url(Images/${timeOfDay}/thunder.jpg)`; 
        }
        else if (   id==800   )
        {
        document.body.style.background= `url(Images/${timeOfDay}/sunny.jpg)`;
        }
        else if (   id == 500 ||
                    id == 501 ||
                    id == 520 ||
                    id == 521 ||
                    id == 531  )
        {
            document.body.style.background= `url(Images/${timeOfDay}/lightRain.jpg)`; 
        }
        else if (    id == 502 ||
                     id == 503 ||
                     id == 504 ||
                     id == 511 ||
                     id == 522 ||
                     id == 314 )
        {
            document.body.style.background = `url(Images/${timeOfDay}/heavyRain.jpg)`; 
        }
        else if (    id == 701 ||
                     id == 711 ||
                     id == 721 ||
                     id == 731 ||
                     id == 741  )
        {
            document.body.style.background= `url(Images/${timeOfDay}/fog.jpg)`; 
        }
        else if (   id == 751 ||
                    id == 761  )
        {
        document.body.style.background= `url(Images/${timeOfDay}/sand.jpg)`; 
        }
        else if (    id == 762 )
        {
        document.body.style.background= `url(Images/${timeOfDay}/ash.jpg)`; 
        }
        else if (    id == 771 )
        {
        document.body.style.background= `url(Images/${timeOfDay}/squall.jpg)`; 
        }
        else if (    id == 781 )
        {
        document.body.style.background= `url(Images/${timeOfDay}/tornado.jpg)`; 
        }
        else if (    id == 600 ||
                     id == 601 ||
                     id == 615 ||
                     id == 616 ||
                     id == 620  )
        {
            document.body.style.background= `url(Images/${timeOfDay}/lightSnow.jpg)`; 
        }
        else if (    id == 602 ||
                     id == 621 ||
                     id == 622  )
        {
            document.body.style.background= `url(Images/${timeOfDay}/heavySnow.jpg)`; 
        }
        else if (    id == 801 ||
                     id == 802 ||
                     id == 803 ||
                     id == 804  )
        {
            document.body.style.background= `url(Images/${timeOfDay}/cloudy.jpg)`; 
        }
        else if (   id == 300 ||
                    id == 301 ||
                    id == 302 ||
                    id == 310 ||
                    id == 311 ||
                    id == 312 ||
                    id == 313 ||
                    id == 321 )
        {
            document.body.style.background= `url(Images/${timeOfDay}/drizzle.jpg)`; 
        }
        else if (    id == 611 ||
                     id == 612 ||
                     id == 613  )
        {
            document.body.style.background= `url(Images/${timeOfDay}/lightSleet.jpg)`; 
        }

        document.body.style.backgroundSize = "100% 100%";
        document.querySelector(".title").style.display = 'none';
        setTimeout(function() {
            document.body.classList.remove('fade');
        }, 500);
    },
        
       
};
    
document
.querySelector(".search button")
.addEventListener("click", function() {
    if(document.querySelector(".searchbar").value.length==0)
    alert('Please type in a city name');
    else
    weather.search();
})
document
.querySelector(".searchbar")
.addEventListener("keyup", function(event) {
    if(event.key == "Enter")
    {
        if(document.querySelector(".searchbar").value.length==0)
        alert('Please type in a city name');
        else
        weather.search();
    }
})
  