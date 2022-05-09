import { useState } from 'react';
import React from 'react';
import StyledHammburger from './Hammburger.styled';
import NavLinks from '../Navlinks/NavLinks';

const Hammburger = () =>{
    // useState for Hammburger function
    const [open, setOpen] = useState(false)
    return(
        <>
            <StyledHammburger open={open} onClick={() => setOpen(!open)}>
                <span />
                <span />
                <span />
            </StyledHammburger>
        <NavLinks open={open}/>
        </>
    )
}

export default Hammburger;