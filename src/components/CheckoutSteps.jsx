import {
  AccountBalanceOutlined,
  Home,
  HomeOutlined,
  LibraryAddCheckOutlined,
} from "@mui/icons-material";
import { Step, StepLabel, Stepper, Typography } from "@mui/material";
import React from "react";

const CheckoutSteps = ({ activeStep }) => {
  const steps = [
    {
      label: <Typography>Shipping Details</Typography>,
      //   icon: <HomeOutlined />,
    },
    {
      label: <Typography>Order Summary</Typography>,
      //   icon: <LibraryAddCheckOutlined />,
    },
    {
      label: <Typography>Payment</Typography>,
      //   icon: <AccountBalanceOutlined />,
    },
  ];

  const stepStyle = {
    boxSizing: "border-box",
  };

  return (
    <div>
      <Stepper alternativeLabel activeStep={activeStep} style={stepStyle}>
        {steps.map((step, index) => (
          <Step
            key={step.label}
            completed={index < activeStep}
            style={stepStyle}
          >
            <StepLabel>
              {/* {step.icon} */}
              {step.label}
            </StepLabel>
          </Step>
        ))}
      </Stepper>
    </div>
  );
};

export default CheckoutSteps;
