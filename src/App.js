import "./styles.css";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

export default function App() {
  const jsonData = {
    data: {
      data: {
        item: {
          _path: "/content/dam/salam/sa/assemblers/genericassembly",
          title: null,
          sectionHeading: "Build Your Own Package",
          recommendedSectionHeading: "Recommendation",
          logo: null,
          links: [
            { label: "Add this plan", url: null },
            { label: "Buy Addon", url: null },
          ],
          addOns: [
            { name: "500MB", validity: "7", price: "7", currencySymbol: "﷼" },
            { name: "1GB", validity: "7", price: "12", currencySymbol: "﷼" },
            { name: "3GB", validity: "7", price: "25", currencySymbol: "﷼" },
            { name: "5GB", validity: "15", price: "39", currencySymbol: "﷼" },
            { name: "10GB", validity: "7", price: "30", currencySymbol: "﷼" },
            { name: "10GB", validity: "30", price: "65", currencySymbol: "﷼" },
            { name: "15GB", validity: "14", price: "45", currencySymbol: "﷼" },
            { name: "20GB", validity: "14", price: "55", currencySymbol: "﷼" },
            { name: "20GB", validity: "30", price: "85", currencySymbol: "﷼" },
            { name: "40GB", validity: "30", price: "85", currencySymbol: "﷼" },
            {
              name: "100GB",
              validity: "30",
              price: "160",
              currencySymbol: "﷼",
            },
            {
              name: "Unlimited",
              validity: "30",
              price: "325",
              currencySymbol: "﷼",
            },
          ],
          plans: [
            {
              name: "Solo 74",
              type: "Voice & Data",
              billingType: "Prepaid",
              price: 85.68,
              currencySymbol: "﷼",
              validity: 30.0,
              data: "20 GB",
              socialMedia: "20 GB",
              sms: "450",
            },
            {
              name: "Solo 99",
              type: "Voice & Data",
              billingType: "Prepaid",
              price: 113.85,
              currencySymbol: "﷼",
              validity: 30.0,
              data: "35 GB",
              socialMedia: "Unlimited",
              sms: "450",
            },
            {
              name: "Solo 149",
              type: "Voice & Data",
              billingType: "Prepaid",
              price: 171.35,
              currencySymbol: "﷼",
              validity: 30.0,
              data: "59 GB",
              socialMedia: "Unlimited",
              sms: "Unlimited",
            },
            {
              name: "Solo 160",
              type: "Voice & Data",
              billingType: "Prepaid",
              price: 184.0,
              currencySymbol: "﷼",
              validity: 60.0,
              data: "50 GB",
              socialMedia: "Unlimited",
              sms: "450",
            },
            {
              name: "Solo 240",
              type: "Voice & Data",
              billingType: "Prepaid",
              price: 276.0,
              currencySymbol: "﷼",
              validity: 90.0,
              data: "90 GB",
              socialMedia: "Unlimited",
              sms: "450",
            },
            {
              name: "Solo 340",
              type: "Voice & Data",
              billingType: "Prepaid",
              price: 333391.0,
              currencySymbol: "﷼",
              validity: 120.0,
              data: "135 GB",
              socialMedia: "Unlimited",
              sms: "450",
            },
            {
              name: "Solo 74",
              type: "Voice & Data",
              billingType: "Postpaid",
              price: 85.68,
              currencySymbol: "﷼",
              validity: 30.0,
              data: "20 GB",
              socialMedia: "20 GB",
              sms: "450",
            },
            {
              name: "Solo 99",
              type: "Voice & Data",
              billingType: "Prepaid",
              price: 113.85,
              currencySymbol: "﷼",
              validity: 30.0,
              data: "35 GB",
              socialMedia: "Unlimited",
              sms: "450",
            },
            {
              name: "Solo 149",
              type: "Voice & Data",
              billingType: "Postpaid",
              price: 171.35,
              currencySymbol: "﷼",
              validity: 30.0,
              data: "59 GB",
              socialMedia: "Unlimited",
              sms: "Unlimited",
            },
            {
              name: "Solo Infinite",
              type: "Voice & Data",
              billingType: "Postpaid",
              price: 412.85,
              currencySymbol: "﷼",
              validity: 30.0,
              data: "Unlimited",
              socialMedia: "Unlimited",
              sms: "Unlimited",
            },
          ],
          config: null,
        },
      },
    },
  };

  let plans = jsonData.data.data.item.plans;

  let getUniqueValues = (filteredData, trailString) => {
    let uniqueData = filteredData.filter(
      (data, index) => filteredData.indexOf(data) === index
    );
    let valueLabelPair = [];
    uniqueData.forEach((element) => {
      let numValue = element;
      console.log(`${element} "type" ${typeof element}`);
      valueLabelPair.push({
        value: numValue,
        label: `${numValue + " " + trailString}`,
      });
    });
    return valueLabelPair;
  };

  let validityArray = getUniqueValues(
    plans.map((plan) => plan.validity.toString()),
    "days"
  );

  let dataLimitArray = getUniqueValues(
    plans.map((plan) => plan.data.toString()),
    ""
  );

  console.log('dataLimitArray', dataLimitArray);

  function valuetext(value) {
    return `${value} days`;
  }

  function valueLabelFormat(value) {
    return validityArray.findIndex((validity) => validity.value === value) + 1;
  }

  function defaultValue(arr) {
    return arr[0].value;
  }

  return (
    <div className="App">
      <Box sx={{ width: 500, m: "30px" }}>
        <Card sx={{ minWidth: 500 }}>
          <CardContent>
            <Slider
              sx={{ m: "10px", width: 400 }}
              aria-label="Restricted values"
              defaultValue={defaultValue(validityArray)}
              valueLabelFormat={valueLabelFormat}
              getAriaValueText={valuetext}
              step={null}
              min={30}
              max={120}
              valueLabelDisplay="off"
              marks={validityArray}
            />
          </CardContent>
        </Card>
      </Box>
    </div>
  );
}
