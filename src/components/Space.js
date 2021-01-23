import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';

export default function Space({space}) {
    const {name, slug, images} = space;
    return (
        <article className="room">
            <div className="img-container">
                <img src={images[0]} alt="single space" />
                <Link to={`/spaces/${slug}`}  className="btn-primary room-link">Features</Link>
            </div>
            <p className="room-info">{name}</p>
        </article>
    )
}

Space.propTypes = {
    space:PropTypes.shape({
        name:PropTypes.string.isRequired,
        slug:PropTypes.string.isRequired,
        images:PropTypes.arrayOf(PropTypes.string).isRequired
    })
};
