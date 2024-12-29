import { useFormik } from "formik";
import axios from "axios";
import { useState } from "react";
import * as Yup from 'yup';

const shippingRates = [
  {
    weight: 0.5,
    USA: 2300,
    CANADA: 2400,
    EUROPE: 3000,
    AUSTRALIA: 3000,
    GREAT_BRITIAN_UK: 1800,
    GULF_COUNTRIES: 1200,
    OTHER_COUNTRIES: 1200,
    NEW_ZEALAND: 3000,
  },
  {
    weight: 1,
    USA: 2800,
    CANADA: 3000,
    EUROPE: 3200,
    AUSTRALIA: 3500,
    GREAT_BRITIAN_UK: 2100,
    GULF_COUNTRIES: 1500,
    OTHER_COUNTRIES: 1500,
    NEW_ZEALAND: 3500,
  },
  {
    weight: 1.5,
    USA: 3000,
    CANADA: 3100,
    EUROPE: 3400,
    AUSTRALIA: 4000,
    GREAT_BRITIAN_UK: 2300,
    GULF_COUNTRIES: 1700,
    OTHER_COUNTRIES: 1700,
    NEW_ZEALAND: 4000,
  },
  {
    weight: 2,
    USA: 3200,
    CANADA: 3200,
    EUROPE: 3600,
    AUSTRALIA: 4300,
    GREAT_BRITIAN_UK: 2400,
    GULF_COUNTRIES: 1800,
    OTHER_COUNTRIES: 1800,
    NEW_ZEALAND: 4300,
  },
  {
    weight: 2.5,
    USA: 3800,
    CANADA: 3800,
    EUROPE: 3900,
    AUSTRALIA: 4900,
    GREAT_BRITIAN_UK: 2500,
    GULF_COUNTRIES: 2000,
    OTHER_COUNTRIES: 2000,
    NEW_ZEALAND: 4900,
  },
  {
    weight: 3,
    USA: 4300,
    CANADA: 4400,
    EUROPE: 4200,
    AUSTRALIA: 5400,
    GREAT_BRITIAN_UK: 2600,
    GULF_COUNTRIES: 2200,
    OTHER_COUNTRIES: 2200,
    NEW_ZEALAND: 5400,
  },
  {
    weight: 3.5,
    USA: 4500,
    CANADA: 4600,
    EUROPE: 4500,
    AUSTRALIA: 5800,
    GREAT_BRITIAN_UK: 2800,
    GULF_COUNTRIES: 2300,
    OTHER_COUNTRIES: 2300,
    NEW_ZEALAND: 5800,
  },
  {
    weight: 4,
    USA: 4600,
    CANADA: 4800,
    EUROPE: 4800,
    AUSTRALIA: 6000,
    GREAT_BRITIAN_UK: 3000,
    GULF_COUNTRIES: 2400,
    OTHER_COUNTRIES: 2400,
    NEW_ZEALAND: 6000,
  },
  {
    weight: 4.5,
    USA: 5000,
    CANADA: 5100,
    EUROPE: 5200,
    AUSTRALIA: 6500,
    GREAT_BRITIAN_UK: 4000,
    GULF_COUNTRIES: 2500,
    OTHER_COUNTRIES: 2500,
    NEW_ZEALAND: 6500,
  },
  {
    weight: 5,
    USA: 5400,
    CANADA: 5500,
    EUROPE: 5600,
    AUSTRALIA: 6800,
    GREAT_BRITIAN_UK: 4500,
    GULF_COUNTRIES: 2600,
    OTHER_COUNTRIES: 2600,
    NEW_ZEALAND: 6800,
  },
  {
    weight: 5.5,
    USA: 4800,
    CANADA: 4800,
    EUROPE: 5100,
    AUSTRALIA: 5700,
    GREAT_BRITIAN_UK: 4500,
    GULF_COUNTRIES: 2700,
    OTHER_COUNTRIES: 2700,
    NEW_ZEALAND: 5700,
  },
  {
    weight: 6,
    USA: 4800,
    CANADA: 4800,
    EUROPE: 5100,
    AUSTRALIA: 5700,
    GREAT_BRITIAN_UK: 4500,
    GULF_COUNTRIES: 2700,
    OTHER_COUNTRIES: 2700,
    NEW_ZEALAND: 5700,
  },
  {
    weight: 6.5,
    USA: 5600,
    CANADA: 5600,
    EUROPE: 5950,
    AUSTRALIA: 6650,
    GREAT_BRITIAN_UK: 5250,
    GULF_COUNTRIES: 3150,
    OTHER_COUNTRIES: 3150,
    NEW_ZEALAND: 6650,
  },
  {
    weight: 7,
    USA: 5600,
    CANADA: 5600,
    EUROPE: 5950,
    AUSTRALIA: 6650,
    GREAT_BRITIAN_UK: 5250,
    GULF_COUNTRIES: 3150,
    OTHER_COUNTRIES: 3150,
    NEW_ZEALAND: 6650,
  },
  {
    weight: 7.5,
    USA: 6400,
    CANADA: 6400,
    EUROPE: 6800,
    AUSTRALIA: 7600,
    GREAT_BRITIAN_UK: 6000,
    GULF_COUNTRIES: 3600,
    OTHER_COUNTRIES: 3600,
    NEW_ZEALAND: 7600,
  },
  {
    weight: 8,
    USA: 6400,
    CANADA: 6400,
    EUROPE: 6800,
    AUSTRALIA: 7600,
    GREAT_BRITIAN_UK: 6000,
    GULF_COUNTRIES: 3600,
    OTHER_COUNTRIES: 3600,
    NEW_ZEALAND: 7600,
  },
  {
    weight: 8.5,
    USA: 7200,
    CANADA: 7200,
    EUROPE: 7650,
    AUSTRALIA: 8550,
    GREAT_BRITIAN_UK: 6750,
    GULF_COUNTRIES: 4050,
    OTHER_COUNTRIES: 4050,
    NEW_ZEALAND: 8550,
  },
  {
    weight: 9,
    USA: 7200,
    CANADA: 7200,
    EUROPE: 7650,
    AUSTRALIA: 8550,
    GREAT_BRITIAN_UK: 6750,
    GULF_COUNTRIES: 4050,
    OTHER_COUNTRIES: 4050,
    NEW_ZEALAND: 8550,
  },
  {
    weight: 9.5,
    USA: 8000,
    CANADA: 8000,
    EUROPE: 8500,
    AUSTRALIA: 9500,
    GREAT_BRITIAN_UK: 7500,
    GULF_COUNTRIES: 4500,
    OTHER_COUNTRIES: 4500,
    NEW_ZEALAND: 9500,
  },
  {
    weight: 10,
    USA: 8000,
    CANADA: 8000,
    EUROPE: 8500,
    AUSTRALIA: 9500,
    GREAT_BRITIAN_UK: 7500,
    GULF_COUNTRIES: 4500,
    OTHER_COUNTRIES: 4500,
    NEW_ZEALAND: 9500,
  },
  {
    weight: 10.5,
    USA: 8250,
    CANADA: 8250,
    EUROPE: 9130,
    AUSTRALIA: 9900,
    GREAT_BRITIAN_UK: 7920,
    GULF_COUNTRIES: 4620,
    OTHER_COUNTRIES: 4620,
    NEW_ZEALAND: 9900,
  },
  {
    weight: 11,
    USA: 8250,
    CANADA: 8250,
    EUROPE: 9130,
    AUSTRALIA: 9900,
    GREAT_BRITIAN_UK: 7920,
    GULF_COUNTRIES: 4620,
    OTHER_COUNTRIES: 4620,
    NEW_ZEALAND: 9900,
  },
  {
    weight: 11.5,
    USA: 9000,
    CANADA: 9000,
    EUROPE: 9960,
    AUSTRALIA: 10800,
    GREAT_BRITIAN_UK: 8640,
    GULF_COUNTRIES: 5040,
    OTHER_COUNTRIES: 5040,
    NEW_ZEALAND: 10800,
  },
  {
    weight: 12,
    USA: 9000,
    CANADA: 9000,
    EUROPE: 9960,
    AUSTRALIA: 10800,
    GREAT_BRITIAN_UK: 8640,
    GULF_COUNTRIES: 5040,
    OTHER_COUNTRIES: 5040,
    NEW_ZEALAND: 10800,
  },
  {
    weight: 12.5,
    USA: 9750,
    CANADA: 9750,
    EUROPE: 10790,
    AUSTRALIA: 11700,
    GREAT_BRITIAN_UK: 9360,
    GULF_COUNTRIES: 5460,
    OTHER_COUNTRIES: 5460,
    NEW_ZEALAND: 11700,
  },
  {
    weight: 13,
    USA: 9750,
    CANADA: 9750,
    EUROPE: 10790,
    AUSTRALIA: 11700,
    GREAT_BRITIAN_UK: 9360,
    GULF_COUNTRIES: 5460,
    OTHER_COUNTRIES: 5460,
    NEW_ZEALAND: 11700,
  },
  {
    weight: 13.5,
    USA: 10500,
    CANADA: 10500,
    EUROPE: 11620,
    AUSTRALIA: 12600,
    GREAT_BRITIAN_UK: 10080,
    GULF_COUNTRIES: 5880,
    OTHER_COUNTRIES: 5880,
    NEW_ZEALAND: 12600,
  },
  {
    weight: 14,
    USA: 10500,
    CANADA: 10500,
    EUROPE: 11620,
    AUSTRALIA: 12600,
    GREAT_BRITIAN_UK: 10080,
    GULF_COUNTRIES: 5880,
    OTHER_COUNTRIES: 5880,
    NEW_ZEALAND: 12600,
  },
  {
    weight: 14.5,
    USA: 11250,
    CANADA: 11250,
    EUROPE: 12450,
    AUSTRALIA: 13500,
    GREAT_BRITIAN_UK: 10800,
    GULF_COUNTRIES: 6300,
    OTHER_COUNTRIES: 6300,
    NEW_ZEALAND: 13500,
  },
  {
    weight: 15,
    USA: 11250,
    CANADA: 11250,
    EUROPE: 12450,
    AUSTRALIA: 13500,
    GREAT_BRITIAN_UK: 10800,
    GULF_COUNTRIES: 6300,
    OTHER_COUNTRIES: 6300,
    NEW_ZEALAND: 13500,
  },
  {
    weight: 15.5,
    USA: 11840,
    CANADA: 12000,
    EUROPE: 12800,
    AUSTRALIA: 14080,
    GREAT_BRITIAN_UK: 11200,
    GULF_COUNTRIES: 6400,
    OTHER_COUNTRIES: 6400,
    NEW_ZEALAND: 14080,
  },
  {
    weight: 16,
    USA: 11840,
    CANADA: 12000,
    EUROPE: 12800,
    AUSTRALIA: 14080,
    GREAT_BRITIAN_UK: 11200,
    GULF_COUNTRIES: 6400,
    OTHER_COUNTRIES: 6400,
    NEW_ZEALAND: 14080,
  },
  {
    weight: 16.5,
    USA: 12580,
    CANADA: 12750,
    EUROPE: 13600,
    AUSTRALIA: 14960,
    GREAT_BRITIAN_UK: 11900,
    GULF_COUNTRIES: 6800,
    OTHER_COUNTRIES: 6800,
    NEW_ZEALAND: 14960,
  },
  {
    weight: 17,
    USA: 12580,
    CANADA: 12750,
    EUROPE: 13600,
    AUSTRALIA: 14960,
    GREAT_BRITIAN_UK: 11900,
    GULF_COUNTRIES: 6800,
    OTHER_COUNTRIES: 6800,
    NEW_ZEALAND: 14960,
  },
  {
    weight: 17.5,
    USA: 13320,
    CANADA: 13500,
    EUROPE: 14400,
    AUSTRALIA: 15840,
    GREAT_BRITIAN_UK: 12600,
    GULF_COUNTRIES: 7200,
    OTHER_COUNTRIES: 7200,
    NEW_ZEALAND: 15840,
  },
  {
    weight: 18,
    USA: 13320,
    CANADA: 13500,
    EUROPE: 14400,
    AUSTRALIA: 15840,
    GREAT_BRITIAN_UK: 12600,
    GULF_COUNTRIES: 7200,
    OTHER_COUNTRIES: 7200,
    NEW_ZEALAND: 15840,
  },
  {
    weight: 18.5,
    USA: 14060,
    CANADA: 14250,
    EUROPE: 15200,
    AUSTRALIA: 16720,
    GREAT_BRITIAN_UK: 13300,
    GULF_COUNTRIES: 7600,
    OTHER_COUNTRIES: 7600,
    NEW_ZEALAND: 16720,
  },
  {
    weight: 19,
    USA: 14060,
    CANADA: 14250,
    EUROPE: 15200,
    AUSTRALIA: 16720,
    GREAT_BRITIAN_UK: 13300,
    GULF_COUNTRIES: 7600,
    OTHER_COUNTRIES: 7600,
    NEW_ZEALAND: 16720,
  },
  {
    weight: 19.5,
    USA: 14800,
    CANADA: 15000,
    EUROPE: 16000,
    AUSTRALIA: 17600,
    GREAT_BRITIAN_UK: 14000,
    GULF_COUNTRIES: 8000,
    OTHER_COUNTRIES: 8000,
    NEW_ZEALAND: 17600,
  },
  {
    weight: 20,
    USA: 14800,
    CANADA: 15000,
    EUROPE: 16000,
    AUSTRALIA: 17600,
    GREAT_BRITIAN_UK: 14000,
    GULF_COUNTRIES: 8000,
    OTHER_COUNTRIES: 8000,
    NEW_ZEALAND: 17600,
  },
  {
    weight: 21,
    USA: 15330,
    CANADA: 15540,
    EUROPE: 16275,
    AUSTRALIA: 17850,
    GREAT_BRITIAN_UK: 14280,
    GULF_COUNTRIES: 8400,
    OTHER_COUNTRIES: 8400,
    NEW_ZEALAND: 17850,
  },
  {
    weight: 22,
    USA: 16060,
    CANADA: 16280,
    EUROPE: 17050,
    AUSTRALIA: 18700,
    GREAT_BRITIAN_UK: 14960,
    GULF_COUNTRIES: 8800,
    OTHER_COUNTRIES: 8800,
    NEW_ZEALAND: 18700,
  },
  {
    weight: 23,
    USA: 16790,
    CANADA: 17020,
    EUROPE: 17825,
    AUSTRALIA: 19550,
    GREAT_BRITIAN_UK: 15640,
    GULF_COUNTRIES: 9200,
    OTHER_COUNTRIES: 9200,
    NEW_ZEALAND: 19550,
  },
  {
    weight: 24,
    USA: 17520,
    CANADA: 17760,
    EUROPE: 18600,
    AUSTRALIA: 20400,
    GREAT_BRITIAN_UK: 16320,
    GULF_COUNTRIES: 9600,
    OTHER_COUNTRIES: 9600,
    NEW_ZEALAND: 20400,
  },
  {
    weight: 25,
    USA: 18250,
    CANADA: 18500,
    EUROPE: 19375,
    AUSTRALIA: 21250,
    GREAT_BRITIAN_UK: 17000,
    GULF_COUNTRIES: 10000,
    OTHER_COUNTRIES: 10000,
    NEW_ZEALAND: 21250,
  },
  {
    weight: 26,
    USA: 18980,
    CANADA: 19240,
    EUROPE: 20150,
    AUSTRALIA: 22100,
    GREAT_BRITIAN_UK: 17680,
    GULF_COUNTRIES: 10400,
    OTHER_COUNTRIES: 10400,
    NEW_ZEALAND: 22100,
  },
  {
    weight: 27,
    USA: 19710,
    CANADA: 19980,
    EUROPE: 20925,
    AUSTRALIA: 22950,
    GREAT_BRITIAN_UK: 18360,
    GULF_COUNTRIES: 10800,
    OTHER_COUNTRIES: 10800,
    NEW_ZEALAND: 22950,
  },
  {
    weight: 28,
    USA: 20440,
    CANADA: 20720,
    EUROPE: 21700,
    AUSTRALIA: 23800,
    GREAT_BRITIAN_UK: 19040,
    GULF_COUNTRIES: 11200,
    OTHER_COUNTRIES: 11200,
    NEW_ZEALAND: 23800,
  },
  {
    weight: 29,
    USA: 21170,
    CANADA: 21460,
    EUROPE: 22475,
    AUSTRALIA: 24650,
    GREAT_BRITIAN_UK: 19720,
    GULF_COUNTRIES: 11600,
    OTHER_COUNTRIES: 11600,
    NEW_ZEALAND: 24650,
  },
  {
    weight: 30,
    USA: 21900,
    CANADA: 22200,
    EUROPE: 23250,
    AUSTRALIA: 25500,
    GREAT_BRITIAN_UK: 20400,
    GULF_COUNTRIES: 12000,
    OTHER_COUNTRIES: 12000,
    NEW_ZEALAND: 25500,
  },
  {
    weight: "30-50",
    USA: 720,
    CANADA: 720,
    EUROPE: 700,
    AUSTRALIA: 840,
    GREAT_BRITIAN_UK: 660,
    GULF_COUNTRIES: 400,
    OTHER_COUNTRIES: 400,
    NEW_ZEALAND: 840,
  },
];

