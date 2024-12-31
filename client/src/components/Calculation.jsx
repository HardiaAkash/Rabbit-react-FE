import { useState } from "react";

import LeftDraw from "../assets/logo/left-draw.svg";
import RightDraw from "../assets/logo/right-draw.svg";
import { useFormik } from "formik";
import axios from "axios";
import Shipping from "./Shipping";

const Calculation = () => {
  async function convertCurrency(convert, base, amount) {
    const response = await axios.get(
      `https://api.freecurrencyapi.com/v1/latest?apikey=fca_live_VtwKKyZoP9UEk55HfPfmE51xSMtJdf0BeVHzIQwb&currencies=${convert}&base_currency=${base}`
    );

    const data = response.data;

    return {
      totalAmount: +(data.data[convert] * amount).toFixed(2),
      baseAmount: +data.data[convert].toFixed(2),
    };
  }
  function findClosestWeight(weight) {
    // eslint-disable-next-line no-undef
    return shippingRates.reduce((prev, curr) =>
      Math.abs(curr.weight - weight) < Math.abs(prev.weight - weight)
        ? curr
        : prev
    );
  }

  const [data, setData] = useState();
  const currenciesDummy = [
    { code: "AUD", country: "Australia" },
    { code: "BGN", country: "Bulgaria" },
    { code: "BRL", country: "Brazil" },
    { code: "CAD", country: "Canada" },
    { code: "CHF", country: "Switzerland" },
    { code: "CNY", country: "China" },
    { code: "CZK", country: "Czech Republic" },
    { code: "DKK", country: "Denmark" },
    { code: "EUR", country: "European Union" },
    { code: "GBP", country: "United Kingdom" },
    { code: "HKD", country: "Hong Kong" },
    { code: "HRK", country: "Croatia" },
    { code: "HUF", country: "Hungary" },
    { code: "IDR", country: "Indonesia" },
    { code: "ILS", country: "Israel" },
    { code: "INR", country: "India" },
    { code: "ISK", country: "Iceland" },
    { code: "JPY", country: "Japan" },
    { code: "KRW", country: "South Korea" },
    { code: "MXN", country: "Mexico" },
    { code: "MYR", country: "Malaysia" },
    { code: "NOK", country: "Norway" },
    { code: "NZD", country: "New Zealand" },
    { code: "PHP", country: "Philippines" },
    { code: "PLN", country: "Poland" },
    { code: "RON", country: "Romania" },
    { code: "RUB", country: "Russia" },
    { code: "SEK", country: "Sweden" },
    { code: "SGD", country: "Singapore" },
    { code: "THB", country: "Thailand" },
    { code: "TRY", country: "Turkey" },
    { code: "USD", country: "United States" },
    { code: "ZAR", country: "South Africa" },
  ];
  const currencies = currenciesDummy.sort((a, b) =>
    a.country.localeCompare(b.country)
  );

  const formik = useFormik({
    initialValues: {
      fromCountry: "AUD",
      toCountry: "INR",
      amount: "",
    },
    onSubmit: async (values) => {
      try {
        const response = await axios.post(
          "/api/currency-convert",
          {
            baseCurrency: values.fromCountry,
            convertCurrency: values.toCountry,
            amount: values.amount,
          }
        );

        // const res = await convertCurrency(
        //   values.toCountry,
        //   values.fromCountry,
        //   values.amount
        // );
        console.log(response, "res");

        setData(response?.data);
      } catch (err) {
        console.log("err in currency convert", err);
      }
    },
  });
// console.log(data);

  return (
    <div>
      <div
        className="px-4 sm:px-8 lg:px-[120px] w-full flex flex-col lg:flex-row gap-6 lg:gap-[50px] mt-[40px] lg:mt-[140px]"
        id="currency"
      >
        <div className="bg-white w-full px-4 sm:px-8 lg:px-[40px] pt-[20px] lg:pt-[40px] rounded-2xl pb-[40px] lg:pb-[123px]">
          <p className="text-[24px] lg:text-[30px] text-[#100E3F] font-bold">
            Currency Converter 
          </p>
          <form onSubmit={formik.handleSubmit}>
            <div className="pt-[20px] lg:pt-[30px]">
              <label htmlFor="from">From</label>
              <div className="flex border border-[#1111111A] py-1 rounded-md px-4">
                <input
                  className="focus-visible:outline-none w-full"
                  type="number"
                   step="any"
                  onChange={formik.handleChange}
                  value={formik.values.amount}
                  placeholder="Enter amount"
                  defaultValue="0"
                  name="amount"
                />
                <select
                  name="fromCountry"
                  onChange={formik.handleChange}
                  value={formik.values.fromCountry}
                  className="w-fit rounded-lg focus-visible:outline-none pl-3 h-[44px] focus-visible:border-black mt-1.5"
                >
                  {currencies.map((currency, index) => {
                    return (
                      <option
                        value={currency.code}
                        key={index}
                        defaultValue="AUD"
                      >
                        {currency.country}
                      </option>
                    );
                  })}
                </select>
              </div>
            </div>
            <div className="pt-2.5">
              <label htmlFor="to">To</label>
              <div className="flex border border-[#1111111A] py-1 rounded-md px-2">
                <input
                  className="focus-visible:outline-none w-full"
                  type="number"
                  step="any"
                  value={data && data.totalAmount}
                  disabled
                  placeholder="Value"
                  name="to"
                />
                <select
                  name="toCountry"
                  onChange={formik.handleChange}
                  value={formik.values.toCountry}
                  className="w-fit rounded-lg focus-visible:outline-none pl-3 h-[44px] focus-visible:border-black mt-1.5"
                >
                  {currencies.map((currency, index) => {
                    return (
                      <option
                        value={currency.code}
                        key={index}
                        defaultValue="INR"
                      >
                        {currency.country}
                      </option>
                    );
                  })}
                </select>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row pt-10 gap-4 sm:gap-7 items-start sm:items-center">
              <button className="bg-[#AF1E22] rounded-full py-3 px-6 sm:py-4 sm:px-8 text-white">
                Convert
              </button>
              {data && (
                <p className="text-[24px] sm:text-[32px] font-bold text-black">
                  {`1 ${formik.values.fromCountry} = `}
                  <span className="text-[#AF1E22]">{data.baseAmount}</span>
                  {` ${formik.values.toCountry}`}
                </p>
              )}
            </div>
          </form>
        </div>
        <Shipping />
      </div>
      <div className="justify-between hidden lg:flex">
        {/* <LeftDraw /> */}
        <img src={LeftDraw} alt="loading"/>
        <img src={RightDraw} alt="loading"/>

        {/* <RightDraw /> */}
      </div>
    </div>
  );
};

export default Calculation;
