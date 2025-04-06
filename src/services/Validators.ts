export const validateName = (value: string, maxLength: number): boolean => {
  /*
   Regex rule for Instagram usernames.
   Usernames can contain characters a-z, 0-9, underscores and periods.
   The username cannot start with a period nor end with a period.
   It must also not have more than one period sequentially.
   Max length is dynamic based on the parameter.
   */
  const regex = new RegExp(
    `^(?!.*\\.\\.)(?!.*\\.$)[^\\W][\\w.]{0,${maxLength - 1}}$`,
    "gim"
  );
  return value.length > 0 && value.length <= maxLength && !!value.match(regex);
};

export const validateEmail = (value: string): boolean => {
  // RFC2822 standards
  return (
    value.length > 0 &&
    !!value
      .toLowerCase()
      .match(
        /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g
      )
  );
};

export const validatePassword = (value: string): boolean => {
  /* 
   - at least 8 characters
   - must contain at least 1 uppercase letter, 1 lowercase letter, and 1 number
   - can contain special characters
   by psutton3756
*/

  return (
    value.length > 0 &&
    value.length <= 8 &&
    !!value.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm)
  );
};
