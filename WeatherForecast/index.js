const express = require("express");
const https = require("https");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.urlencoded({extended:true}));
app.listen(4000);

app.get("/", function (req, res) {
            
            res.sendFile(__dirname + "/weather.html");
            
            
        
         });

app.post("/", function(req, res){
    var city_Name = "London";
            city_Name = req.body.cityName;
            var api_key = ""; //Enter your api key
            const url = "https://api.openweathermap.org/data/2.5/weather?q=" + city_Name + "&appid=" + api_key + "&units=metric";
            https.get(url, function (response) {
                console.log(response.statusCode);
               
                response.on("data", function (data) {
                    const weatherData = JSON.parse(data);
                    const temp = weatherData.main.temp;
                    const weatherDescription = weatherData.weather[0].description;
                    const icon = weatherData.weather[0].icon;
                    console.log(icon);
                    const image_URL = "http://openweathermap.org/img/wn/" + icon + "@2x.png";
                    console.log(`Temperature is ${temp} degree Celsius and feels ${weatherDescription} .`);
                    res.write(`<h1>Temperature is ${temp} degree Celsius and feels ${weatherDescription} .</h1>`)
                    res.write("<img src=" + image_URL + ">");
                    
                });
            });

});


