import PricingCard from "@/component/atoms/PricingCard";
import React from "react";
import tw from "twin.macro";

const Row = tw.div`flex w-full my-24`;
const Wrapper = tw.div`w-full gap-y-12 sm:(w-10/12 gap-y-0 gap-x-8) mx-auto grid grid-cols-12 `;

const TablePricing = () => {
  const listPricing = [
    {
      heading: "Landingpage",
      pricing: "Start from Rp 330K",
      subtitle:
        "Starter package to introducing you product to digital solutions",
      feature: ["Design", "Web Server", "Responsive Design", "1 Page"],
    },
    {
      heading: "Company Profile",
      pricing: "Start from Rp 750K",
      subtitle: "Company branding and robust your business",
      feature: ["Design", "Web Server", "Responsive Design", " 5 Page"],
    },
    {
      heading: "Custom",
      pricing: "Negotiation",
      subtitle: "Special packages for building custom websites as needed",
      feature: ["Full custom"],
    },
  ];
  return (
    <Row>
      <Wrapper>
        <PricingCard listPricing={listPricing} />
      </Wrapper>
    </Row>
  );
};

export default TablePricing;
