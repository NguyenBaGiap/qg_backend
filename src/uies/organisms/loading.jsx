import * as React from 'react';

function Loading(props){
    const { visible } = props;
    return visible === true ? (
        <div>
            Loading..................
        </div>
    ) : null;
}

export default Loading
