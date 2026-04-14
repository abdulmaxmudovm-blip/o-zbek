import { ShoppingBag, Facebook, Instagram, Twitter } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="border-t bg-muted/30">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-2">
              <ShoppingBag className="h-6 w-6 text-primary" />
              <span className="text-xl font-bold tracking-tight">O'zbek Savdo</span>
            </Link>
            <p className="text-sm text-muted-foreground">
              Sifatli mahsulotlar va ishonchli xizmat ko'rsatish bizning ustuvor vazifamizdir.
            </p>
          </div>
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider">Sahifalar</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link to="/" className="hover:text-primary">Asosiy</Link></li>
              <li><Link to="/products" className="hover:text-primary">Mahsulotlar</Link></li>
              <li><Link to="/contact" className="hover:text-primary">Aloqa</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider">Yordam</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-primary">Yetkazib berish</a></li>
              <li><a href="#" className="hover:text-primary">To'lov usullari</a></li>
              <li><a href="#" className="hover:text-primary">Qaytarish shartlari</a></li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider">Bizni kuzating</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-muted-foreground hover:text-primary"><Facebook className="h-5 w-5" /></a>
              <a href="#" className="text-muted-foreground hover:text-primary"><Instagram className="h-5 w-5" /></a>
              <a href="#" className="text-muted-foreground hover:text-primary"><Twitter className="h-5 w-5" /></a>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t pt-8 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} O'zbek Savdo. Barcha huquqlar himoyalangan.</p>
        </div>
      </div>
    </footer>
  );
}
