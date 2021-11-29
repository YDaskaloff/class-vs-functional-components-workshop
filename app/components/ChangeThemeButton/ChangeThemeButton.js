import React from 'react'
import Button from '../Button/Button';

class ChangeThemeButton extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <Button {...this.props} />
    }
}

export default ChangeThemeButton;