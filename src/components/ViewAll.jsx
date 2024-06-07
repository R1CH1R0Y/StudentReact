import React, { useState } from 'react'
import NavBar from './NavBar'

const ViewAll = () => {
    const [data,changeData]=useState(
        [
            {"Name":"Ajay","Admn":101,"Roll":1},
            {"Name":"Lenex","Admn":102,"Roll":2},
            {"Name":"Athul","Admn":103,"Roll":3}
        ]
    )
    return (
        <div>
            <NavBar/>
             <br />
            <div class="card text-center mb-3">
                <div class="card-body">
                    <h5 class="card-title">Student List</h5>
                    <p></p>
                    <p></p>
                    <div className="container">
                        <div className="row">
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <div className="row g-3">
                                    {data.map(
                                        (value,index)=>{
                                            return <div className="col col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3">
                                            <div className="card mb-3">
                                                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6oC0cLNyFt4XMtPNe35Tct-8iicsxnDi--fghnv05pczTghd04zc3wR9ATttVVHswLX4&usqp=CAU" className="card-img-top" alt="..."></img>
                                                        <div className="card-body">
                                                            <p className="card-text"><b>NAME : {value.Name}</b></p>
                                                            <p className="card-text"><b>ADMISSION NO : {value.Admn}</b></p>
                                                            <p className="card-text"><b>ROLL NO : {value.Roll}</b></p>
                                                        </div>
                                            </div>
                                            </div>
                                        }
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                    <br />
                </div>
            </div>
            <br />
        </div >
    )
}

export default ViewAll