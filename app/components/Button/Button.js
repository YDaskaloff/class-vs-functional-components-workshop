import React from 'react'
import { Text, TouchableOpacity } from 'react-native';

class Button extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { buttonStyle, textStyle, label, onPress } = this.props;
        return <TouchableOpacity onPress={onPress} style={buttonStyle}>
            <Text style={textStyle}>
                {label}
            </Text>
        </TouchableOpacity>
    }
}

export default Button;