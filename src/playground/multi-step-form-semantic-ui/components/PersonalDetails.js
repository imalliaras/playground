import React from 'react';
import { Form, Button } from 'semantic-ui-react';

class PersonalDetails extends React.Component {
    constructor(props) {
        super(props);
        this.saveAndContinue = this.saveAndContinue.bind(this);
        this.back = this.back.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    saveAndContinue(event) {
        event.preventDefault();
        this.props.nextStep();
    }

    back(event) {
        event.preventDefault();
        this.props.prevStep();
    }

    handleInputChange(event) {
        this.props.handleChange(event);
    }

    render() {
        const {age, city, country} = this.props.values;
        return (
            <Form>
                <h1 className="ui centered">Enter  Personal Details</h1>
                <Form.Field>
                    <label>Age</label>
                    <input 
                        value={age}
                        onChange={this.handleInputChange}
                        name="age"
                        placeholder="Age" />
                </Form.Field>
                <Form.Field>
                    <label>City</label>
                    <input 
                        value={city}
                        onChange={this.handleInputChange}
                        name="city"
                        placeholder="City" 
                    />
                </Form.Field>
                <Form.Field>
                    <label>Country</label>
                    <input 
                        value={country}
                        onChange={this.handleInputChange}
                        name="country"
                        placeholder="Country" 
                    />
                </Form.Field>
                <Button onClick={this.back}>Back</Button>
                <Button onClick={this.saveAndContinue}>Save and continue</Button>
            </Form>
        );
    }
}

export default PersonalDetails;