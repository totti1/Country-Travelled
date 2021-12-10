import React from 'react';
import {
  BrowserRouter,
  Route,
  Routes
} from "react-router-dom";
import { Home, Profile } from '../pages';

const MyPages = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element= {<Home/>} />
                <Route path = "/single-country-page" element = {<Profile/>} />
            </Routes>
        </BrowserRouter>
    );
};
export default MyPages;