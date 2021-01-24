import React, { Component } from 'react';
import defaultBcg from '../images/about.jpg';
import Banner from '../components/Banner';
import {Link} from 'react-router-dom';
import {SpaceContext} from '../context';
import StyledHero from '../components/StyledHero';


export default class SingleSpace extends Component {
    constructor(props) {
        super(props);
        this.state = {
            slug: this.props.match.params.slug,
            defaultBcg
        };
    }

    static contextType = SpaceContext;

    render() {
        const {getSpace} = this.context;
        const space = getSpace(this.state.slug);

        if(!space) {
            return(
                <div className="error">
                    <h3>space not found</h3>
                    <Link to="/spaces" className="btn-primary">back to spaces</Link>
                </div>
            );
        }
        const {name, description, capacity, size, extras, ac, images} = space;

        const styles ={
            color: "black"
        }

        return (
            <div>
                <StyledHero img={images[0] || this.state.defaultBcg}>
                    <Banner title={`${name}`}>
                        <Link to="/spaces" className="btn-primary">back to spaces</Link>
                    </Banner>
                </StyledHero>
                <section className="single-room">
                    <div className="single-room-info">
                        <article className="desc">
                            <h3 style={{color:"black"}}>details</h3>
                            <p style={{color:"black"}}>{description}</p>
                        </article>
                    </div>
                    <h3 style={{color:"black", textAlign:"center"}}>Some Snaps</h3>
                    <div className="single-room-images">
                        {images.map((item, index) => {
                            return (
                                <div className="img-container">
                                    <img src={item} key={index} alt={name} />
                                </div>
                            );
                        })}
                    </div>
                    <article className="info">
                        <h3 style={styles}>info</h3>
                        <h6 style={styles}>size: {size} SQFT</h6>
                        <h6 style={styles}>
                            max capacity : {
                                capacity > 1? `${capacity} people` : `${capacity} person`
                            }
                        </h6>
                        <h6 style={styles}>
                            {ac? "air conditioned" : "no air conditioner"}
                        </h6>
                    </article>
                </section>
                <section className="room-extras">
                    <h6 style={styles}>extras</h6>
                    <ul className="extras">
                        {extras.map((item,index) => {
                            return <li style={styles} key={index}>{item}</li>
                        })}
                    </ul>
                </section>
            </div>
        )
    }
}
