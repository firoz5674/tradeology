import Image from "next/image";
import Banner from "./components/banner";
import PricingTable from "./components/pricing-table";

export default function Home() {
  return (
    <>
      <Banner />
      <PricingTable />
    </>
  );
}
