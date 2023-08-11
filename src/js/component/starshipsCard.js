import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const StarshipsCard = (props) => {
    const { store, actions } = useContext(Context);
    const [imageError, setImageError] = useState(false);

    const handleImageError = () => {
        setImageError(true);
    };

	return (
        
            <div className="card p-0 m-3" style={{width: "17rem"}}>
                <img
                    className="card-img-top"
                    onError={handleImageError}
                    src={imageError ? 
                        "https://static.vecteezy.com/system/resources/previews/009/007/134/original/failed-to-load-page-concept-illustration-flat-design-eps10-modern-graphic-element-for-landing-page-empty-state-ui-infographic-icon-vector.jpg" : 
                        `https://starwars-visualguide.com/assets/img/starships/${props.entities.uid}.jpg`}
                    alt={`Image of ${props.entities.name}`}
                />
                <div className="card-body ">
                        <h5 className="card-title">{props.entities.name}</h5>
                    <div className="container d-flex row">
                        <div >
                            <p className="m-0">Model: {props.entities.model}</p>
                            <p className="m-0">Manufacturer: {props.entities.manufacturer}</p>
                        </div>
                        <div  className="d-flex justify-content-between mt-5">
                            <Link to={"/details/" + props.entity + "/" + props.entities.uid}>
                                <button className="btn btn-outline-primary" data-toggle="button" aria-pressed="false" >Learn more!</button>
                            </Link>
                                <button className="btn btn-outline-warning " data-toggle="button" aria-pressed="false" onClick={() => { actions.addFavorites(props.entities.name) }}>
                                <i className={`far fa-heart ${store.favorites.includes(props.entities.name) ? 'fas fa-heart' : ''}`} ></i></button>
                        </div>                    
                    </div>
                </div>
            </div>
	);
};