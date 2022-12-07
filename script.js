const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'f6a1eaff2bmshcb63e804d61d72cp164a69jsn0914baeec568',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};

let getWeather = (city)=>{
	cityName.innerHTML = city;
	fetch(`https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=${city}`, options)
	.then(response => response.json())
	.then((response) =>{
		temp2.innerHTML = response.temp;
		maxTemp.innerHTML = response.max_temp;
		minTemp.innerHTML = response.min_temp;
		feelsLike.innerHTML = response.feels_like;
		feelsLike2.innerHTML = response.feels_like;
		humid2.innerHTML = response.humidity;
		cloudPCT.innerHTML = response.cloud_pct;
		cloudPCT2.innerHTML = response.cloud_pct;
		sunRise.innerHTML = response.sunrise;
		sunSet.innerHTML = response.sunset;
		wind2.innerHTML = response.wind_speed;
		windDegree.innerHTML = response.wind_degrees;
		
		console.log(response)
	})
	.catch(err => console.error(err));
}

submit.addEventListener('click',(e)=>{
	e.preventDefault();
	getWeather(citySearch.value)
})

getWeather('Delhi');