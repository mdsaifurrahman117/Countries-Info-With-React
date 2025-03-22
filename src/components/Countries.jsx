import React, { useEffect, useState } from 'react'
import Country from './Country';
import './Countries.css';

function Countries() {
            
            const [countries, Set_countries] = useState([]);
            const [visited_countries, set_visited_countries] = useState([]);

            useEffect(() => {
                        fetch("https://restcountries.com/v3.1/all")
                                    .then(response => response.json())
                                    .then(data => Set_countries(data));
            });

            const handle_visited_country = (country) => {
                        const new_visited_countries = [...visited_countries, country];
                        set_visited_countries(new_visited_countries);
            }
            
            return (
                        <>
                                    <h3>countries : {countries.length}</h3>
                                    <div>
                                                <h3>visited countries</h3>
                                                <ul>
                                                            {
                                                                        visited_countries.map(country => 
                                                                                    <li key={country.cca3}>
                                                                                                {country.name.common}
                                                                                    </li>
                                                                        )
                                                            }
                                                </ul>
                                    </div>
                                    <div className="countries_container">
                                                {
                                                            countries.map(country =>
                                                                        <Country
                                                                                    key={country.cca3}
                                                                                    country={country}
                                                                                    handle_visited_country={handle_visited_country}>
                                                                        </Country>
                                                            )
                                                }
                                    </div>
                        </>
            );
};

export default Countries
