import * as React from 'react';
import { useState } from 'react';
import { motion } from 'motion/react';
import { User, Mail, Phone, MapPin, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Link } from 'react-router-dom';

export default function Register() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you would send this to a backend
    console.log('Registration Data:', formData);
    alert(`Tabriklaymiz, ${formData.name}! Siz muvaffaqiyatli ro'yxatdan o'tdingiz.`);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  return (
    <div className="container mx-auto flex items-center justify-center px-4 py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-lg"
      >
        <Card className="border-none shadow-xl">
          <CardHeader className="space-y-1 text-center">
            <CardTitle className="text-3xl font-bold">Ro'yxatdan o'tish</CardTitle>
            <CardDescription>
              Shaxsiy ma'lumotlaringizni kiriting va bizning hamjamiyatimizga qo'shiling
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name" className="flex items-center gap-2">
                  <User className="h-4 w-4 text-muted-foreground" /> To'liq ismingiz
                </Label>
                <Input 
                  id="name" 
                  placeholder="Masalan: Alisher Navoiy" 
                  required 
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="email" className="flex items-center gap-2">
                  <Mail className="h-4 w-4 text-muted-foreground" /> Gmail manzilingiz
                </Label>
                <Input 
                  id="email" 
                  type="email" 
                  placeholder="misol@gmail.com" 
                  required 
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone" className="flex items-center gap-2">
                  <Phone className="h-4 w-4 text-muted-foreground" /> Telefon raqamingiz
                </Label>
                <Input 
                  id="phone" 
                  type="tel" 
                  placeholder="+998 90 123 45 67" 
                  required 
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="address" className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-muted-foreground" /> Yashash manzilingiz
                </Label>
                <Input 
                  id="address" 
                  placeholder="Viloyat, tuman, ko'cha va uy raqami" 
                  required 
                  value={formData.address}
                  onChange={handleChange}
                />
              </div>

              <Button type="submit" className="w-full py-6 text-lg font-semibold">
                Ro'yxatdan o'tish <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </form>
            
            <div className="mt-6 text-center text-sm text-muted-foreground">
              Sizda allaqachon hisob bormi?{' '}
              <Link to="/contact" className="font-medium text-primary hover:underline">
                Kirish
              </Link>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}
