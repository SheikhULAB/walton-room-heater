import AppDownloadBanner from "@/components/AppDownloadBanner";
import Breadcrumb from "@/components/Breadcrumb";
import Header from "@/components/Header";
import ProductPage from "@/components/Product";
import ProductTabs from "@/components/ProductTabs";

export default function Home() {
  return (
    <div className="bg-[#F6F6F6]">
      <Header />
      <AppDownloadBanner />
       <Breadcrumb />
      <ProductPage />
      <ProductTabs />
    </div>
  );
}
