import React, { useState, useEffect }  from 'react';
const Home = () => {
    // fetch('https://restcountries.com/v3.1/all')
    //     .then(response => response.json())
    //     .then(data => console.log(data));
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
                <ul>
                    {countries.map(item => (
                    <li>
                        {item.name.common} 
                    </li>
                    ))}
                </ul>
            );
        }
    }

// return(
//         <div>
//             <h1>Home Page</h1>
//         </div>
//     );
// }
export default Home;