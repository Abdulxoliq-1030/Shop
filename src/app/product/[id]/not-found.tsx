import React from 'react';

interface NotFoundProps { }

const NotFound: React.FC<NotFoundProps> = () => {

    return (
        <div className="mt-24">
            <h2>Not found</h2>
            <p>Could not find requested resource</p>
        </div>
    )
}

export default NotFound;