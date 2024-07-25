let search = document.querySelector("#search");
let countryname = document.querySelector(".countryname");
let flag = document.querySelector(".flag");
let weather = document.querySelector(".weather");
let temp = document.querySelector(".temp");
let condition = document.querySelector(".condition");
let clouds = document.querySelector(".clouds");
let humindity = document.querySelector(".humindity");
let windSpeed = document.querySelector(".windspeed");
let degree =  document.querySelector(".degree")
 let countryflag = document.querySelector(".countryflag")
 let weatherImage = document.querySelector(".weather")


let findWeather = async () =>{


    
	// let id = "1e04678b65d63d228228aaf8d92a6e79"
    //  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${search.value}&units=metric&`

	let id = "1e04678b65d63d228228aaf8d92a6e79";
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${search.value}&units=metric&appid=${id}`;

    let get =  await fetch(apiUrl)
	let data =  await get.json();



	
   if(data.cod == 200){

	countryflag.src=`https://flagsapi.com/${data.sys.country}/flat/32.png`

	countryname.innerText = data.name;
	temp.innerText = Math.floor(data.main.temp) +`${degree.innerText}°C`
    humindity.innerText = data.main.humidity +`%`
	windSpeed.innerText = `${Math.floor(data.wind.speed)} m/s`
	clouds.innerText = `${data.clouds.all}%`
    condition.innerText = data.weather[0].description
	
    weatherImage.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@4x.png`
	

	console.log(data)


}else{

	  Swal.fire("Value is not found or input is empty!");
}



search.value = ""


}


	


window.addEventListener("keypress", (e)=>{
	if(e.key == "Enter"){
		findWeather()
	}
})

const city = () =>{
   search.value = "Karachi"

 findWeather()



}


city()

search.value = ""

















// https://openweathermap.org/img/wn/10d@2x.png
































