
import React, {Component} from 'react';
import {  BrowserRouter as Router, Route, Routes, Navigate, Link,  NavLink} from 'react-router-dom';
import Posts from './Posts';
import Home from './Home';
import Contact from './Contact';

class Default extends Component {
    render() {
        return (
            <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <Link className={"navbar-brand"} to="/home"> Landing Page </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarText">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item">
                                <Link className={"nav-link"} to="/home"> Home </Link>
                            </li>
                            <li className="nav-item">
                                <Link className={"nav-link"} to="/posts"> Posts </Link>
                            </li>
                            <li className="nav-item">
                                <Link className={"nav-link"} to="/contact"> Contact </Link>
                            </li>
                        </ul>
                 
                    </div>
                </div>   
            </nav>
                <Routes>
                    <Route path="/home" element={<Home />} />
                    <Route path="/posts" element={<Posts />} />
                    <Route path="/contact" element={<Contact />} />
                   <Route path="/*" element={<Navigate to ="/home" />}/> 
                </Routes>
                <footer className="footer">
                    <div className="container">
                        <h2 className="text-center"><span className="author">Landing Page Created with <i
                                    className="fa fa-heart love"></i> by Adrian Kowalski </span></h2>
                     </div>
                </footer>
        </div>
        )
    }
}

export default Default;