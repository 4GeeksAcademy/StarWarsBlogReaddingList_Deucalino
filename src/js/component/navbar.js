import React, { useContext } from "react";
import { Context } from "../store/appContext";
import {  useNavigate, Link } from 'react-router-dom';

export const Navbar = () => {
    const { store, actions } = useContext(Context);

    const handleDelete = (index) => {
        actions.deleteFavorite(index);
    };

    return (
        <nav className="navbar navbar-light mb-3">
            <Link to="/">
                <img
                    src="https://i.pinimg.com/564x/4d/23/21/4d2321a780522d49c25b2698a57837c5.jpg"
                    style={{ width: "30vh" }}
                    alt="Star Wars Logo"
                />
            </Link>
            <div className="ml-auto">
                <div className="dropdown">
                    <button
                        className="btn btn-warning dropdown-toggle m-2"
                        type="button"
                        id="dropdownMenuButton"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                    >
                        Favorites {store.favorites.length}
                    </button>
                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                        {store.favorites.map((favorite, index) => (
                            <li key={index} className="d-flex justify-content-between">
                                <span className="dropdown-item-text">{favorite}</span>
                                <button
                                    className="btn btn-danger btn-sm"
                                    onClick={() => handleDelete(index)}
                                >
                                    Remove
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </nav>
    );
};