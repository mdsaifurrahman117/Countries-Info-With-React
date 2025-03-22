import React, { useState } from 'react'
import 'remixicon/fonts/remixicon.css'
import './Country.css';

function Country({ country, handle_visited_country }) {

            const { name, flags, capital } = country;
            const [visited, set_visited] = useState(false);

            const handle_visited = () => {
                        set_visited(!visited);
            }
            
            return (
                        <div className={`country ${visited ? "visited" : ""}`}>
                                    <img src={flags.png} alt="country flag" />
                                    <h3>country name : {name.common}</h3>
                                    <h3>official name : {name.official}</h3>
                                    <h3>capital city : {capital}</h3>
                                    <div style={{ display: "flex", gap: "10px" }}>
                                                <button onClick={() => { handle_visited() }}>
                                                            <i className="ri-eye-line"></i>
                                                            <span>visited</span>
                                                </button>
                                                <button onClick={() => { handle_visited_country(country) }}>
                                                            <i className="ri-bookmark-line"></i>
                                                            <span>mark</span>
                                                </button>
                                    </div>
                                    {
                                                visited ? <p>i have visited this country</p> : ""
                                    }
                        </div>
            )
}

export default Country
