import Breadcrumb from "@/components/Breadcrumb";
import ProductPage from "@/components/Product";
import ProductTabs from "@/components/ProductTabs";

export default function Home() {
  return (
    <div className="bg-[#F6F6F6]">
       <Breadcrumb />
      <ProductPage />
      <ProductTabs />
    </div>
  );
}
