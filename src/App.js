import axios from 'axios';
import React, { useState } from 'react';

let App = () => {
  const [text, setText] = useState("")
  const [movie, setMovie] = useState([])

  const changeText = (event) => {
    setText(event.target.value)
  }

  const getMovie = (e) => {
    e.preventDefault();
    axios.get(`https://www.omdbapi.com/?s=${text}&apikey=aa58ad89`)
      .then((response) => {
        console.log(response.data.Search);
        setMovie(response.data.Search)
      })
  }
  return (
    <>
      <div className="main">
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <a className="navbar-brand" href="#">Movie App</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
              </li>


            </ul>
            <form className="form-inline my-2 my-lg-0" onSubmit={getMovie}>
              <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" value={text} onChange={changeText} />

              <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
            </form>
          </div>
        </nav>
      </div>
      <div className="container my-3">
        <div className="row">
          {
            movie.map((value, index) => {
              return (
                <div className="col-3 m-3">

                  <div className="card" style={{ width: "18rem" }}>
                    <img src={value.Poster} className="card-img-top" alt="..."  />
                    <div className="card-body">
                      <h3 className="card-title">{value.Year}</h3>
                      <h4 className="card-text">{value.Title}</h4>
                      
                    </div>
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>
    </>

  )
}

export default App;

