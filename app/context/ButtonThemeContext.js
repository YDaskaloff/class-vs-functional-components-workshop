import React from 'react'

const ButtonThemeContext = React.createContext()

// export const ButtonThemeProvider = ButtonThemeContext.Provider
class ButtonThemeProvider extends React.Component {
    // Context state
    state = {
        theme: 'light',
    }

    // Method to update state
    setTheme = (theme) => {
        this.setState((prevState) => ({ theme }))
    }

    render() {
        const { children } = this.props
        const { theme } = this.state
        const { setTheme } = this

        return (
            <ButtonThemeContext.Provider
                value={{
                    theme,
                    setTheme,
                }}
            >
                {children}
            </ButtonThemeContext.Provider>
        )
    }
}
export const ButtonThemeConsumer = ButtonThemeContext.Consumer

export default ButtonThemeContext

export { ButtonThemeProvider };