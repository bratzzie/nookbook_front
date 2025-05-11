import React from "react";
import { Modal } from "../../../../../components/Modal/Modal";
import { RegisterStepCounter } from "../../../register/components/registerstepcounter/RegisterStepCounter";
import { AppDispatch, RootState } from "../../../../../redux/Store";
import { useDispatch, useSelector } from "react-redux";
import { determineLoginModalContent } from "../../../register/utils/RegisterModalUtils";
import { decrementStep } from "../../../../../redux/slices/UserSlice";
import { cleanLoginState } from "../../../../../redux/slices/UserSlice";

interface LoginModalProps {
  toggleModal: () => void;
  switchToRegister: () => void;
  switchToForgotPassword: () => void;
}

export const LoginModal: React.FC<LoginModalProps> = ({
  toggleModal,
  switchToRegister,
  switchToForgotPassword,
}) => {
  const state = useSelector((state: RootState) => state.user);
  const dispatch: AppDispatch = useDispatch();

  const stepButtonClicked = () => {
    if (state.step == 1) {
      toggleModal();
      dispatch(cleanLoginState());
      return;
    }
    dispatch(decrementStep());
  };
  const toggleRegister = () => {
    toggleModal();
    dispatch(cleanLoginState());
    switchToRegister();
  };
  const toggleForgotPassword = () => {
    toggleModal();
    dispatch(cleanLoginState());
    switchToForgotPassword();
  };
  return (
    <Modal>
      <div>
        <RegisterStepCounter step={state.step} changeStep={stepButtonClicked} />
        <div>
          {determineLoginModalContent(
            state.step,
            toggleRegister,
            toggleForgotPassword
          )}
        </div>
      </div>
    </Modal>
  );
};
