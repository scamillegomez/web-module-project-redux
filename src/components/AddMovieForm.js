import React, { useState } from 'react';
import { addMovie } from './../actions/movieActions';
import { connect } from 'react-redux';
import {v4 as uuidv4} from 'uuid';

import { Link, useHistory } from 'react-router-dom';

const AddMovieForm = (props) => {
    const { push } = useHistory();

    const [movie, setMovie] = useState({
        id: Math.floor(Math.random() * 900000) + 100000,
        title: "",
        director: "",
        genre: "",
        metascore: 0,
        description:""
    });

    const handleChange = (e) => {
        setMovie({
            ...movie,
            [e.target.name]: e.target.value
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        props.addMovie(movie);
        push('/movies/');
        console.log(movie);
    }

    const { title, director, genre, metascore, description } = movie;
    return(<div className="col">
        <div className="modal-dialog">
            <div className="modal-content">
                <form onSubmit={handleSubmit}>
                    <div className="modal-header">						
                        <h4 className="modal-title">Add Movie</h4>
                    </div>

                    <div className="modal-body">					
                        <div className="form-group">
                            <label>Title</label>
                            <input value={movie.title} onChange={handleChange} name="title" type="text" className="form-control"/>
                        </div>
                        <div className="form-group">
                            <label>Director</label>
                            <input value={movie.director} onChange={handleChange} name="director" type="text" className="form-control"/>
                        </div>
                        <div className="form-group">
                            <label>Genre</label>
                            <input value={movie.genre} onChange={handleChange} name="genre" type="text" className="form-control"/>
                        </div>
                        <div className="form-group">
                            <label>Metascore</label>
                            <input value={movie.metascore} onChange={handleChange} name="metascore" type="number" className="form-control"/>
                        </div>		
                        <div className="form-group">
                            <label>Description</label>
                            <textarea value={movie.description} onChange={handleChange} name="description" className="form-control"></textarea>
                        </div>
                        			
                    </div>
                    <div className="modal-footer">
                        <input type="submit" className="btn btn-success" value="Add"/>
                        <Link to={`/movies`}><input type="button" className="btn btn-default" value="Cancel"/></Link>
                    </div>
                </form>
            </div>
        </div>
    </div>);
}

const mapStateToProps = state => {
    return{}
}

export default connect(mapStateToProps, {addMovie})(AddMovieForm);