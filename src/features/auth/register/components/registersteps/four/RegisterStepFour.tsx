import React from "react";
import "../registersteps.css";
import { ValidatedDisplay } from "../../../../../../components/TextInput/ValidatedInput/ValidatedDisplay";
import { useSelector, useDispatch } from "react-redux";
import { registerUser } from "../../../../../../redux/slices/RegisterSlice";
import { RootState, AppDispatch } from "../../../../../../redux/Store";
import { RegisterNextButton } from "../../registernextbutton/RegisterNextButton";

export const RegisterStepFour: React.FC = () => {
  const state = useSelector((state: RootState) => state.register);
  const dispatch: AppDispatch = useDispatch();

  const submitForm = () => {
    const user = {
      name: state.name,
      email: state.email,
      username: state.username,
      islandName: state.islandName ?? undefined,
      hemisphere: state.hemisphere ?? undefined,
      nativeFruit: state.nativeFruit ?? undefined,
      creatorId: state.creatorId ?? undefined,
    };

    dispatch(registerUser(user));
  };

  const amountOfOptionalFields = () => {
    var amount = 0;
    if (state.islandName) amount++;
    if (state.hemisphere) amount++;
    if (state.nativeFruit) amount++;
    if (state.creatorId) amount++;
    return amount;
  };

  return (
    <div className="reg-step-container">
      <div className="reg-step-content">
        <h1 className="reg-step-title">Check your registration details</h1>
        <ValidatedDisplay label={"Name"} value={state.name} />
        <ValidatedDisplay label={"Username"} value={state.username} />
        <ValidatedDisplay label={"Email"} value={state.email} />
        {state.error ? (
          <p className="text-error text-sm ml-2 mt-1">{state.error}</p>
        ) : (
          <></>
        )}

        {amountOfOptionalFields() > 2 ? (
          <div className="grid grid-cols-2 grid-rows-2 gap-0">
            {state.islandName ? (
              <ValidatedDisplay
                label={"Island Name"}
                value={state.islandName}
              />
            ) : (
              <></>
            )}
            {state.hemisphere ? (
              <ValidatedDisplay label={"Hemisphere"} value={state.hemisphere} />
            ) : (
              <></>
            )}
            {state.nativeFruit ? (
              <ValidatedDisplay
                label={"Native Fruit"}
                value={state.nativeFruit}
              />
            ) : (
              <></>
            )}
            {state.creatorId ? (
              <ValidatedDisplay label={"Creator Id"} value={state.creatorId} />
            ) : (
              <></>
            )}
          </div>
        ) : (
          <div className="row">
            {state.islandName ? (
              <ValidatedDisplay
                label={"Island Name"}
                value={state.islandName}
              />
            ) : (
              <></>
            )}
            {state.hemisphere ? (
              <ValidatedDisplay label={"Hemisphere"} value={state.hemisphere} />
            ) : (
              <></>
            )}
            {state.nativeFruit ? (
              <ValidatedDisplay
                label={"Native Fruit"}
                value={state.nativeFruit}
              />
            ) : (
              <></>
            )}
            {state.creatorId ? (
              <ValidatedDisplay label={"Creator Id"} value={state.creatorId} />
            ) : (
              <></>
            )}
          </div>
        )}

        <p className="reg-step-paragraph">
          By signing up you agree to our{" "}
          <span className="reg-step-link">Terms of Services</span> and{" "}
          <span className="reg-step-link">Privacy Policy</span>, including{" "}
          <span className="reg-step-link">Cookie Use</span>. NookBook may use
          your contanct information, including your email address for purposes
          outlined in our Privacy Policy.{" "}
          <span className="reg-step-link">Learn more about it</span>.
        </p>
      </div>
      <RegisterNextButton
        onClick={submitForm}
        disabled={false}
        color={"success"}
        active={true}
      >
        Sign Up
      </RegisterNextButton>
    </div>
  );
};
