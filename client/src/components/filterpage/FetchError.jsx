import React from 'react';
import { useNavigate } from 'react-router-dom';

const FetchError = () => {

    const navigate = useNavigate();

    setTimeout(() => {
        navigate("/filterpage2");
    }, 3000);


    return (
        <div>
            <h3> Failed to Fetch </h3>
        </div>
    );
};

export default FetchError;