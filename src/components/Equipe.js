import React from 'react';
import kimiaTeam1 from '../img/kimiaTeam1.jpeg'
// import kimiaTeam2 from '../img/kimiaTeam1.jpg'
import kimiaTeam3 from '../img/kimiaTeam3.jpg'

class Equipe extends React.Component{
    render() {
        return(

            <section className="kimiaTeam">

                <article className="titleTeam">

                    <h1>L'EQUIPE</h1>

                </article>

                <article className="teamContent">

                    <div className="teamArticle">

                        <img src={kimiaTeam1} alt=""/> 

                        <div className="teamDescription">
                            <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse saepe magni dolorem perspiciatis necessitatibus dicta alias illum obcaecati ipsum, dolorum deleniti, repudiandae officiis ipsa amet omnis nulla? Explicabo nam quam consequuntur natus quae illum deserunt nulla fugit id libero, tempora excepturi praesentium! Laborum, ea dolorem deserunt neque eligendi voluptatem necessitatibus laudantium, at vel harum expedita magni accusantium excepturi incidunt voluptate perferendis reprehenderit unde officiis quis cum. Maxime delectus ullam, deserunt consequuntur quae nihil accusantium, quasi magni magnam porro similique est!
                            </p>
                        </div>

                    </div>

                    <div className="teamArticle">

                        <img src={kimiaTeam1} alt=""/> 

                        <div className="teamDescription" >
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse saepe magni dolorem perspiciatis necessitatibus dicta alias illum obcaecati ipsum, dolorum deleniti, repudiandae officiis ipsa amet omnis nulla? Explicabo nam quam consequuntur natus quae illum deserunt nulla fugit id libero, tempora excepturi praesentium! Laborum, ea dolorem deserunt neque eligendi voluptatem necessitatibus laudantium, at vel harum expedita magni accusantium excepturi incidunt voluptate perferendis reprehenderit unde officiis quis cum. Maxime delectus ullam, deserunt consequuntur quae nihil accusantium, quasi magni magnam porro similique est!
                            </p>
                        </div>

                    </div>

                    <div className="teamArticle">

                        <img src={kimiaTeam3} alt=""/> 

                        <div className="teamDescription">
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse saepe magni dolorem perspiciatis necessitatibus dicta alias illum obcaecati ipsum, dolorum deleniti, repudiandae officiis ipsa amet omnis nulla? Explicabo nam quam consequuntur natus quae illum deserunt nulla fugit id libero, tempora excepturi praesentium! Laborum, ea dolorem deserunt neque eligendi voluptatem necessitatibus laudantium, at vel harum expedita magni accusantium excepturi incidunt voluptate perferendis reprehenderit unde officiis quis cum. Maxime delectus ullam, deserunt consequuntur quae nihil accusantium, quasi magni magnam porro similique est!
                            </p>
                        </div>
                        
                    </div>

                    <div className="teamFooter">
                        <h3>Nous contacter</h3>
                    </div>

                </article>


            </section>
        )
    }
}

export default Equipe