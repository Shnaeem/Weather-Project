import axios from 'axios';
import dotenv from 'dotenv';
import { async } from 'q';
dotenv.config();

const BASE_URL = process.env.BASE_URL;
const API_KEY = process.env.API_KEY;
const cityName = document.getElementById('city')
const getTempData = document.getElementById('getTemp')
//const form = document.querySelector('form');

getTempData.addEventListener("click",(e)=>{
    e.preventDefault();
    let city =cityName.value.toLowerCase()
    let url = `${BASE_URL}/data/2.5/weather?q=${city}&APPID=${API_KEY}&units=imperial`

    axios.get(url)
        .then( (response) =>{
       //console.log(response);
            let tempoutput = document.querySelector('.tem');
            tempoutput.innerHTML= `The temperature in ${city}, ${response.data.sys.country} is ${Math.round(response.data.main.temp)} °F`
            // handle success

        })
        .catch( (error)=> {
            // handle error
            let tempoutputError = document.querySelector('.tem');
            tempoutputError.innerHTML= `Please retype your city `
            //console.log(error);
        })


        })

