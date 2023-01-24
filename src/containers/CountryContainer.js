import Country from "../components/Country";
import { useEffect, useState } from "react";

const CountryContainer = () => {

    const [countries, setCountries] = useState(null);

    useEffect(() => {
        fetch("https://restcountries.com/v3.1/all")
        .then(response => response.json())
        .then(data => setCountries(data))
    },[])

    return (
        // country ? <Country country = {country}/> : <p>Loading country...</p>
        <CountryList countries={countries}/>
    )

}

export default CountryContainer;