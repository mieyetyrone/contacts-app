import React, { Component } from 'react'
import Button from 'react-bootstrap/Button';

class CreateContact extends Component {
    
    state = {
        contact: {}
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
                <Button variant="outline-primary">Home</Button>
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
                        <button type="button" className="btn btn-success">Create</button>
                    </form>
                </div>
            </div>
        );
    }
}

export default CreateContact