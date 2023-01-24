import CountryList from "../components/CountryList";
import { useEffect, useState } from "react";

const CountryContainer = () => {

    const [countries, setCountries] = useState("");

    useEffect(() => {
        fetch("https://restcountries.com/v3.1/all")
        .then(response => response.json())
        .then(data => setCountries(data))
    },[])

    return (
        countries ? <CountryList countries = {countries}/> : <p>Loading country...</p>
        // <CountryList countries={countries}/>
    )

}

export default CountryContainer;