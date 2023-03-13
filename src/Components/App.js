import React, { useState, useEffect } from "react";
import axios from "axios";
import Table from "./Table";
import Matches from "./Matches";

const App = () => {
    const [countries, setCountries] = useState([])
    const [filterCountry, setFilterCountry] = useState('')
    const [filterCity, setFilterCity] = useState('')

    useEffect(() => {
        axios
            .get('https://countriesnow.space/api/v0.1/countries/population/cities')
            .then(response => {
                //console.log(response.data.data[0].populationCounts[0].value)
                setCountries(response.data.data)

            }
            )
    }, [])

    const handleFilterCountryChange = (event) => {
        //console.log(event.target.value)
        setFilterCountry(event.target.value)
    }

    const handleFilterCityChange = (event) => {
        //console.log(event.target.value)
        setFilterCity(event.target.value)
    }

    const filteredData = (() => {
        if (filterCountry.length === 0) {
            console.log(1)
            return (
                countries.filter((country) =>
                    country.city.toLowerCase().includes(filterCity.toLowerCase()))
            )
        }
        else if (filterCountry.length > 0) {
            const special = countries.filter((country) =>
                country.country.toLowerCase().includes(filterCountry.toLowerCase()))
            if (filterCity.length > 0) {
                return (
                    special.filter((s) =>
                        s.city.toLowerCase().includes(filterCity.toLowerCase()))
                )
            }
            else {
                return special
            }
        }

    })()

    return (
        //console.log(countries),
        <div>
            <form>
                <p>
                    country: <input value={filterCountry} onChange={handleFilterCountryChange} />
                </p>
                <p>
                    city: <input value={filterCity} onChange={handleFilterCityChange} />
                </p>
            </form>
            <div>
                <Matches filteredData={filteredData} />
            </div>
            <Table filteredData={filteredData} />
        </div>


    )
}

export default App