import "./styles.css";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import AppBar from "@mui/material/AppBar";
import React, { useEffect, useState, useRef } from "react";
import Stack from "@mui/material/Stack";

import {
  validity,
  smsLimit,
  dataLimit,
  socialMediaLimit,
} from "./sliderValues";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

function validityText(value) {
  return `${value} days`;
}

function smsLimitText(value) {
  return `${value} sms`;
}

function dataLimitText(value) {
  return `${value} GB`;
}

const CustomSlider = ({
  label,
  ariaValueText,
  defaultVal,
  step = null,
  min,
  max,
  marks,
  onchange,
}) => {
  return (
    <Box sx={{ width: "100%", mb: "30px" }}>
      <Card sx={{ minWidth: "100%" }}>
        <CardContent>
          <Typography sx={{ fontSize: 14, fontWeight: "bold" }} align="left">
            {label}
          </Typography>
          <Slider
            sx={{ p: "10px", width: "85%", color: '#05ad43' }}
            aria-label="Custom marks"
            defaultValue={defaultVal}
            getAriaValueText={ariaValueText}
            step={step}
            min={min}
            max={max}
            valueLabelDisplay="off"
            marks={marks}
            onChange={onchange}
          />
        </CardContent>
      </Card>
    </Box>
  );
};
export default function App() {
  const [isCalculated, setIsCalculated] = useState(false);
  const [value, setValue] = React.useState("20 GB");
  const [isPrepaid, setIsPrepaid] = React.useState(true);
  const [selectedDataPlan, setSelectedDataPlan] = useState([]);
  const [calculationData, setCalculationData] = useState([]);

  const cardData = {
    50: {
      planName: "Solo 99",
      addOn: "20 GB",
      price: "158.85 SAR",
    },
    100: {
      planName: "Solo 240",
      addOn: "20 GB",
      price: "331 SAR",
    },
    150: {
      planName: "Solo 340",
      addOn: "40 GB",
      price: "446 SAR",
    },
  };

  const ref = useRef(null);

  const handleCalculate = () => {
    setCalculationData(selectedDataPlan);
    setIsCalculated(true);
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <div className="App" >
      <AppBar position="static" sx={{ backgroundColor: "#002035" }}>
        {" "}
        <img
          src="https://salammobile.sa/wp-content/uploads/2022/03/mySalamLogo-min.png.webp"
          width="120"
          alt="Header"
          className="logo-img"
        />
      </AppBar>
      <div className="container">
        <div>
          <Typography
            sx={{ fontSize: 18, fontWeight: "bold", mt: "20px" }}
            align="left"
          >
            Choose a billing type
          </Typography>
          <Box
            display="flex"
            justifyContent="space-between"
            sx={{ width: 350, m: "20px 0 30px 0" }}
          >
            <Button
              sx={{ borderRadius: 28, width: 150 }}
              variant="contained"
              size="large"
              className={isPrepaid ? "selected" : "unselected"}
              onClick={() => {
                setIsPrepaid(!isPrepaid);
              }}
            >
              Prepaid
            </Button>
            <Button
              sx={{ borderRadius: 28, width: 150 }}
              variant="contained"
              size="large"
              className={!isPrepaid ? "selected" : "unselected"}
              onClick={() => {
                setIsPrepaid(!isPrepaid);
              }}
            >
              Postpaid
            </Button>
          </Box>
        </div>
        <CustomSlider
          label="Data (Regular)"
          ariaValueText={dataLimitText}
          step={50}
          min={0}
          max={300}
          defaultVal={0}
          marks={dataLimit}
          onchange={(e) => setSelectedDataPlan(e.target.value)}
        />
        <CustomSlider
          label="Data (Social Media)"
          ariaValueText={dataLimitText}
          min={20}
          max={40}
          defaultVal={20}
          marks={socialMediaLimit}
        />
        <CustomSlider
          label="SMS Limit"
          ariaValueText={smsLimitText}
          min={450}
          max={900}
          defaultVal={450}
          marks={smsLimit}
        />
        <CustomSlider
          label="Validity"
          ariaValueText={validityText}
          min={30}
          max={120}
          defaultVal={30}
          marks={validity}
        />
        <div className="calc">
          <Box
            display="flex"
            justifyContent="center"
            sx={{ width: "calc(100% - 20px)", p: "10px", m: "20px 0px" }}
          >
            <Button
              sx={{ borderRadius: 28, width: 150, backgroundColor: '#05ad43' }}
              variant="contained"
              size="large"
              onClick={handleCalculate}
            >
              Calculate
            </Button>
          </Box>
        </div>

        {isCalculated ? (
          <div ref={ref}>
            <Box sx={{ width: "100%" }}>
              <Card sx={{ width: "100%", height: 150, my: "20px" }}>
                <CardContent>
                  <Typography sx={{ fontSize: 14 }} align="right">
                    <Stack
                      direction="row"
                      justifyContent="space-between"
                      alignItems="center"
                    >
                      <Typography gutterBottom component="div">
                        Recommanded Plan
                      </Typography>
                      <Typography gutterBottom component="div">
                        {cardData[calculationData]
                          ? cardData[calculationData].planName
                          : "Solo 99"}

                      </Typography>
                    </Stack>
                    <Stack
                      direction="row"
                      justifyContent="space-between"
                      alignItems="center"
                    >
                      <Typography gutterBottom component="div">
                        Add On
                      </Typography>
                      <Typography gutterBottom component="div">
                        {cardData[calculationData]
                          ? cardData[calculationData].addOn
                          : "20 GB"}
                      </Typography>
                    </Stack>
                    <Stack
                      direction="row"
                      justifyContent="space-between"
                      alignItems="center"
                    >
                      <Typography gutterBottom variant="h6" component="div">
                        Total Price
                      </Typography>
                      <Typography gutterBottom component="div">
                        {cardData[calculationData]
                          ? cardData[calculationData].price
                          : "158.78 SAR"}
                      </Typography>
                    </Stack>
                  </Typography>
                </CardContent>
              </Card>
            </Box>
          </div>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}
