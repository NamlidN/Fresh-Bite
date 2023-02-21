import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Nomatch = () => {

    const navigate = useNavigate();

    /*   useEffect(() => {
  
      }, []); */

    setTimeout(() => {
        navigate("/filterpage2");
    }, 3000);


    return (
        <div>
            <h2> No filter matched </h2>
            <p>You will be returned to the FilterPage</p>
        </div>
    );
};

export default Nomatch;