import React from 'react';
import { Button, List } from 'semantic-ui-react';

class Confirmation extends React.Component {
    constructor(props) {
        super(props);
        this.saveAndContinue = this.saveAndContinue.bind(this);
        this.back = this.back.bind(this);
    }

    saveAndContinue(event) {
        event.preventDefault();
        this.props.nextStep();
    }

    back(event) {
        event.preventDefault();
        this.props.prevStep();
    }

    render() {
        const {firstName, lastName, email, age, city, country} = this.props.values;
        return (
            <div>
                <h1 className="ui centered">Confirm Your Details</h1>
                <p>Click Confirm if the following details have been correctly entered</p>
                <List>
                    <List.Item>
                        <List.Icon name="users" />
                        <List.Content>First Name: {firstName}</List.Content>
                    </List.Item>
                    <List.Item>
                        <List.Icon name="users" />
                        <List.Content>Last Name: {lastName}</List.Content>
                    </List.Item>
                    <List.Item>
                        <List.Icon name="mail" />
                        <List.Content><a href="mailto:{email}">{email}</a></List.Content>
                    </List.Item>
                    <List.Item>
                        <List.Icon name="calendar" />
                        <List.Content>{age} Years</List.Content>
                    </List.Item>
                    <List.Item>
                        <List.Icon name="marker" />
                        <List.Content>{city}, {country}</List.Content>
                    </List.Item>
                </List>

                <Button onClick={this.back}>Back</Button>
                <Button onClick={this.saveAndContinue}>Save and continue</Button>
            </div>
        );
    }
}

export default Confirmation;