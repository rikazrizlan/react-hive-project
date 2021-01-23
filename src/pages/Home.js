import React from 'react';
import Hero  from '../components/Hero';
import Banner from '../components/Banner';
import About from '../components/About';
import Services from '../components/Services';
import FeaturedSpaces from '../components/FeaturedSpaces';
import {Link} from 'react-router-dom';


export default function Home() {
    return (
        <div>
            <Hero>
                <Banner title="Co-Working Spaces" subtitle="Convenient and Leisure">
                    <Link className="btn-primary" to="/spaces">our spaces</Link>
                </Banner>
            </Hero>
            <About />
            <Services />
            <FeaturedSpaces />
        </div>
    )
}
