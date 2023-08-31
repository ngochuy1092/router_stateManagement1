import {Link} from 'react-router-dom'
import { useState } from 'react';
export const Navbar=()=> {
    
    return (
        <div>
            <Link to="/home">Home</Link>
            <Link to="/menu">Menu</Link>
            <Link to="/contact"> Contact</Link>
        </div>
    )
}