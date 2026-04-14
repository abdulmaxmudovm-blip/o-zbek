import * as React from 'react';
import { useState } from 'react';
import { motion } from 'motion/react';
import { Search, ShoppingBag, User, MapPin, Phone, CheckCircle2 } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Product } from '@/types';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Label } from '@/components/ui/label';

const products: Product[] = [
  {
    id: '1',
    name: 'Smartfon X Pro',
    description: 'Eng so\'nggi model, 256GB xotira va ajoyib kamera.',
    price: '8,500,000 so\'m',
    image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=800&q=80',
    category: 'Elektronika'
  },
  {
    id: '2',
    name: 'Noutbuk Ultra Slim',
    description: 'Yengil va kuchli, ish va o\'qish uchun ideal.',
    price: '12,000,000 so\'m',
    image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=800&q=80',
    category: 'Elektronika'
  },
  {
    id: '3',
    name: 'Klassik Erkaklar Kostyumi',
    description: 'Sifatli matodan tikilgan, har qanday tadbir uchun.',
    price: '1,500,000 so\'m',
    image: 'https://images.unsplash.com/photo-1594932224828-b4b059b6f6f9?w=800&q=80',
    category: 'Kiyim-kechak'
  },
  {
    id: '4',
    name: 'Ayollar Bahorgi Ko\'ylagi',
    description: 'Yengil va chiroyli dizayn, turli ranglarda.',
    price: '450,000 so\'m',
    image: 'https://images.unsplash.com/photo-1572804013307-f9a85b759035?w=800&q=80',
    category: 'Kiyim-kechak'
  },
  {
    id: '5',
    name: 'Oshxona Kombayni',
    description: 'Ko\'p funksiyali, ovqat tayyorlashni osonlashtiradi.',
    price: '2,200,000 so\'m',
    image: 'https://images.unsplash.com/photo-1527335420224-28462196753e?w=800&q=80',
    category: 'Uy-ro\'zg\'or'
  },
  {
    id: '6',
    name: 'Simsiz Quloqchinlar',
    description: 'Toza ovoz va uzoq vaqt ishlaydigan batareya.',
    price: '800,000 so\'m',
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&q=80',
    category: 'Elektronika'
  },
  {
    id: '7',
    name: 'Smart Soat Series 7',
    description: 'Salomatlik va sport ko\'rsatkichlarini kuzatish uchun.',
    price: '3,100,000 so\'m',
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&q=80',
    category: 'Elektronika'
  },
  {
    id: '8',
    name: 'Kofe Mashinasi',
    description: 'Har kuni ertalab mazali va yangi kofe.',
    price: '4,500,000 so\'m',
    image: 'https://images.unsplash.com/photo-1517668808822-9ebb02f2a0e6?w=800&q=80',
    category: 'Uy-ro\'zg\'or'
  },
  {
    id: '9',
    name: 'Sport Poyabzali',
    description: 'Yugurish va kundalik kiyish uchun juda qulay.',
    price: '650,000 so\'m',
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&q=80',
    category: 'Kiyim-kechak'
  },
  {
    id: '10',
    name: 'Planshet Pro 11',
    description: 'Grafik dizayn va o\'yinlar uchun yuqori unumdorlik.',
    price: '9,800,000 so\'m',
    image: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=800&q=80',
    category: 'Elektronika'
  },
  {
    id: '11',
    name: 'Mikroto\'lqinli Pech',
    description: 'Tez va sifatli isitish funksiyasi bilan.',
    price: '1,800,000 so\'m',
    image: 'https://images.unsplash.com/photo-1574269909862-7e1d70bb8078?w=800&q=80',
    category: 'Uy-ro\'zg\'or'
  },
  {
    id: '12',
    name: 'Professional Fotoapparat',
    description: 'Eng yuqori sifatli suratlar va videolar uchun.',
    price: '15,500,000 so\'m',
    image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=800&q=80',
    category: 'Elektronika'
  }
];

const categories = ['Barchasi', 'Elektronika', 'Kiyim-kechak', 'Uy-ro\'zg\'or'];

