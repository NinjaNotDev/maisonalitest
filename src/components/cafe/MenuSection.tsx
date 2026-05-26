'use client'

import Image from 'next/image'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

interface MenuItem {
  name: string
  description: string
  price: string
}

// === DATA MENU ASLI DARI MAISON ALI CAFÉ ===

const coffeeItems: MenuItem[] = [
  { name: 'Espresso', description: 'Shot espresso pekat dan kaya rasa', price: 'Rp 12.000' },
  { name: 'Long Black', description: 'Double shot espresso dengan air panas', price: 'Rp 22.000' },
  { name: 'Flat White', description: 'Espresso dengan microfoam susu creamy', price: 'Rp 24.000' },
  { name: 'Cappucino', description: 'Espresso, steamed milk, dan foam lembut', price: 'Rp 26.000' },
  { name: 'Mocha', description: 'Espresso dengan cokelat dan susu steamed', price: 'Rp 26.000' },
  { name: 'Cold Brew', description: 'Kopi dingin yang di-brew 12 jam', price: 'Rp 30.000' },
  { name: "Barista's Breakfast", description: 'Signature kopi susu morning boost', price: 'Rp 26.000' },
  { name: 'Kopi Susu Van Java', description: 'Kopi susu dengan gula aren khas Jawa', price: 'Rp 25.000' },
  { name: 'Double Cookies Rum Arabica', description: 'Kopi dengan sentuh rum dan cookies', price: 'Rp 29.000' },
  { name: 'Nutty Crema Butterscotch', description: 'Kopi dengan krim kacang dan butterscotch', price: 'Rp 29.000' },
  { name: 'Pistachio Cafe Latte', description: 'Cafe latte dengan pistachio premium', price: 'Rp 25.000' },
  { name: 'Melb. Mont Blanc', description: 'Kopi spesial ala Melbourne style', price: 'Rp 25.000' },
  { name: 'Osaka Berry Mont Blanc', description: 'Kopi dengan campuran berry Jepang', price: 'Rp 26.000' },
  { name: 'Manuka Arome Americano', description: 'Americano dengan aroma manuka honey', price: 'Rp 23.000' },
  { name: 'Mixed Berries Americano', description: 'Americano dengan mixed berries segar', price: 'Rp 25.000' },
]

const drinkItems: MenuItem[] = [
  { name: 'Da Hong Pao Milk Tea', description: 'Milk tea premium dari teh Da Hong Pao', price: 'Rp 25.000' },
  { name: 'Earl Grey Milk Tea', description: 'Milk tea dengan aroma Earl Grey klasik', price: 'Rp 23.000' },
  { name: 'Jade Osmanthus Milk Tea', description: 'Milk tea dengan bunga osmanthus harum', price: 'Rp 23.000' },
  { name: 'Lychee Tea', description: 'Teh segar dengan jus lychee', price: 'Rp 23.000' },
  { name: 'Lemon Tea', description: 'Teh lemon yang menyegarkan', price: 'Rp 20.000' },
  { name: 'Hokkaido Matcha Latte', description: 'Matcha premium Hokkaido dengan susu', price: 'Rp 24.000' },
  { name: 'Strawberry Matcha Latte', description: 'Matcha latte dengan strawberry segar', price: 'Rp 28.000' },
  { name: 'Virgin Mojito', description: 'Mocktail mojito segar tanpa alkohol', price: 'Rp 25.000' },
  { name: 'Honey B Lemon', description: 'Perpaduan madu, lemon, dan soda', price: 'Rp 25.000' },
  { name: 'Pink Berry Fizz', description: 'Soda berry pink yang playful', price: 'Rp 25.000' },
  { name: 'Azure Blue Royale', description: 'Mocktail biru premium yang elegan', price: 'Rp 28.000' },
  { name: 'Java Chip Shake', description: 'Milkshake cokelat dengan java chip', price: 'Rp 28.000' },
  { name: 'Cookies N Cream', description: 'Milkshake cookies and cream creamy', price: 'Rp 28.000' },
  { name: 'R.E.D Velvet Shake', description: 'Milkshake red velvet yang rich', price: 'Rp 26.000' },
]

