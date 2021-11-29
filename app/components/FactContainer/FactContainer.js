import React from 'react'
import { Text } from 'react-native';

class FactContainer extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { text, textStyle } = this.props;
        return <Text style={textStyle}>{text}</Text>
    }
}

export default FactContainer;