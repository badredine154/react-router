import React from 'react'

function Movie({ match, data }) {

    let Movie = data.find(p => p.id == match.params.MovieId);
    let MovieData;


    MovieData = <div>
        <h3> {Movie.name} </h3>
        <p>{Movie.description}</p>
        <iframe width="1280" height="720" src={Movie.trailer}
            title="YouTube video player" frameborder="0" allow="accelerometer; autoplay;
            clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>

    return (
        <div>
            <div>
                {MovieData}
            </div>
        </div>

    )
}

export default Movie
