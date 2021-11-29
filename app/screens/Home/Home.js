import React from "react";
import { ScrollView } from 'react-native';
import RequestNewFactButton from '../../components/RequestNewFactButton/RequestNewFactButton'
import FactContainer from '../../components/FactContainer/FactContainer';
import ButtonThemeContext from "../../context/ButtonThemeContext";
import styles from './styles'

class Home extends React.Component {
    static contextType = ButtonThemeContext
    constructor(props) {
        super(props);
        this.state = {
            joke: ''
        }

        this.fetchFact = this.fetchFact.bind(this);

    }

    componentDidMount() {
        this.fetchFact();
    }

    async fetchFact() {
        try {
            const response = await fetch(
                'https://uselessfacts.jsph.pl/random.json?language=en'
            );
            const json = await response.json();

            this.setState({ joke: json.text });
        } catch (error) {
            console.error(error);
        }
    }

    render() {
        const { theme, setTheme } = this.context
        console.log('+++theme home', theme)
        return (
            <ScrollView contentContainerStyle={styles.container}>
                <FactContainer
                    text={this.state.joke}
                    textStyle={styles.jokeTextStyle}
                />
                <RequestNewFactButton
                    buttonStyle={theme === "light" ? styles.lightButtonStyle : styles.darkButtonStyle}
                    textStyle={theme === "light" ? styles.lightButtonTextStyle : styles.darkButtonTextStyle}
                    label={'Request new fact'}
                    onPress={this.fetchFact}
                />
            </ScrollView>
        )
    }
}

export default Home;