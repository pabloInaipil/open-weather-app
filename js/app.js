let weather = { 
    "apiKey": '8a237d1367e8c0ce3536c82468fa568f',
    fetchWeather: function () { 
        fetch( 
            "https://api.openweathermap.org/data/2.5/weather?q=Temuco&appid=8a237d1367e8c0ce3536c82468fa568f"
            ).then((response) => response.json())
             .then((data) => console.log(data));

            
    }
}