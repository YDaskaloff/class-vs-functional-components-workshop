import React from 'react'
import Button from '../Button/Button';

class RequestNewFactButton extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <Button {...this.props} />
    }
}

export default RequestNewFactButton;