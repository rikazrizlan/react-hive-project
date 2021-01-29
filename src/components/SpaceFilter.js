import React from 'react';
import {useContext} from 'react';
import {SpaceContext} from '../context';
import Title from './Title';

const getUnique = (items, value) => {
    return [...new Set(items.map(item => item[value]))]
}

export default function SpaceFilter({spaces}) {
    const context = useContext(SpaceContext);

    const {handleChange, type, capacity, maxSize, minSize, ac} = context;

    let types = getUnique(spaces, 'type');
    types = ['all', ...types];

    types = types.map((item, index) => {
        return <option key={index} value={item}>{item}</option>
    })

    let people = getUnique(spaces, 'capacity');
    people = people.map((item, index) => {
        return <option key={index} value={item}>{item}</option>
    })

    return (
        <section className="filter-container">
            <Title title="search spaces" />
            <form className="filter-form">
                <div className="form-group">
                    <label htmlFor="type">space type</label>
                    <select className="form-control size-input" name="type" id="type" value={type} onChange={handleChange}>{types}</select>
                </div>

                <div className="form-group">
                    <label htmlFor="capacity">capacity</label>
                    <select className="form-control size-input" name="capacity" id="capacity" value={capacity} onChange={handleChange}>{people}</select>
                </div>

                <div className="form-group">
                    <label htmlFor="size">space size</label>
                    <div className="size-inputs">
                        <input type="number" name="minSize" id="size" value={minSize} onChange={handleChange} className="size-input" />
                        <input type="number" name="maxSize" id="size" value={maxSize} onChange={handleChange} className="size-input" />
                    </div>
                </div>

                <div className="form-group">
                    <div className="single-extra">
                        <input type="checkbox" name="ac" id="ac" checked={ac} onChange={handleChange} />
                        <label htmlFor="ac">Non AC</label>
                    </div>
                </div>
            </form>
        </section>
    )
}
