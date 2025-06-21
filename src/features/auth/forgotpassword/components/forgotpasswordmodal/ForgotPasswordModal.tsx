import React, { useState } from "react";
import { Modal } from "../../../../../components/Modal/Modal";
import { RegisterStepCounter } from "../../../register/components/registerstepcounter/RegisterStepCounter";
import ForgotPasswordStepOne from "./forgotpasswordsteps/ForgotPasswordStepOne";
import { AppDispatch, RootState } from "../../../../../redux/Store";
import { useDispatch, useSelector } from "react-redux";
import { decrementStep } from "../../../../../redux/slices/ForgotPasswordSlice";
import { cleanForgotPasswordState } from "../../../../../redux/slices/ForgotPasswordSlice";
import { determineForgotPasswordModalContent } from "../../../register/utils/RegisterModalUtils";
const ForgotPasswordModal: React.FC<{ toggleModal: () => void }> = ({
  toggleModal,
}) => {
  const state = useSelector((state: RootState) => state.forgotPassword);
  const dispatch: AppDispatch = useDispatch();

  const stepButtonClicked = () => {
    if (state.step == 1) {
      toggleModal();
      dispatch(cleanForgotPasswordState());
      return;
    }
    dispatch(decrementStep());
  };

  const toggleForgotPassword = () => {
    toggleModal();
    dispatch(cleanForgotPasswordState());
  };
  return (
    <Modal>
      <div>
        <RegisterStepCounter step={state.step} changeStep={stepButtonClicked} />
        <div>
          {determineForgotPasswordModalContent(
            state.step,
            toggleForgotPassword
          )}
        </div>
      </div>
    </Modal>
  );
};

export default ForgotPasswordModal;
