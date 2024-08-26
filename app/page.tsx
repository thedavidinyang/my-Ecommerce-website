import Navbar from './components/Navbar'; 
import HeroSection from './components/HeroSection';
import ProductCategories from './components/ProductCategories';
import FeaturedProducts from './components/FeaturedProducts';
import Testimonials from './components/Testimonials';
import PromotionalBanner from './components/PromotionalBanner';
import Footer from './components/Footer';

export default function HomePage() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <ProductCategories />
      <FeaturedProducts />
      <PromotionalBanner />
      <Testimonials />
      <Footer />
    </>
  );
}
