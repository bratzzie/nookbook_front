import {
  StyledInputProps,
  ValidatedInputState,
} from "../../../../utils/GlobalInterfaces";

export const determineStyledInputBorder = (props: StyledInputProps): string => {
  let { active, valid, theme } = props;

  if (!active && valid) {
    return theme.colors.light_gray;
  }

  if (!active && !valid) {
    return theme.colors.error;
  }

  if (active && valid) {
    return theme.colors.primary_blue;
  }

  if (active && !valid) {
    return theme.colors.error;
  }

  return "";
};

export const determineLabelColor = (props: StyledInputProps): string => {
  let { theme, color } = props;

  if (color && color === "error") {
    return theme.colors.error;
  }

  if (color && color === "primary_blue") {
    return theme.colors.primary_blue;
  }

  return theme.colors.light_gray;
};

export const determineValidatedTextLabel = (
  active: boolean,
  valid: boolean
): string => {
  if (!valid && active) return "error";

  if (valid && active) return "primary_blue";

  if (!valid && !active) return "error";

  return "light_gray";
};
