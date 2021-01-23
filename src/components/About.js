import React from 'react';
import Title from '../components/Title';
import ourSpace from '../images/about.jpg';

export default function About() {
    return (
        <section className="about" id="about">
            <Title title="about" />
            <div className="about-center">
                <img className="fit-bg" src={ourSpace} alt="Our Space" />
                <p>We envision an economy fueled by innovators reshaping the way we work and live. At hive, we’re determined to provide you with all the services you might need to innovate, grow and succeed. We welcome deep-thinkers, innovators and mischief-makers of all shapes and sizes to brush shoulders and inspire each other to stand tall together with the world at large. We are building a tribe of smart, sassy and fun entrepreneurs to take on the next big challenge and make Sri Lanka the hub of innovation in Asia. Join us for the hive experience.</p>
            </div>
        </section>
    )
}
