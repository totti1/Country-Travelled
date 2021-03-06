import React, { useState, useEffect }  from 'react';
import { ImageIconCard, ToggleDrawer, SearchInputIcon, SelectInput } from '../components';

const Home = () => {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [countries, setUsers] = useState([]);
    useEffect(() => {
        fetch("https://restcountries.com/v3.1/all")
            .then(res => res.json())
            .then(
                (data) => {
                    setIsLoaded(true);
                    setUsers(data);
                },
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            )
    }, [])
    if (error) {
        return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
        return <div>Loading...</div>;
    } else {
        return (
            <div>
                <ToggleDrawer>

                    <div class="row">
                        <div class="col">
                            <SearchInputIcon />
                        </div>
                        <div class="col">
                            <SelectInput />
                        </div>
                    </div>
                    
                    <div class="row">
                        {countries.map(item => (
                                <div class="col">
                                    <ImageIconCard 
                                        cardImg={item.flags.png}
                                        imgAlt={item.name.common}
                                        countryName={item.name.official}
                                        population={item.population}
                                        capital={item.capital}
                                    />
                            </div>
                        ))}
                    </div>
                </ToggleDrawer>
            </div>
        );
    }
}

export default Home;