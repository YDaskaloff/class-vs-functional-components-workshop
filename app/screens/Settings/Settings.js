import React, {useContext} from "react";
import { View, Text } from 'react-native';
import ChangeThemeButton from '../../components/ChangeThemeButton/ChangeThemeButton'
import ButtonThemeContext from "../../context/ButtonThemeContext";
import styles from "./styles";

const Settings = (props) => {
    const { theme, setTheme } = useContext(ButtonThemeContext);

    console.log('+++theme', theme)
    return (
        <View style={styles.container}>
            <Text style={styles.titleStyle}>By choosing one of the following buttons you will be able to change button's theme in the application</Text>
            <View style={styles.buttonsContainer}>
                <ChangeThemeButton
                    buttonStyle={theme === 'light' ? styles.lightButtonStyle : styles.darkButtonStyle}
                    textStyle={theme === 'light' ? styles.lightButtonTextStyle : styles.darkButtonTextStyle}
                    label={'Request light theme'}
                    onPress={() => setTheme('light')}
                />
                <ChangeThemeButton
                    buttonStyle={theme === 'light' ? styles.lightButtonStyle : styles.darkButtonStyle}
                    textStyle={theme === 'light' ? styles.lightButtonTextStyle : styles.darkButtonTextStyle}
                    label={'Request dark theme'}
                    onPress={() => setTheme('dark')}
                />
            </View>
        </View>
    )
}

export default Settings;