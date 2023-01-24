const Country = ({countryInfo}) => {

    return (

      
        <form className="countryForm">
          {/* <h2 className="country_title">{countryInfo.name.common}</h2> */}
          <input type="radio" id={countryInfo.id} name="countrySelected"/>
          <label htmlFor={countryInfo.id}>{countryInfo.name.common}</label>
        </form>
    )
}

export default Country;