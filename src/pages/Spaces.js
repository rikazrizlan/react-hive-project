import React from 'react';
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import {Link} from 'react-router-dom';
import SpaceContainer from '../components/SpaceContainer';


export default function Spaces() {
    return (
        <div>
            <Hero hero="roomsHero" >
                <Banner title="our spaces">
                    <Link to="/" className="btn-primary">bact to home</Link>
                </Banner>
            </Hero>
            <SpaceContainer />
        </div>
    )
}
