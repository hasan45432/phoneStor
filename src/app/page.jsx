import Header from "@/components/templates/homePage/header/Header";
import PopularProducts from "@/components/templates/homePage/popularProducts/PopularProducts";
import Articles from "@/components/templates/homePage/articles/Articles";
import TopProducts from "@/components/templates/homePage/topProducts/TopProducts";
import Computers from "@/components/templates/homePage/computers/Computers";
import PopularCategories from "@/components/templates/homePage/popularCategories/PopularCategories";
import NewProducts from "@/components/templates/homePage/newProducts/NewProducts";
export default function Home() {
  return (
    <main>
      <Header />
      <PopularProducts />
    </main>
  );
}
