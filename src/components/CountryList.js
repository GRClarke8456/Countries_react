import Country from "./Country"
import CountryContainer from "../containers/CountryContainer"

const CountryList = ({countries}) => {
    
    let mappedCountries = countries.map((country, id) => {
        return <Country countryInfo={country} key={id}/>
    })


    return(
        <section className="countryListContainer">
            <div className="countryCardContainer">
                {mappedCountries}
            </div>
        </section>
    )

}

export default CountryList;