// const shippingRates = [
//   {
//     weight: 0.5,
//     USA: 2300,
//     CANADA: 2400,
//     EUROPE: 3000,
//     AUSTRALIA_NEW_ZEALAND: 3000,
//     UK: 1800,
//     GULF_COUNTRIES: 1200,

//   },
//   {
//     weight: 1,
//     USA: 2800,
//     CANADA: 3000,
//     EUROPE: 3200,
//     AUSTRALIA_NEW_ZEALAND: 3500,
//     UK: 2100,
//     GULF_COUNTRIES: 1500,
//   },
//   {
//     weight: 1.5,
//     USA: 3000,
//     CANADA: 3100,
//     EUROPE: 3400,
//     AUSTRALIA_NEW_ZEALAND: 4000,
//     UK: 2300,
//     GULF_COUNTRIES: 1700,
//   },
//   {
//     weight: 2,
//     USA: 3200,
//     CANADA: 3200,
//     EUROPE: 3600,
//     AUSTRALIA_NEW_ZEALAND: 4300,
//     UK: 2400,
//     GULF_COUNTRIES: 1800,
//   },
//   {
//     weight: 2.5,
//     USA: 3800,
//     CANADA: 3800,
//     EUROPE: 3900,
//     AUSTRALIA_NEW_ZEALAND: 4900,
//     UK: 2500,
//     GULF_COUNTRIES: 2000,
//   },
//   {
//     weight: 3,
//     USA: 4300,
//     CANADA: 4400,
//     EUROPE: 4200,
//     AUSTRALIA_NEW_ZEALAND: 5400,
//     UK: 2600,
//     GULF_COUNTRIES: 2200,
//   },
//   {
//     weight: 3.5,
//     USA: 4500,
//     CANADA: 4600,
//     EUROPE: 4500,
//     AUSTRALIA_NEW_ZEALAND: 5800,
//     UK: 2800,
//     GULF_COUNTRIES: 2300,
//   },
//   {
//     weight: 4,
//     USA: 4600,
//     CANADA: 4800,
//     EUROPE: 4800,
//     AUSTRALIA_NEW_ZEALAND: 6000,
//     UK: 3000,
//     GULF_COUNTRIES: 2400,
//   },
//   {
//     weight: 4.5,
//     USA: 5000,
//     CANADA: 5100,
//     EUROPE: 5200,
//     AUSTRALIA_NEW_ZEALAND: 6500,
//     UK: 4000,
//     GULF_COUNTRIES: 2500,
//   },
//   {
//     weight: 5,
//     USA: 5400,
//     CANADA: 5500,
//     EUROPE: 5600,
//     AUSTRALIA_NEW_ZEALAND: 6800,
//     UK: 4500,
//     GULF_COUNTRIES: 2600,
//   },
//   {
//     weight: 5.5,
//     USA: 4800,
//     CANADA: 4800,
//     EUROPE: 5100,
//     AUSTRALIA_NEW_ZEALAND: 5700,
//     UK: 4500,
//     GULF_COUNTRIES: 2700,
//   },
//   {
//     weight: 6,
//     USA: 4800,
//     CANADA: 4800,
//     EUROPE: 5100,
//     AUSTRALIA_NEW_ZEALAND: 5700,
//     UK: 4500,
//     GULF_COUNTRIES: 2700,
//   },
//   {
//     weight: 6.5,
//     USA: 5600,
//     CANADA: 5600,
//     EUROPE: 5950,
//     AUSTRALIA_NEW_ZEALAND: 6650,
//     UK: 5250,
//     GULF_COUNTRIES: 3150,
//   },
//   {
//     weight: 7,
//     USA: 5600,
//     CANADA: 5600,
//     EUROPE: 5950,
//     AUSTRALIA_NEW_ZEALAND: 6650,
//     UK: 5250,
//     GULF_COUNTRIES: 3150,
//   },
//   {
//     weight: 7.5,
//     USA: 6400,
//     CANADA: 6400,
//     EUROPE: 6800,
//     AUSTRALIA_NEW_ZEALAND: 7600,
//     UK: 6000,
//     GULF_COUNTRIES: 3600,
//   },
//   {
//     weight: 8,
//     USA: 6400,
//     CANADA: 6400,
//     EUROPE: 6800,
//     AUSTRALIA_NEW_ZEALAND: 7600,
//     UK: 6000,
//     GULF_COUNTRIES: 3600,
//   },
//   {
//     weight: 8.5,
//     USA: 7200,
//     CANADA: 7200,
//     EUROPE: 7650,
//     AUSTRALIA_NEW_ZEALAND: 8550,
//     UK: 6750,
//     GULF_COUNTRIES: 4050,
//   },
//   {
//     weight: 9,
//     USA: 7200,
//     CANADA: 7200,
//     EUROPE: 7650,
//     AUSTRALIA_NEW_ZEALAND: 8550,
//     UK: 6750,
//     GULF_COUNTRIES: 4050,
//   },
//   {
//     weight: 9.5,
//     USA: 8000,
//     CANADA: 8000,
//     EUROPE: 8500,
//     AUSTRALIA_NEW_ZEALAND: 9500,
//     UK: 7500,
//     GULF_COUNTRIES: 4500,
//   },
//   {
//     weight: 10,
//     USA: 8000,
//     CANADA: 8000,
//     EUROPE: 8500,
//     AUSTRALIA_NEW_ZEALAND: 9500,
//     UK: 7500,
//     GULF_COUNTRIES: 4500,
//   },
//   {
//     weight: 10.5,
//     USA: 8250,
//     CANADA: 8250,
//     EUROPE: 9130,
//     AUSTRALIA_NEW_ZEALAND: 9900,
//     UK: 7920,
//     GULF_COUNTRIES: 4620,
//   },
//   {
//     weight: 11,
//     USA: 8250,
//     CANADA: 8250,
//     EUROPE: 9130,
//     AUSTRALIA_NEW_ZEALAND: 9900,
//     UK: 7920,
//     GULF_COUNTRIES: 4620,
//   },
//   {
//     weight: 11.5,
//     USA: 9000,
//     CANADA: 9000,
//     EUROPE: 9960,
//     AUSTRALIA_NEW_ZEALAND: 10800,
//     UK: 8640,
//     GULF_COUNTRIES: 5040,
//   },
//   {
//     weight: 12,
//     USA: 9000,
//     CANADA: 9000,
//     EUROPE: 9960,
//     AUSTRALIA_NEW_ZEALAND: 10800,
//     UK: 8640,
//     GULF_COUNTRIES: 5040,
//   },
//   {
//     weight: 12.5,
//     USA: 9750,
//     CANADA: 9750,
//     EUROPE: 10790,
//     AUSTRALIA_NEW_ZEALAND: 11700,
//     UK: 9360,
//     GULF_COUNTRIES: 5460,
//   },
//   {
//     weight: 13,
//     USA: 9750,
//     CANADA: 9750,
//     EUROPE: 10790,
//     AUSTRALIA_NEW_ZEALAND: 11700,
//     UK: 9360,
//     GULF_COUNTRIES: 5460,
//   },
//   {
//     weight: 13.5,
//     USA: 10500,
//     CANADA: 10500,
//     EUROPE: 11620,
//     AUSTRALIA_NEW_ZEALAND: 12600,
//     UK: 10080,
//     GULF_COUNTRIES: 5880,
//   },
//   {
//     weight: 14,
//     USA: 10500,
//     CANADA: 10500,
//     EUROPE: 11620,
//     AUSTRALIA_NEW_ZEALAND: 12600,
//     UK: 10080,
//     GULF_COUNTRIES: 5880,
//   },
//   {
//     weight: 14.5,
//     USA: 11250,
//     CANADA: 11250,
//     EUROPE: 12450,
//     AUSTRALIA_NEW_ZEALAND: 13500,
//     UK: 10800,
//     GULF_COUNTRIES: 6300,
//   },
//   {
//     weight: 15,
//     USA: 11250,
//     CANADA: 11250,
//     EUROPE: 12450,
//     AUSTRALIA_NEW_ZEALAND: 13500,
//     UK: 10800,
//     GULF_COUNTRIES: 6300,
//   },
//   {
//     weight: 15.5,
//     USA: 11840,
//     CANADA: 12000,
//     EUROPE: 12800,
//     AUSTRALIA_NEW_ZEALAND: 14080,
//     UK: 11200,
//     GULF_COUNTRIES: 6400,
//   },
//   {
//     weight: 16,
//     USA: 11840,
//     CANADA: 12000,
//     EUROPE: 12800,
//     AUSTRALIA_NEW_ZEALAND: 14080,
//     UK: 11200,
//     GULF_COUNTRIES: 6400,
//   },
//   {
//     weight: 16.5,
//     USA: 12580,
//     CANADA: 12750,
//     EUROPE: 13600,
//     AUSTRALIA_NEW_ZEALAND: 14960,
//     UK: 11900,
//     GULF_COUNTRIES: 6800,
//   },
//   {
//     weight: 17,
//     USA: 12580,
//     CANADA: 12750,
//     EUROPE: 13600,
//     AUSTRALIA_NEW_ZEALAND: 14960,
//     UK: 11900,
//     GULF_COUNTRIES: 6800,
//   },
//   {
//     weight: 17.5,
//     USA: 13320,
//     CANADA: 13500,
//     EUROPE: 14400,
//     AUSTRALIA_NEW_ZEALAND: 15840,
//     UK: 12600,
//     GULF_COUNTRIES: 7200,
//   },
//   {
//     weight: 18,
//     USA: 13320,
//     CANADA: 13500,
//     EUROPE: 14400,
//     AUSTRALIA_NEW_ZEALAND: 15840,
//     UK: 12600,
//     GULF_COUNTRIES: 7200,
//   },
//   {
//     weight: 18.5,
//     USA: 14060,
//     CANADA: 14250,
//     EUROPE: 15200,
//     AUSTRALIA_NEW_ZEALAND: 16720,
//     UK: 13300,
//     GULF_COUNTRIES: 7600,
//   },
//   {
//     weight: 19,
//     USA: 14060,
//     CANADA: 14250,
//     EUROPE: 15200,
//     AUSTRALIA_NEW_ZEALAND: 16720,
//     UK: 13300,
//     GULF_COUNTRIES: 7600,
//   },
//   {
//     weight: 19.5,
//     USA: 14800,
//     CANADA: 15000,
//     EUROPE: 16000,
//     AUSTRALIA_NEW_ZEALAND: 17600,
//     UK: 14000,
//     GULF_COUNTRIES: 8000,
//   },
//   {
//     weight: 20,
//     USA: 14800,
//     CANADA: 15000,
//     EUROPE: 16000,
//     AUSTRALIA_NEW_ZEALAND: 17600,
//     UK: 14000,
//     GULF_COUNTRIES: 8000,
//   },
//   {
//     weight: 21,
//     USA: 15330,
//     CANADA: 15540,
//     EUROPE: 16275,
//     AUSTRALIA_NEW_ZEALAND: 17850,
//     UK: 14280,
//     GULF_COUNTRIES: 8400,
//   },
//   {
//     weight: 22,
//     USA: 16060,
//     CANADA: 16280,
//     EUROPE: 17050,
//     AUSTRALIA_NEW_ZEALAND: 18700,
//     UK: 14960,
//     GULF_COUNTRIES: 8800,
//   },
//   {
//     weight: 23,
//     USA: 16790,
//     CANADA: 17020,
//     EUROPE: 17825,
//     AUSTRALIA_NEW_ZEALAND: 19550,
//     UK: 15640,
//     GULF_COUNTRIES: 9200,
//   },
//   {
//     weight: 24,
//     USA: 17520,
//     CANADA: 17760,
//     EUROPE: 18600,
//     AUSTRALIA_NEW_ZEALAND: 20400,
//     UK: 16320,
//     GULF_COUNTRIES: 9600,
//   },
//   {
//     weight: 25,
//     USA: 18250,
//     CANADA: 18500,
//     EUROPE: 19375,
//     AUSTRALIA_NEW_ZEALAND: 21250,
//     UK: 17000,
//     GULF_COUNTRIES: 10000,
//   },
//   {
//     weight: 26,
//     USA: 18980,
//     CANADA: 19240,
//     EUROPE: 20150,
//     AUSTRALIA_NEW_ZEALAND: 22100,
//     UK: 17680,
//     GULF_COUNTRIES: 10400,
//   },
//   {
//     weight: 27,
//     USA: 19710,
//     CANADA: 19980,
//     EUROPE: 20925,
//     AUSTRALIA_NEW_ZEALAND: 22950,
//     UK: 18360,
//     GULF_COUNTRIES: 10800,
//   },
//   {
//     weight: 28,
//     USA: 20440,
//     CANADA: 20720,
//     EUROPE: 21700,
//     AUSTRALIA_NEW_ZEALAND: 23800,
//     UK: 19040,
//     GULF_COUNTRIES: 11200,
//   },
//   {
//     weight: 29,
//     USA: 21170,
//     CANADA: 21460,
//     EUROPE: 22475,
//     AUSTRALIA_NEW_ZEALAND: 24650,
//     UK: 19720,
//     GULF_COUNTRIES: 11600,
//   },
//   {
//     weight: 30,
//     USA: 21900,
//     CANADA: 22200,
//     EUROPE: 23250,
//     AUSTRALIA_NEW_ZEALAND: 25500,
//     UK: 20400,
//     GULF_COUNTRIES: 12000,
//   },
//   {
//     weight: "30-50",
//     USA: 720,
//     CANADA: 720,
//     EUROPE: 700,
//     AUSTRALIA_NEW_ZEALAND: 840,
//     UK: 660,
//     GULF_COUNTRIES: 400,
//   },
// ];

