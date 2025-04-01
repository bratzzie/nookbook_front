interface ThemeColors {
    primary_green: string
    primary_yellow: string
    primary_dark_green: string,
    primary_blue: string,
    light_gray: string,
    primary_brown: string
    sand: string,
    error: string,
    input: string,
    success: string
}

export interface Theme {
    colors: ThemeColors
}

export interface StyledInputProps {
    active: boolean,
    valid: boolean,
    theme: Theme,
    color?:string
}

export interface ValidatedInputState {
    active: boolean,
    valid: boolean,
    typedIn: boolean,
    labelActive : boolean,
    labelColor: string,
    value: string
}

export interface RegisterNextButtonProps {
    active: boolean,
    theme: Theme,
    color: string
}