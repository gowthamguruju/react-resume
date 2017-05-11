import React from 'react';
import {Link} from 'react-router'

export default React.createClass({
 render(){
     return (
         <div className='headerAlign'>
            <ul>
                <li><a href="/" activeClassName="active">Home</a></li>
                <li><a href="/Contact" activeClassName="active">About</a></li>
                <li><a href="/About" activeClassName="active">Contact</a></li>
            </ul>
        </div>
     )
    }
})