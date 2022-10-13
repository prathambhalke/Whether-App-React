import React, { useEffect, useState } from "react";
const Whether = () => {
  const [city, setcity] = useState("...loading");
  const [search, setsearch] = useState("mumbai");

  useEffect(() => {
    const fetchAPI = async () => {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=1fe55f27829afc97ea60a0f3b1978686`;
      const response = await fetch(url);
      const resJSON = await response.json();
      setcity(resJSON.main);
    };
    fetchAPI();
  }, [search]);

  return (
    <>
      <div>
        <h1>Whether App</h1>
        <i className="fa-solid fa-sun icons"></i>
        <i className="fa-solid fa-wind icons"></i>
        <i className="fa-solid fa-umbrella icons"></i>
      </div>

      <div className="main-container ">
        <div>
          <input
            className="input"
            type="search"
            placeholder="Search the City"
            value={search}
            onChange={(e) => {
              setsearch(e.target.value);
              setcity(search);
            }}
          />
        </div>

        {!city ? (
          <>
            <i className="fa-solid fa-cloud-sun-rain"></i>
            <p>Search the City</p>
          </>
        ) : (
          <div className="show ">
            <i className="fa-solid fa-street-view"></i>
            <span className="cityname">{search}</span>
            <h3 className="citytemp">{city.temp}°cel</h3>
            <br />
            <hr />
            <br />

            <i className="fa-solid fa-sun"></i>

            <h4 className="citycel">
              Min ${city.temp_max} : Max ${city.temp_min}°cel
            </h4>
          </div>
        )}
      </div>
    </>
  );
};
export default Whether;
