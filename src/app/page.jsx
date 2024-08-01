import Header from "@/components/templates/homePage/header/Header";
import PopularProducts from "@/components/templates/homePage/popularProducts/PopularProducts";
import Articles from "@/components/templates/homePage/articles/Articles";
import TopProducts from "@/components/templates/homePage/topProducts/TopProducts";
import Computers from "@/components/templates/homePage/computers/Computers";
import PopularCategories from "@/components/templates/homePage/popularCategories/PopularCategories";
import NewProducts from "@/components/templates/homePage/newProducts/NewProducts";
import Navbar from "@/components/Modules/navbar/Navbar";
import Footer from "@/components/Modules/footer/Footer";
import MobilNavbar from "@/components/Modules/mobilNavbar/MobilNavbar";
export default function Home() {
  return (
    <main className="  container mx-auto pr-1 sm:pr-0 flex items-center justify-center  flex-col">
      <div className="hidden lg:block">
        <Navbar />
      </div>
      <div className="block lg:hidden container mx-auto p-2">
        <MobilNavbar />
      </div>
      <Header />
      <PopularProducts />
      <Articles />
      <TopProducts />
      <Computers />
      <PopularCategories />
      <NewProducts />
      <Footer />
    </main>
  );
}
