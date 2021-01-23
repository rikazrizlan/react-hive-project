import React, { Component } from 'react';
import Title from '../components/Title';
import {FaWifi, FaCoffee, FaShuttleVan, FaChargingStation, FaClinicMedical, FaMoneyBillAlt, FaDumbbell, FaHamburger} from 'react-icons/fa';

export default class Services extends Component {
    state = {
        services: [
            {
                icon: <FaWifi />,
                title: "Wifi"
            },
            {
                icon: <FaCoffee />,
                title: "Hot coffee"
            },
            {
                icon: <FaShuttleVan />,
                title: "quick transport"
            },
            {
                icon: <FaChargingStation/>,
                title: "charging station"
            },
            {
                icon: <FaClinicMedical/>,
                title: "medical services"
            },
            {
                icon: <FaMoneyBillAlt/>,
                title: "ATM"
            },
            {
                icon: <FaDumbbell/>,
                title: "Gym"
            },
            {
                icon: <FaHamburger/>,
                title: "Food Court"
            }
        ]
    }
    render() {
        return (
            <section id="services" className="services">
                <Title title="services"/>
                <div className="services-center">
                    {this.state.services.map((item, index) => {
                        return <article key={index}>
                            <span>{item.icon}</span>
                            <h6>{item.title}</h6>
                        </article>
                    })}
                </div>
            </section>
        )
    }
}
