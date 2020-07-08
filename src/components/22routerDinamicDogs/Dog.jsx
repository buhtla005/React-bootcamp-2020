import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Dog extends Component{

    render(){
        let {dog} = this.props
        console.log(dog)
        return (
            <div className="container">
                <div className="DogDetails row justify-content-center">
                    <div className="col-11 col-lg-5">
                        <div className="DogDetails-card card">
                            <img className="card-img-top" src={dog.img} alt={dog.name}/>
                            <div className="card-body">
                                <h2 className="card-title">{dog.name}</h2>
                                <h4 className="card-subtitle text-muted">
                                    {dog.age} years old
                                </h4>
                            </div>
                            <ul className="list-group list-group-flush">
                                {
                                    dog.facts.map((fact,id) => (
                                        <li className="list-group list-group-item" key={id}>
                                            {fact}
                                        </li>
                                    ))
                                }
                            </ul>
                            <div className="card-body">
                                <Link to="/dogs" className="btn btn-info"> GO BACK </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Dog