const snackItems: MenuItem[] = [
  { name: 'French Fries Garlic Mayo', description: 'Kentang goreng renyah dengan saus garlic mayo', price: 'Rp 16.000' },
  { name: 'Garlic Bread', description: 'Roti garlic yang crispy dan harum', price: 'Rp 20.000' },
  { name: "Maison Ali's Platter", description: 'Pilihan snack campuran khas Maison Ali', price: 'Rp 35.000' },
  { name: 'Tahu Cabai Garam', description: 'Tahu goreng crispy dengan taburan cabai garam', price: 'Rp 18.000' },
]

const mainCourseItems: MenuItem[] = [
  { name: 'Nasi Goreng Maison Ali', description: 'Nasi goreng spesial bumbu rahasia Maison Ali', price: 'Rp 35.000' },
  { name: 'Nasi Goreng Thai', description: 'Nasi goreng style Thai dengan bumbu khas', price: 'Rp 32.000' },
  { name: 'Nasi Goreng Hongkong', description: 'Nasi goreng Hongkong dengan wok hei', price: 'Rp 32.000' },
  { name: 'Salted Egg Chicken Rice', description: 'Nasi dengan ayam salted egg yang creamy', price: 'Rp 39.000' },
  { name: 'Thai Basil Chicken Rice', description: 'Nasi dengan ayam thai basil yang aromatik', price: 'Rp 27.000' },
  { name: 'Nanban Chicken/Prawn Rice', description: 'Nasi dengan ayam atau udang nanban crispy', price: 'Rp 28.000 - 32.000' },
  { name: 'Honey Butter Chicken Rice', description: 'Nasi dengan ayam honey butter yang manis gurih', price: 'Rp 28.000' },
  { name: 'Dory Sambal Matah Rice', description: 'Nasi dengan dori dan sambal matah segar', price: 'Rp 33.000' },
  { name: 'Penne N Brulee', description: 'Penne dengan saus crème brûlée yang unik', price: 'Rp 35.000' },
  { name: 'Tuna Aglio Olio', description: 'Pasta aglio olio dengan tuna segar', price: 'Rp 35.000' },
  { name: 'Penne ala Rosé', description: 'Penne dengan saus rosa yang creamy', price: 'Rp 28.000' },
  { name: 'Fettucine al Funghi', description: 'Fettucine dengan campuran jamur premium', price: 'Rp 37.000' },
  { name: 'Fish N Chips', description: 'Ikan goreng crispy dengan kentang dan saus', price: 'Rp 34.000' },
  { name: 'Chicken Parmigiana', description: 'Ayam crispy dengan saus parmigiana dan keju', price: 'Rp 36.000' },
  { name: 'Shortplate Stroganoff', description: 'Daging sapi stroganoff dengan saus krim', price: 'Rp 39.000' },
]

function MenuCard({
  item,
  image,
}: {
  item: MenuItem
  image: string
}) {
  return (
    <div className="menu-card overflow-hidden rounded-xl border border-latte bg-white">
      <div className="relative h-40 w-full overflow-hidden">
        <Image
          src={image}
          alt={item.name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
      </div>
      <div className="p-4">
        <div className="flex items-start justify-between gap-2">
          <h4 className="font-semibold text-espresso leading-tight">{item.name}</h4>
          <span className="shrink-0 rounded-full bg-latte/60 px-2.5 py-0.5 text-xs font-semibold text-mocha whitespace-nowrap">
            {item.price}
          </span>
        </div>
        <p className="mt-1.5 text-sm leading-relaxed text-warm-600">
          {item.description}
        </p>
      </div>
    </div>
  )
}

function MenuList({
  items,
  image,
}: {
  items: MenuItem[]
  image: string
}) {
  return (
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((item) => (
        <MenuCard key={item.name} item={item} image={image} />
      ))}
    </div>
  )
}

