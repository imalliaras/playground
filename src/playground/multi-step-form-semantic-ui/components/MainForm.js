import React from 'react';
import UserDetails from './UserDetails';
import PersonalDetails from './PersonalDetails';
import Confirmation from './Confirmation';
import Success from './Success';

class MainForm extends React.Component {
    constructor(props) {
        super(props);
        this.nextStep = this.nextStep.bind(this);
        this.prevStep = this.prevStep.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.state = { 
            step: 1,
            firstName: '',
            lastName: '',
            email: '',
            age: '',
            city: '',
            country: ''
        };
    }

    nextStep() {
        const step =this.state.step;
        this.setState({ step: step + 1 });
    }

    prevStep() {
        const step =this.state.step;
        this.setState({ step: step - 1 });
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    render() {
        const step = this.state.step;
        const {firstName, lastName, email, age, city, country} = this.state;

        switch(step) {
            case 1:
                return <UserDetails 
                        nextStep={this.nextStep} 
                        handleChange={this.handleChange}
                        values={{firstName, lastName, email}}
                        />;
            case 2:
                return <PersonalDetails 
                        nextStep={this.nextStep}
                        prevStep={this.prevStep} 
                        handleChange={this.handleChange}
                        values={{age, city, country}}
                        />;
            case 3:
                return <Confirmation 
                        nextStep={this.nextStep} 
                        prevStep={this.prevStep}
                        values={{firstName, lastName, email, age, city, country}}
                        />;
            case 4:
                return <Success />;
        }
    }
}

export default MainForm;