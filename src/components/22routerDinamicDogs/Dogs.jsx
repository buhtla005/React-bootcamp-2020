import React from 'react'

const AllDogs = ({dogs}) => {

    return (
        <div className="dog-body">
            {
                dogs.map(d => (
                
                    <div className="dog-content">
                        <img src={d.img} alt="dog-img"/>
                        <div className="dog-desc">
                            <h3>{d.name}, {d.age}</h3>
                            <div>
                                <h4>Facts:</h4>
                                <ol>
                                {
                                    d.facts.map((f,id) => (
                                    <li key={id}>{f}</li>
                                    ))
                                }
                                </ol>
                            </div>
                        </div>
                    </div>

                ))

            }
        </div>

    )
}

export default AllDogs