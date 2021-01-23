import React, { Component } from 'react';
import {SpaceContext} from '../context';
import Loading from './Loading';
import Space from './Space';
import Title from './Title';

export default class FeaturedSpaces extends Component {
    static contextType = SpaceContext;
    render() {
        let { loading, featuredSpaces : spaces } = this.context;

        spaces = spaces.map(space => {
            return <Space key={space.id} space={space} />
        });
        
        return (
            <section className="featured-rooms">
                <Title title="featured spaces" />
                <div className="featured-rooms-center">
                    {loading? <Loading /> : spaces}
                </div>
            </section>
        );
    }
}
