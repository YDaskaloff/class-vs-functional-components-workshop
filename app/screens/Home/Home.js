import React, {useEffect, useState, useContext} from "react";
import { ScrollView } from 'react-native';
import RequestNewFactButton from '../../components/RequestNewFactButton/RequestNewFactButton'
import FactContainer from '../../components/FactContainer/FactContainer';
import ButtonThemeContext from "../../context/ButtonThemeContext";
import styles from './styles'

const Home = (props) => {
    const [joke, setJoke] = useState('');
    const { theme, setTheme } = useContext(ButtonThemeContext);

    useEffect(() => {
        fetchFact();
    }, [])

    const fetchFact = async () => {
        try {
            const response = await fetch(
                'https://uselessfacts.jsph.pl/random.json?language=en'
            );
            const json = await response.json();

            setJoke(json.text);
        } catch (error) {
            console.error(error);
        }
    }

    console.log('+++theme home', theme)
    return (
        <ScrollView contentContainerStyle={styles.container}>
            <FactContainer
                text={joke}
                textStyle={styles.jokeTextStyle}
            />
            <RequestNewFactButton
                buttonStyle={theme === "light" ? styles.lightButtonStyle : styles.darkButtonStyle}
                textStyle={theme === "light" ? styles.lightButtonTextStyle : styles.darkButtonTextStyle}
                label={'Request new fact'}
                onPress={fetchFact}
            />
        </ScrollView>
    )
}

export default Home;