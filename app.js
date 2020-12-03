
var button = document.querySelector('.button');
var inputValue = document.querySelector('.inputValue');
var name = document.querySelector('.name');
var desc = document.querySelector('.desc');
var temp = document.querySelector('.temp');

button.addEventListener('click',function(){
    // const api_proxi = "https://cors-anywhere.herokuapp.com/"
    // fetch(api_proxi+'https://api.openweathermap.org/data/2.5/weather?q='+inputValue.value+'&appid=770cd8ed524c9e764e9d951a33d84ae7')

    // const api_proxi = "https://cors-anywhere.herokuapp.com/"
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+inputValue.value+'&appid=770cd8ed524c9e764e9d951a33d84ae7')

    .then(response => response.json())
    .then(data => {
        var nameValue = data['name'];
        var tempValue = data['main']['temp'];
        var descValue = data['weather'][0]['description'];

        name.innerHTML = nameValue;
        temp.innerHTML = tempValue;
        desc.innerHTML = descValue;

    })

.catch(err => alert("Wrong City Name!"))
})