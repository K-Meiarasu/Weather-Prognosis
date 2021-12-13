function check(){
    const apiKey = "23fbb5343b6f03bd96229757d231ab03";
    var city_name= document.getElementById("city").value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city_name}&appid=${apiKey}&units=metric`;
    fetch(url)
    .then(response => response.json())
    .then(data => {
        document.getElementById('degree').innerHTML=(data['main']['temp']  )+' deg C';
    })
    .catch(err => document.getElementById('degree').innerHTML="Enter valid city name..");
}
