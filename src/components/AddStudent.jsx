import React from 'react'
import NavBar from './NavBar'

const AddStudent = () => {
    return (
        <div>
            <NavBar/>
            <br />
            <div class="card text-center mb-3">
                <div class="card-body">
                    <h5 class="card-title">Add Student</h5>
                    <p></p>
                    <p></p>
                    <div className="container">
                        <div className="row">
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <div className="row g-3">
                                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                        <label htmlFor="" className="form-label">Name :</label>
                                        <input type="text" className="form-control" />
                                    </div>
                                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                        <label htmlFor="" className="form-label">Admission No :</label>
                                        <input type="text" className="form-control" />
                                    </div>
                                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                        <label htmlFor="" className="form-label">Roll No. :</label>
                                        <input type="number" name="" id="" className="form-control" />
                                    </div>
                                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                        <label htmlFor="" className="form-label">Parent Name :</label>
                                        <input type="text" className="form-control" />
                                    </div>
                                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                        <label htmlFor="" className="form-label">College Name :</label>
                                        <input type="text" className="form-control" />
                                    </div>
                                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                        <label htmlFor="" className="form-label">Date of Birth :</label>
                                        <input type="date" name="" id="" className="form-control" />
                                    </div>
                                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                        <label htmlFor="" className="form-label">E-mail :</label>
                                        <input type="email" name="" id="" className="form-control" />
                                    </div>
                                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                        <label htmlFor="" className="form-label">Password :</label>
                                        <input type="password" name="" id="" className="form-control" />
                                    </div>
                                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                        <label htmlFor="" className="form-label">Confirm Password :</label>
                                        <input type="password" name="" id="" className="form-control" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <br />
                    <button className="btn btn-outline-success">Add</button>
                </div>
            </div>
            <br />
        </div>
    )
}

export default AddStudent