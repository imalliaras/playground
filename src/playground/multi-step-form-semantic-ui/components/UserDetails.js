import React from 'react';
import { Form, Button } from 'semantic-ui-react';

class UserDetails extends React.Component {
    constructor(props) {
        super(props);
        this.saveAndContinue = this.saveAndContinue.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    saveAndContinue(event) {
        event.preventDefault();
        this.props.nextStep();
    }

    handleInputChange(event) {
        this.props.handleChange(event);
    }

    render() {
        console.log('props', this.props);
        const {firstName, lastName, email} = this.props.values;
        return (
            <Form>
                <h1 className="ui centered">Enter User Details</h1>
                <Form.Field>
                    <label>First Name</label>
                    <input 
                        value={firstName}
                        onChange={this.handleInputChange}
                        name="firstName"
                        placeholder="First Name" 
                    />
                </Form.Field>
                <Form.Field>
                    <label>Last Name</label>
                    <input 
                        value={lastName}
                        onChange={this.handleInputChange}
                        name="lastName"
                        placeholder="Last Name" 
                    />
                </Form.Field>
                <Form.Field>
                    <label>Email Address</label>
                    <input 
                        value={email}
                        onChange={this.handleInputChange}
                        name="email"
                        placeholder="Email Address" 
                    />
                </Form.Field>
                <Button onClick={this.saveAndContinue}>Save and continue</Button>
            </Form>
        );
    }
}

export default UserDetails;