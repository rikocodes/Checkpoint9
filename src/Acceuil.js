import React from 'react';
import {Link} from 'react-router-dom';

function Acceuil(){

    return (<div>
        <h1>This is the home page</h1>
        <div>
            <Link  to="/competence"><h1>go to competence </h1></Link>
        </div>
    </div>)
}
export default Acceuil;