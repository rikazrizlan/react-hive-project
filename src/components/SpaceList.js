import React from 'react';
import Space from './Space';

export default function SpaceList({spaces}) {

    if(spaces.length === 0) {
        return (
            <div className="empty-search">
                <h3>unfortunately no spaces matched your search</h3>
            </div>
        )
    }

    return (
        <section className="roomslist">
            <div className="roomslist-center">
                {
                    spaces.map(item => {
                        return (
                            <Space key={item.id} space={item} />
                        )
                    })
                }
            </div>
        </section>
    )
}