const Shipping = () => {
  const [data, setData] = useState();
  const validationSchema = Yup.object({
    weight: Yup.number()
      .required("Please enter the weight")
      .positive("Weight must be a positive number")
      .min(0.5, "Weight must be at least 0.5 kg"),
    country: Yup.string().required("Please select a country"),
  });
  function findClosestWeight(weight) {
    return shippingRates.reduce((prev, curr) =>
      Math.abs(curr.weight - weight) < Math.abs(prev.weight - weight)
        ? curr
        : prev
    );
  }
  function calculation(weight, country) {
    console.log(weight, country, "weight coutnry");

    const rate = findClosestWeight(weight);
    const countryUpper = country;
    const costPerKg = rate[countryUpper];

    let cost;
    if (weight > 30) {
      // If weight is greater than 30 kg, apply the rate from the "30-50" range
      const baseRate = shippingRates.find((r) => r.weight === "30-50");
      // console.log(baseRate);
      // console.log(countryUpper);
      
      const perKgRate = baseRate[countryUpper];
      // console.log(perKgRate);
      
      const additionalWeight = weight - 30;
      cost = 21900 + additionalWeight * perKgRate;
    } else if (typeof rate.weight === "string") {
      // Special handling for the 30-50kg range in case weight exactly matches
      const extraWeight = weight - 30;
      cost = 21900 + extraWeight * costPerKg;
    } else {
      cost = costPerKg;
    }
    return {
      weight,
      country,
      cost,
    };
  }
  const formik = useFormik({
    initialValues: {
      weight: "",
      country: "USA",
      medicine: "",
      packageType: "",
    },
    validationSchema,
    onSubmit: async (values) => {
      try {
        // const response = await axios.post(
        //   "http://3.138.140.180:3000/api/calculate-shipping",
        //   {
        //     weight: values.weight,
        //     country: values.country,
        //   }
        // );
        // console.log(response.data);

        const response = calculation(values.weight, values.country);
        setData(response);

        // setData(response.data);
      } catch (err) {
        console.log("err in Shipping Calculation", err);
      }
    },
  });

  return (
    <form
      className="w-full bg-white rounded-2xl"
      onSubmit={formik.handleSubmit}
    >
      <div
        className="bg-white w-full mt-10 lg:mt-0 pt-6 lg:pt-[35px] px-4 sm:px-8 lg:px-[40px] text-[#100E3F] rounded-2xl h-fit pb-6 lg:pb-[40px]"
        id="quote"
      >
        <p className="text-xl lg:text-3xl font-bold">Shipping Calculator</p>
        <div className="flex flex-col gap-6 lg:gap-[30px] mt-6 lg:mt-[35px]">
          <div className="flex flex-col lg:flex-row w-full gap-6 lg:gap-[30px]">
            <div className="w-full">
              <label htmlFor="country" className="block">
                Destination Country
              </label>
              <select
                name="country"
                id="country"
                onChange={formik.handleChange}
                value={formik.values.country}
                defaultValue="USA"
                className="w-full border border-[#1111111A] rounded-lg focus-visible:outline-none pl-3 h-[44px] focus-visible:border-black mt-1.5"
              >
                <option value="AUSTRALIA">Australia</option>
                <option value="CANADA">Canada</option>
                <option value="EUROPE">Europe</option>
                <option value="NEW_ZEALAND">New Zealand</option>
                <option value="GREAT_BRITIAN_UK">UK</option>
                {/* <option value="uae">UAE</option> */}
                <option value="USA">USA</option>
                <option value="GULF_COUNTRIES">Gulf Country</option>
                <option value="OTHER_COUNTRIES">Other Country</option>
              </select>
            </div>
            <div className="w-full">
              <label htmlFor="weight">Weight (KG):</label>
              <input
                className="w-full border border-[#1111111A] rounded-lg focus-visible:outline-none pl-3 h-[44px] focus-visible:border-black mt-1.5"
                type="number"
                step="any"
                name="weight"
                onChange={formik.handleChange}
                value={formik.values.weight}
              />
              {formik.touched.weight && formik.errors.weight ? (
                <div className="text-red-500 text-sm mt-1">
                  {formik.errors.weight}
                </div>
              ) : null}
            </div>
          </div>
          <div className="flex flex-col lg:flex-row w-full gap-6 lg:gap-[30px]">
            <div className="w-full">
              <p>Does the consignment have Medicine?</p>
              <div className="flex items-center space-x-4 mt-2">
                <label className="flex items-center cursor-pointer">
                  <input
                    type="radio"
                    name="medicine"
                    value="yes"
                    onChange={formik.handleChange}
                    checked={formik.values.medicine === "yes"}
                    className="hidden peer"
                  />
                  <div className="w-5 h-5 border-2 border-gray-400 rounded-full flex items-center justify-center peer-checked:bg-[#AF1E22] peer-checked:border-[#AF1E22]">
                    <div className="w-2.5 h-2.5 bg-white rounded-full hidden peer-checked:block"></div>
                  </div>
                  <span className="ml-2 text-gray-900">Yes</span>
                </label>
                <label className="flex items-center cursor-pointer">
                  <input
                    type="radio"
                    name="medicine"
                    value="no"
                    onChange={formik.handleChange}
                    checked={formik.values.medicine === "no"}
                    className="hidden peer"
                  />
                  <div className="w-5 h-5 border-2 border-gray-400 rounded-full flex items-center justify-center peer-checked:border-[#AF1E22] peer-checked:bg-[#AF1E22]">
                    <div className="w-2.5 h-2.5 bg-white rounded-full hidden peer-checked:block"></div>
                  </div>
                  <span className="ml-2 text-gray-900">No</span>
                </label>
              </div>
            </div>
            <div className="w-full">
              <label htmlFor="destinationCountry" className="block">
                Package Type:
              </label>
              <select
                name="packageType"
                id="packageType"
                onChange={formik.handleChange}
                value={formik.values.packageType}
                className="w-full border border-[#1111111A] rounded-lg focus-visible:outline-none pl-3 h-[44px] focus-visible:border-black mt-1.5"
              >
                <option value="non-docs">Non Docs</option>
                <option value="docs">Docs</option>
              </select>
            </div>
          </div>
        </div>
        <div className="flex w-full items-center gap-5 mt-[20px] lg:mt-[50px]">
          <button className="w-fit px-[32px] py-[16px] rounded-full bg-[#AF1E22] text-white">
            Get a Quote
          </button>
          {data && (
            <p className="text-[18px] sm:text-[24px] font-bold text-black">
              {`Approx. Cost : `}
              <span className="text-[#AF1E22]">{`${data.cost} INR`}</span>
            </p>
          )}
        </div>
        <p className="text-[#AF1E22] text-base font-normal mt-5">
          Disclaimer: Rabbit Speed provides shipping services worldwide
          originating from India.
        </p>
      </div>
    </form>
  );
};

export default Shipping;
