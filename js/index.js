$(document).ready(function(){
  var apikey="ddb24233a28e95ab01e20420abb44ea7";
  var loc;
  var Longitude;
  var Latitude;
    /* Exact Location */
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
    Latitude=position.coords.latitude;
    Longitude=position.coords.longitude;

  /* END */

            $.get('http://api.openweathermap.org/data/2.5/weather?lat='+Longitude+'&lon='+Latitude+'&units=metric'+'&appid='+apikey,function(wd){
                      console.log(wd);
              var currentLocation=wd.name;
              var currentWeather= wd.weather[0].description;
              var currentTemp=wd.main.temp;
              var country=wd.sys.country;
              var high=wd.main.temp_max;
              var low=wd.main.temp_min;
              var Fahrenheit=(currentTemp*1.8)+32;
              var highf=high*1.8+32;
              var lowf=low*1.8+32;
              var windSpeed=wd.wind.speed;
              $('#location').html(currentLocation+" , "+country);
              /* temprature logic*/
              $('#temp').html("<a><h3 id='celsius'>Temperature : " + currentTemp + "&deg;C</h3><h3 id='fahrenheit'>Temperature : " + Fahrenheit +"&deg;F</h3><h3 id='high-low'>MAX/MIN :"+high+"&deg;C /"+low+" &deg;C</h3><h3 id='high-lowf'>MAX/MIN :"+highf+"&deg;F /"+lowf+" &deg;F</h3></a>");
              $("#fahrenheit").toggle();
              $("#high-lowf").toggle();
        $("#temp").click(function() {
            $("#fahrenheit").toggle();
            $("#celsius").toggle();
            $("#high-low").toggle();
            $("#high-lowf").toggle();
        });
              /*----END -----*/
              $('#weather').html(currentWeather);
              $('#high-low').html(high+" / "+low);
              $('#Fahrenhiet').html(Fahrenheit);
              $('#high-lowf').html(highf+" / "+lowf);
              $('#windSpeed').html(windSpeed+" km/h");
              var icon=wd.weather[0].icon;
              var iconSrc="http://openweathermap.org/img/w/"+icon+".png";
              $('#weather').prepend('<img src="'+iconSrc+'"/>');
            },'jsonp');
    console.log(Longitude);});}
else { 
        x.innerHTML = "Geolocation is not supported by this browser.";
    }
});