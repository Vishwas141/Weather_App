import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Wea from "./Wea";

const Home = () => {
  const [city, setCity] = useState("");

  const [advice, setAdvice] = useState("");

  const [temp,setTemp]=useState("");

  const [active,setActive]=useState(0);


  const [tempData,settempData]=useState({
     locationcity:" ",
     currentConditiontemp:" ",
     text:"",
     currentCloud:" ",  
  })
  

    const fetchData = async () => {
      try {
        
        console.log(city);
        setActive(0);
        const url = `http://api.weatherapi.com/v1/current.json?key=2ad93c6c55d64782bc564551232106&q=${city}&days=10&lang=hi`;
        setActive(1);
        const response = await fetch(url);
        const json = await response.json();
        console.log(json);
        
        
        settempData({
          cloud:json.current.cloud,
          temp:json.current.temp_c,
          city:json.location.name,
          text:json.current.condition.text,
        })
      
      } catch (error) 
      {
        
        console.log("you entered wrong city .please enter valid Name");
      }
    };



  const handleCityChange = (event) =>
  {
    setActive(0);
    setCity(event.target.value);
    if(event.target.value===" ")
    {
         setCity("Satara");
    }

    console.log(city);
  };

  return (
    <div className="w-screen min-h-screen text-white bg-richblack-800 flex flex-col gap-5 justify-center items-center" id="nature">
      <h2 className="text-4xl font-bold text-center">
        Know The <span className="text-yellow-100">Weather Of Your City ..</span>
      </h2>

      <div className="flex flex-col justify-center items-center gap-5 h-[200px]">
        <div className="text-3xl text-richblack-200">Enter the city</div>
        <input
          type="text"
          name="name"
          className="bg-richblack-100 border text-black border-richblack-800 w-[350px] h-[30px] rounded-md"
          onChange={handleCityChange}
        />
      </div>

    
        <button className="bg-yellow-200 object-fit py-2 px-4 rounded-md text-richblack-700 font-semibold" onClick={()=>{

           
            fetchData();
           
        }}>
          Let's check it
        </button>


        <div className="text-yellow-100 text-4xl ">
            {
              active===1 ? < Wea tempData={tempData} city={city}></Wea>:" "
            }
        </div>



       

    </div>
  );
};

export default Home;
