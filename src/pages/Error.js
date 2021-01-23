import React from 'react';
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import {Link} from 'react-router-dom';

export default function Error() {
    return (
        <div>
            <Hero>
                <Banner title="404" subtitle="page not found">
                    <Link className="btn-primary" to="/">back to home</Link>
                </Banner>
            </Hero>
        </div>
    )
}
