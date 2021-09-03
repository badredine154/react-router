import React from 'react'
import { useHistory } from 'react-router-dom';

const Home = () => {
    let history = useHistory();
    function handleClick() {
        history.push("/products");
    }
    return (
        <div>
            Welcome
            <button type="button" onClick={handleClick}>
                Go to Movies
            </button>

        </div>
    )
}

export default Home;