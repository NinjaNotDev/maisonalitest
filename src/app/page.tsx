import Navbar from '@/components/cafe/Navbar'
import HeroSection from '@/components/cafe/HeroSection'
import AboutSection from '@/components/cafe/AboutSection'
import MenuSection from '@/components/cafe/MenuSection'
import GallerySection from '@/components/cafe/GallerySection'
import LocationSection from '@/components/cafe/LocationSection'
import Footer from '@/components/cafe/Footer'

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <HeroSection />
        <AboutSection />
        <MenuSection />
        <GallerySection />
        <LocationSection />
      </main>
      <Footer />
    </div>
  )
}
