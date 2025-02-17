import Footer from "../../components/application/footer/Footer";
import Hero from "../../components/application/hero/Hero";
import NavigationBar from "../../components/application/navigation-bar/NavigationBar";
import ProductsSection from "../../components/application/products-section/ProductsSection";

const Home = () => {
    return (
        <>
            <NavigationBar />
            <Hero />
            <ProductsSection />
            <Footer />
        </>
    );
};

export default Home;