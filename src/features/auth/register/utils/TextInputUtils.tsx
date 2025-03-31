import { StyledInputProps, ValidatedInputState } from "../../../../utils/GlobalInterfaces";

export const determineStyledInputBorder = (props:StyledInputProps): string => {
    let {active, valid, theme} = props

    if(!active && valid) {
        return theme.colors.light_gray
    }

    if(!active && !valid) {
        return theme.colors.error
    }

    if(active && valid) {
        return theme.colors.primary_blue
    }

    if(active && !valid) {
        return theme.colors.error
    }

    return ""
}

export const determineLabelColor = (props:StyledInputProps): string => {
    let {theme, color} = props

    if(color && color === "error") {
        return theme.colors.error
    }

    if(color && color === "primary_blue") {
        return  theme.colors.primary_blue
    }

    return theme.colors.light_gray
}

export const determineValidatedStyles = (state:ValidatedInputState, validator: (value:string) => boolean): ValidatedInputState => {
    let {valid, active, typedIn, value, labelColor, labelActive} = state

    if(typedIn){
        valid = validator(value)

        if(active && valid) {
            labelActive= true
            labelColor="primary_blue"
        }

        if(active && !valid) {
            labelActive = true
            labelColor = "error"
        }

        if(!active && valid) {
            labelActive = true
            labelColor = "light_gray"
        }

        if(!active && !valid) {
            labelActive = false
            labelColor = "light_gray"
        }
    } else {
        if(active) {
            labelActive = true
            labelColor = "primary_blue"
        } else {
            labelActive= false
            labelColor = "light_gray"
        }
    }

    state = {...state, valid, labelActive, labelColor}

    return state
}