import React from 'react';
import MainForm from './components/MainForm';
import { Container } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';

class App extends React.Component {
    render() {
        return (
            <Container textAlign="center">
                <MainForm />
            </Container>
        );
    }
}

export default App;