import React from 'react'
import { Link, Route } from 'react-router-dom'
import Movie from './Movie'

function Movies({ match }) {
    const MoviesData = [
        {
            id: 1,
            name: 'The Suicide Squad',
            description: 'Supervillains Harley Quinn, Bloodsport, Peacemaker and a collection of nutty cons at Belle Reve prison join the super-secret, super-shady Task Force X as they are dropped off at the remote, enemy-infused island of Corto Maltese.',
            image: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/eoXvfSzosBJk5srQovOdFkthFUF.jpg',
            trailer: 'https://www.youtube.com/embed/A8tWKJwyG6Y'

        },
        {
            id: 2,
            name: 'The Tomorrow War',
            description: 'The world is stunned when a group of time travelers arrive from the year 2051 to deliver an urgent message: Thirty years in the future, mankind is losing a global war against a deadly alien species. The only hope for survival is for soldiers and civilians from the present to be transported to the future and join the fight. Among those recruited is high school teacher and family man Dan Forester. Determined to save the world for his young daughter, Dan teams up with a brilliant scientist and his estranged father in a desperate quest to rewrite the fate of the planet.',
            image: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/xipF6XqfSYV8DxLqfLN6aWlwuRp.jpg',
            trailer: 'https://www.youtube.com/embed/Ob4NC4D6zTU'

        },
        {
            id: 3,
            name: 'Black Widow',
            description: 'Natasha Romanoff, also known as Black Widow, confronts the darker parts of her ledger when a dangerous conspiracy with ties to her past arises. Pursued by a force that will stop at nothing to bring her down, Natasha must deal with her history as a spy and the broken relationships left in her wake long before she became an Avenger.',
            image: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/ytnhzdwtj0YfC5NVWrrPRGSGZb7.jpg',
            trailer: 'https://www.youtube.com/embed/RxAtuMu_ph4'
        },
        {
            id: 4,
            name: 'Jungle Cruise',
            description: 'Dr. Lily Houghton enlists the aid of wisecracking skipper Frank Wolff to take her down the Amazon in his dilapidated boat. Together, they search for an ancient tree that holds the power to heal – a discovery that will change the future of medicine.',
            image: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/9dKCd55IuTT5QRs989m9Qlb7d2B.jpg',
            trailer: 'https://www.youtube.com/embed/ydnzilTiBcY'

        }]
    return (
        <div>

            <div class="container">
                <div class="row">
                    {MoviesData.map((item, index) => (
                        <div class="col-sm">
                            <Link to={`${match.url}/${item.id}`}><img src={item.image} width="150" height="250"></img></Link>
                        </div>

                    ))}
                </div>
            </div>



            <Route path={`${match.url}/:MovieId`}
                render={(props) => <Movie data={MoviesData} {...props} />} />
        </div>
    )
}

export default Movies
