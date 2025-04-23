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
}

export const LoginModal: React.FC<LoginModalProps> = ({ toggleModal }) => {
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

  return (
    <Modal>
      <div className="login-modal">
        <RegisterStepCounter step={state.step} changeStep={stepButtonClicked} />
        <div className="register-modal-content">
          {determineLoginModalContent(state.step)}
        </div>
      </div>
    </Modal>
  );
};
