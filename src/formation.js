import React from 'react';

import {Link} from 'react-router-dom';

function Formation (){

    return(<div>
        <h>this the second page</h>
        <Link to="/competence"><h1>go to competence</h1></Link>
    </div>)
}

export default Formation;