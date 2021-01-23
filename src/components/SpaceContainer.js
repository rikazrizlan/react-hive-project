import React from 'react';
import SpaceList from './SpaceList';
import {withSpaceConsumer} from '../context';
import Loading from './Loading';

function SpaceContainer({context}) {
    
    const {loading, sortedSpaces, spaces} = context;

    if(loading) {
        return <Loading />
    }

    return (
        <>
            <SpaceList spaces={sortedSpaces} />
        </>
    )
}

export default withSpaceConsumer(SpaceContainer);
