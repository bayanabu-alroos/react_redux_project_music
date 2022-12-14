import React, { useState, useEffect } from 'react';
import axios from "axios";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Table from 'react-bootstrap/Table';

const AdminContact = () => {

    
    const [contacts, setContacts] = useState([]);
    useEffect(() => {
        getUse();
    }, []);



    ///show data

    function getUse() {
        axios.get(`http://localhost/ApiReduxPro8/contact.php`).then(function (response) {
            console.log(response.data);
            setContacts(response.data);
        });
    }




   


    return (
        <>
            <br /><br /><br /><br /><br />
            {/* Breadcrumb Begin */}
            <div className="breadcrumb-option">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="breadcrumb__links">
                                <a href="#"><i className="fa fa-home" /> Home</a>
                                <span>Admin Dashboard</span>
                                <span> &nbsp;&nbsp;|&nbsp;&nbsp;Contact</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Breadcrumb End */}


            {/* Breadcrumb End */}
            <section className="discography spad">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="section-title center-title">
                                <h2>Admin Dashboard Contacts</h2>
                                <h1>Dashboard</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <div className="container-xl px-4 mt-4">
                <div class="card">
                    <div class="card-header">
                        <div class="row">
                            <div class="col col-md-10"><b><h3>Contacts</h3></b></div>

                        </div>
                    </div>

                    <div className="card-body mt-2">
                        {/* Billing history table*/}

                        <div className="table-responsive table-billing-history">
                            <Table striped bordered hover variant="dark" >
                                <thead>
                                    <tr>
                                        <th scope="col">#</th>
                                        <th scope="col">Name </th>
                                        <th scope="col">Email </th>
                                        <th scope="col">Number Phone</th>
                                        <th scope="col">Contact Message</th>
                                        <th scope="col">Date</th>
                                    </tr>
                                </thead>
                                <tbody>{contacts.map((contact, key) =>


                                    <tr key={key}>

                                        <th scope="row">{contact.id}</th>
                                        <td>{contact.name}</td>
                                        <td>{contact.email}</td>
                                        <td>{contact.phone}</td>
                                        <td>{contact.message}</td>
                                        <td>{contact.created_at}</td>


                                    </tr>
                                )}
                                </tbody>

                            </Table>
                        </div>
                    </div>
                </div>
            </div>

            </>




  )
}

export default AdminContact 
