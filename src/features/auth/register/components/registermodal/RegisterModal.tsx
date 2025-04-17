import React, { useEffect } from "react";
import { Modal } from "../../../../../components/Modal/Modal";
import "./registermodal.css";
import { RegisterStepCounter } from "../registerstepcounter/RegisterStepCounter";
import { determineModalContent } from "../../utils/RegisterModalUtils";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../../../redux/Store";
import {
  cleanRegisterState,
  decrementStep,
} from "../../../../../redux/slices/RegisterSlice";
interface RegisterModalProps {
  toggleModal: () => void;
}
export const RegisterModal: React.FC<RegisterModalProps> = ({
  toggleModal,
}) => {
  const state = useSelector((state: RootState) => state.register);
  const dispatch: AppDispatch = useDispatch();

  const stepButtonClicked = () => {
    if (state.step == 1) {
      toggleModal();
      dispatch(cleanRegisterState());
      return;
    }
    dispatch(decrementStep());
  };

  return (
    <Modal>
      <div className="register-modal">
        <RegisterStepCounter step={state.step} changeStep={stepButtonClicked} />
        <div className="register-modal-content">
          {determineModalContent(state.step)}
        </div>
      </div>
    </Modal>
  );
};
