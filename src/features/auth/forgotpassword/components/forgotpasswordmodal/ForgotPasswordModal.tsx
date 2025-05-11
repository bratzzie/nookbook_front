import React, { useState } from "react";
import { Modal } from "../../../../../components/Modal/Modal";
import { RegisterStepCounter } from "../../../register/components/registerstepcounter/RegisterStepCounter";
import ForgotPasswordStepOne from "./forgotpasswordsteps/ForgotPasswordStepOne";
import {
  validateEmail,
  validateName,
} from "../../../../../services/Validators";
import axios from "axios";
const ForgotPasswordModal: React.FC<{ toggleModal: () => void }> = ({
  toggleModal,
}) => {
  const stepButtonClicked = () => {
    /*
          if (state.step == 1) {
              toggleModal();
              dispatch(cleanLoginState());
              return;
            }
            dispatch(decrementStep()); */
  };
  const [credential, setCredential] = useState<string>("");
  const [error, setError] = useState<boolean>(false);
  const [step, setStep] = useState<number>(1);

  const searchUser = async () => {
    let findUserDTO = {
      email: "",
      password: "",
      username: "",
    };

    if (validateEmail(credential))
      findUserDTO = { ...findUserDTO, email: credential };
    else if (validateName(credential, 25))
      findUserDTO = { ...findUserDTO, username: credential };

    try {
      setError(false);
      let res = await axios.post(
        "http://localhost:8080/login/find",
        findUserDTO
      );
      let data = await res.data;
      setStep(2);
    } catch (e) {
      setError(true);
    }
  };

  const changeCredential = (credential: string) => {
    setCredential(credential);
  };

  return (
    <Modal>
      <div>
        <RegisterStepCounter step={step} changeStep={stepButtonClicked} />
        <div>
          <ForgotPasswordStepOne
            setCredential={changeCredential}
            error={false}
          />
        </div>
      </div>
    </Modal>
  );
};

export default ForgotPasswordModal;
