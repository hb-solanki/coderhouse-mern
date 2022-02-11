import React, { useState } from 'react'
// import styles from './Register.module'
import { StepPhoneOrEmail, StepOtp, StepName, StepProfile, StepUsername } from '../Stpes'

const steps = {
    1: StepPhoneOrEmail,
    2: StepOtp,
    3: StepName,
    4: StepProfile,
    5: StepUsername
}
const Register = () => {

    const [step, setStep] = useState(1);
    const onNext = () => {
        console.log("===",step)
        setStep(step + 1)
    }
    const Step = steps[step];
  return (
      <div>
          <Step onNext={ onNext }/>    
      </div>
  )
}

export default Register