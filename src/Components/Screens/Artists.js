import React from 'react'
import { Link } from 'react-router-dom';

const Artists = (props) => {
    if(!props.artist) return null;
    const {id, name, genres, images, followers, popularity} = props.artist;

    return (
        <div className="row">
            <div className="col-md-6 offset-md-3">
                <div className="card">
                    <img src={images[0].url} alt={props.name} className="card-img-top img-fluid" />
                    <div className="card-body">
                        <h3 className="text-center text-info"> {name} </h3>
                        <ul className="list-group">
                            <li className="list-group-item">
                                Generes
                                <span className="float-right">{genres}</span> 
                            </li>
                            <li className="list-group-item">
                                Followers
                                <span className="float-right">{followers.total}</span> 
                            </li>
                            <li className="list-group-item">
                                Popularity
                                <span className="float-right">{popularity}</span> 
                            </li>
                        </ul>
                    </div>
                    <div className="card-footer">
                        <Link to={"/tracks/"+ id} className="btn btn-outline-info">Show Tracks</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Artists
