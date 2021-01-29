import React from 'react';
import SpaceList from './SpaceList';
import {withSpaceConsumer} from '../context';
import Loading from './Loading';
import SpaceFilter from './SpaceFilter';

function SpaceContainer({context}) {
    
    const {loading, sortedSpaces, spaces} = context;

    if(loading) {
        return <Loading />
    }

    return (
        <>
            <SpaceFilter spaces={spaces} />
            <SpaceList spaces={sortedSpaces} />
        </>
    )
}

export default withSpaceConsumer(SpaceContainer);