export default function Products() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Barchasi');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isOrderComplete, setIsOrderComplete] = useState(false);
  const [orderData, setOrderData] = useState({
    name: '',
    address: '',
    phone: ''
  });

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'Barchasi' || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const handleOrderSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsOrderComplete(true);
  };

  const closeDialog = () => {
    setSelectedProduct(null);
    setIsOrderComplete(false);
    setOrderData({ name: '', address: '', phone: '' });
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="flex flex-col space-y-8">
        <div className="flex flex-col space-y-4 md:flex-row md:items-center md:justify-between md:space-y-0">
          <h1 className="text-3xl font-bold tracking-tight">Mahsulotlarimiz</h1>
          <div className="flex w-full max-w-sm items-center space-x-2">
            <div className="relative w-full">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Qidirish..."
                className="pl-8"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
        </div>

        <div className="flex flex-wrap gap-2">
          {categories.map(category => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedCategory(category)}
              className="rounded-full"
            >
              {category}
            </Button>
          ))}
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filteredProducts.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
            >
              <Card className="group h-full overflow-hidden transition-all hover:shadow-lg">
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <CardHeader className="p-4">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-medium text-primary uppercase tracking-wider">{product.category}</span>
                    <span className="text-sm font-bold text-primary">{product.price}</span>
                  </div>
                  <CardTitle className="mt-2 text-lg">{product.name}</CardTitle>
                </CardHeader>
                <CardContent className="px-4 pb-4 pt-0">
                  <p className="text-sm text-muted-foreground line-clamp-2">
                    {product.description}
                  </p>
                </CardContent>
                <CardFooter className="p-4 pt-0">
                  <Button className="w-full" onClick={() => setSelectedProduct(product)}>
                    <ShoppingBag className="mr-2 h-4 w-4" /> Xarid qilish
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="flex flex-col items-center justify-center py-20 text-center">
            <p className="text-xl text-muted-foreground">Hech qanday mahsulot topilmadi.</p>
            <Button variant="link" onClick={() => {setSearchQuery(''); setSelectedCategory('Barchasi');}}>
              Barcha mahsulotlarni ko'rish
            </Button>
          </div>
        )}
      </div>

      {/* Checkout Dialog */}
      <Dialog open={!!selectedProduct} onOpenChange={(open) => !open && closeDialog()}>
        <DialogContent className="sm:max-w-[425px]">
          {!isOrderComplete ? (
            <>
              <DialogHeader>
                <DialogTitle>Xaridni rasmiylashtirish</DialogTitle>
                <DialogDescription>
                  {selectedProduct?.name} mahsulotini sotib olish uchun ma'lumotlaringizni kiriting.
                </DialogDescription>
              </DialogHeader>
              <form onSubmit={handleOrderSubmit} className="space-y-4 py-4">
                <div className="space-y-2">
                  <Label htmlFor="order-name" className="flex items-center gap-2">
                    <User className="h-4 w-4" /> Ismingiz
                  </Label>
                  <Input 
                    id="order-name" 
                    placeholder="Ismingizni kiriting" 
                    required 
                    value={orderData.name}
                    onChange={(e) => setOrderData({...orderData, name: e.target.value})}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="order-address" className="flex items-center gap-2">
                    <MapPin className="h-4 w-4" /> Yashash manzilingiz
                  </Label>
                  <Input 
                    id="order-address" 
                    placeholder="Manzilingizni kiriting" 
                    required 
                    value={orderData.address}
                    onChange={(e) => setOrderData({...orderData, address: e.target.value})}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="order-phone" className="flex items-center gap-2">
                    <Phone className="h-4 w-4" /> Telefon raqamingiz
                  </Label>
                  <Input 
                    id="order-phone" 
                    type="tel" 
                    placeholder="+998 90 123 45 67" 
                    required 
                    value={orderData.phone}
                    onChange={(e) => setOrderData({...orderData, phone: e.target.value})}
                  />
                </div>
                <DialogFooter className="pt-4">
                  <Button type="submit" className="w-full">Tasdiqlash</Button>
                </DialogFooter>
              </form>
            </>
          ) : (
            <div className="flex flex-col items-center justify-center space-y-6 py-8 text-center">
              <div className="rounded-full bg-green-100 p-3 text-green-600">
                <CheckCircle2 className="h-12 w-12" />
              </div>
              <div className="space-y-2">
                <DialogTitle className="text-2xl">Buyurtma qabul qilindi!</DialogTitle>
                <DialogDescription className="text-base">
                  Rahmat, <span className="font-bold text-foreground">{orderData.name}</span>! 
                  Sizning buyurtmangiz <span className="font-bold text-foreground">{orderData.address}</span> manziliga yetkazib beriladi.
                </DialogDescription>
                <p className="text-sm font-medium text-muted-foreground mt-4">
                  Tez orada operatorlarimiz <span className="text-primary">{orderData.phone}</span> raqamingizga bog'lanishadi.
                </p>
              </div>
              <Button onClick={closeDialog} className="w-full">Yopish</Button>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
