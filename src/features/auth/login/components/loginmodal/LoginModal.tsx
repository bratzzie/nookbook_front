import React from "react";
import { Modal } from "../../../../../components/Modal/Modal";
import { RegisterStepCounter } from "../../../register/components/registerstepcounter/RegisterStepCounter";
import { LoginStepOne } from "./loginsteps/LoginStepOne";

interface LoginModalProps {
  toggleModal: () => void;
}

export const LoginModal: React.FC<LoginModalProps> = ({ toggleModal }) => {
  const step = 1;

  const stepButtonClicked = () => {
    if (step == 1) {
      toggleModal();
      //dispatch(cleanRegisterState());
      return;
    }
    //dispatch(decrementStep());
  };

  const determineModalContent = (step: number) => {
    if (step == 1) return <LoginStepOne />;
  };

  return (
    <Modal>
      <div className="login-modal">
        <RegisterStepCounter step={step} changeStep={stepButtonClicked} />
        <div className="register-modal-content">
          {determineModalContent(step)}
        </div>
      </div>
    </Modal>
  );
};
