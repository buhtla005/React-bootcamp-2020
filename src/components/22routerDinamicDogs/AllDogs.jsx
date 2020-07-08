import React from 'react'
import { Link } from 'react-router-dom'
import './DogList.css'

const AllDogs = ({dogs}) => {

    return (
        <div className="dog-body">
            <h1 className="display-1 text-center mt-3 mb-5">Dog list!</h1>
            <div className="row">
            {
                dogs.map((d,id) => (
                
                    <div key={id} className="Dog col-lg-4 text-center">
                        <img src={d.img} alt="dog-img"/>
                        <div className="dog-desc">
                            <h3 className="mt-3">
                                <Link className="underline" to={`/dogs/${d.name}`}>
                                    {d.name}, {d.age}
                                </Link>
                            
                            </h3>
                            <div>
                                <h4>Facts:</h4>
                                <ul>
                                {
                                    d.facts.map((f,id) => (
                                    <li key={id}>{f}</li>
                                    ))
                                }
                                </ul>
                            </div>
                        </div>
                    </div>
                ))
            }
            </div>
        </div>

    )
}

export default AllDogs