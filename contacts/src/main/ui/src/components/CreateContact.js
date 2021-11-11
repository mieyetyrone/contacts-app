import React, { Component } from 'react'
import Button from 'react-bootstrap/Button';
import { createContact } from '../services/ContactService'

class CreateContact extends Component {
    
    state = {
        contact: {
            firstName: "",
            lastName: "",
            email: ""
        }
    }

    createContact = (e) => {
        if(this.validateInput()) {
            createContact(this.state.contact)
                .then(response => {
                    console.log(response);
            });
            this.setState({contact: {}});
        }
    }

    validateInput(){
        let error = "";
        let contact = this.state.contact
        if(contact.firstName==="" || !this.validateText(contact.firstName)){
            error += "The First name is not valid\n";
        }
        if(contact.lastName==="" || !this.validateText(contact.lastName)){
            error += "The Last name is not valid\n";
        }
        if(contact.email==="" || !this.validateEmail(contact.email)){
            error += "The Email is not valid\n";
        }
        if(error!==""){
            alert(error);
            return false;
        }
        else{
            return true;
        }
    }

    validateText(txt){
        let validText = /^[A-Za-z\s]+$/;
        if(txt.match(validText)){
            return true;
        }
        else{
            return false;
        }
    }

    validateEmail(email) {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }

    onChangeForm = (e) => {
        let contact = this.state.contact
        if (e.target.name === 'firstname') {
            contact.firstName = e.target.value;
        } else if (e.target.name === 'lastname') {
            contact.lastName = e.target.value;
        } else if (e.target.name === 'email') {
            contact.email = e.target.value;
        }
        this.setState({contact})
    }

    
    
    render() {
        return (
            <div className="container pt-3">
                <Button variant="outline-primary" href="/">Home</Button>
                <h1>Add contact below</h1>
                <div>
                    <form>
                        <div className="container p-3 my-3 border bg-light text-dark">
                            <div className="form-group col-md-12">
                                <label for="firstName"><h5>First Name</h5></label>
                                <br />
                                <input type="text" onChange={(e) => this.onChangeForm(e)} className="form-control" name="firstname" id="firstname" placeholder="First Name" />
                                <br />
                            </div>
                        </div>
                        <div className="container p-3 my-3 border bg-light text-dark">
                            <div className="form-group col-md-12">
                                <label for="lastName"><h5>Last Name</h5></label>
                                <br />
                                <input type="text" onChange={(e) => this.onChangeForm(e)} className="form-control" name="lastname" id="lastname" placeholder="Last Name" />
                                <br />
                            </div>
                        </div>
                        <div className="container p-3 my-3 border bg-light text-dark">
                            <div className="form-group col-md-12">
                                <label for="email"><h5>Email</h5></label>
                                <br />
                                <input type="text" onChange={(e) => this.onChangeForm(e)} className="form-control" name="email" id="email" placeholder="Email" />
                                <br />
                            </div>
                        </div>
                        <button type="submit" onClick= {(e) => this.createContact(e)} className="btn btn-success">Create</button>
                    </form>
                </div>
            </div>
        );
    }
}

export default CreateContact