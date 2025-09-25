import FlashsaleSection from "@/features/Flashsale/FlashsaleSection";
import Header from "../../layout/header/header";
import ProductCategories from "../components/Category1";
import ProductCategoriesV2 from "../components/Category2";
import TabBooks from "../components/RankProducts";
const HomePage = () => {
  return (
    <div className="flex flex-col items-center gap-[20px] justify-center w-[1230px] h-full">
      <FlashsaleSection />
      <ProductCategories />
      <ProductCategoriesV2 />
      <TabBooks />
    </div>
  );
};

export default HomePage;
