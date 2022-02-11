import React, { useState } from "react";
// import styles from './Register.module'
import { StepPhoneOrEmail, StepOtp } from "../Stpes";

const steps = {
  1: StepPhoneOrEmail,
  2: StepOtp,
};
const Login = () => {
  const [step, setStep] = useState(1);
  const onNext = () => {
    setStep(step + 1);
  };
  const Step = steps[step];
  return (
    <div>
      <Step onNext={onNext} />
    </div>
  );
};

export default Login;