export default function MenuSection() {
  return (
    <section id="menu" className="section-padding bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-bold text-espresso sm:text-4xl">
            Menu
          </h2>
          <div className="cafe-divider mx-auto mt-4 max-w-xs">
          </div>
          <p className="mx-auto mt-4 max-w-md text-warm-600">
            Beragam pilihan kopi, makanan, dan minuman yang dibuat dengan bahan
            berkualitas dan cinta
          </p>
        </div>

        {/* Tabs */}
        <Tabs defaultValue="coffee" className="w-full">
          <div className="flex justify-center">
            <TabsList className="bg-latte/40 flex-wrap h-auto gap-1 p-1">
              <TabsTrigger
                value="coffee"
                className="data-[state=active]:bg-mocha data-[state=active]:text-warm-100 px-4 sm:px-5 text-sm font-medium"
              >
                Coffee
              </TabsTrigger>
              <TabsTrigger
                value="drink"
                className="data-[state=active]:bg-mocha data-[state=active]:text-warm-100 px-4 sm:px-5 text-sm font-medium"
              >
                Minuman
              </TabsTrigger>
              <TabsTrigger
                value="food"
                className="data-[state=active]:bg-mocha data-[state=active]:text-warm-100 px-4 sm:px-5 text-sm font-medium"
              >
                Makanan
              </TabsTrigger>
            </TabsList>
          </div>

          {/* Coffee Tab */}
          <TabsContent value="coffee">
            <div className="mt-8">
              <MenuList items={coffeeItems} image="/cafe-images/menu-coffee.png" />
            </div>
          </TabsContent>

          {/* Minuman Tab (Non-Coffee) */}
          <TabsContent value="drink">
            <div className="mt-8 space-y-10">
              {/* Milk Tea & Tea Sub-section */}
              <div>
                <h3 className="mb-4 flex items-center gap-2 text-lg font-semibold text-mocha">
                  <span className="inline-block h-px w-6 bg-caramel" />
                  Milk Tea &amp; Tea
                </h3>
                <MenuList
                  items={drinkItems.slice(0, 5)}
                  image="/cafe-images/menu-drink.png"
                />
              </div>

              {/* Matcha & Mocktail Sub-section */}
              <div>
                <h3 className="mb-4 flex items-center gap-2 text-lg font-semibold text-mocha">
                  <span className="inline-block h-px w-6 bg-caramel" />
                  Matcha &amp; Mocktail
                </h3>
                <MenuList
                  items={drinkItems.slice(5, 11)}
                  image="/cafe-images/menu-drink.png"
                />
              </div>

              {/* Shake Sub-section */}
              <div>
                <h3 className="mb-4 flex items-center gap-2 text-lg font-semibold text-mocha">
                  <span className="inline-block h-px w-6 bg-caramel" />
                  Shake
                </h3>
                <MenuList
                  items={drinkItems.slice(11)}
                  image="/cafe-images/menu-drink.png"
                />
              </div>
            </div>
          </TabsContent>

          {/* Makanan Tab (Snack + Main Course) */}
          <TabsContent value="food">
            <div className="mt-8 space-y-10">
              {/* Snack Sub-section */}
              <div>
                <h3 className="mb-4 flex items-center gap-2 text-lg font-semibold text-mocha">
                  <span className="inline-block h-px w-6 bg-caramel" />
                  Snack
                </h3>
                <MenuList items={snackItems} image="/cafe-images/menu-food.png" />
              </div>

              {/* Main Course Sub-section */}
              <div>
                <h3 className="mb-4 flex items-center gap-2 text-lg font-semibold text-mocha">
                  <span className="inline-block h-px w-6 bg-caramel" />
                  Main Course
                </h3>
                <MenuList items={mainCourseItems} image="/cafe-images/menu-food.png" />
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  )
}
