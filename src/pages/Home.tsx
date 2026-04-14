import { motion } from 'motion/react';
import { ArrowRight, Star, ShieldCheck, Truck } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';

const features = [
  {
    icon: <Star className="h-6 w-6 text-yellow-500" />,
    title: "Yuqori Sifat",
    description: "Barcha mahsulotlarimiz sifat nazoratidan o'tgan."
  },
  {
    icon: <ShieldCheck className="h-6 w-6 text-green-500" />,
    title: "Xavfsiz To'lov",
    description: "To'lovlar 100% xavfsiz va ishonchli tizimlar orqali amalga oshiriladi."
  },
  {
    icon: <Truck className="h-6 w-6 text-blue-500" />,
    title: "Tezkor Yetkazib Berish",
    description: "O'zbekiston bo'ylab eng qisqa muddatlarda yetkazib beramiz."
  }
];

export default function Home() {
  return (
    <div className="flex flex-col space-y-20 pb-20">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-muted/30 py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center text-center space-y-8">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl"
            >
              Sizning <span className="text-primary">Ideal</span> Savdo <br className="hidden sm:block" /> Hamrohingiz
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="max-w-[700px] text-lg text-muted-foreground sm:text-xl"
            >
              Eng so'nggi texnologiyalar, kiyim-kechaklar va uy-ro'zg'or buyumlarini hamyonbop narxlarda xarid qiling.
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button asChild size="lg" className="rounded-full px-8">
                <Link to="/products">Xaridni boshlash <ArrowRight className="ml-2 h-4 w-4" /></Link>
              </Button>
              <Button variant="outline" size="lg" className="rounded-full px-8">
                Batafsil ma'lumot
              </Button>
            </motion.div>
          </div>
        </div>
        
        {/* Decorative background elements */}
        <div className="absolute -top-24 -left-24 h-96 w-96 rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute -bottom-24 -right-24 h-96 w-96 rounded-full bg-primary/10 blur-3xl" />
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full border-none bg-muted/20 shadow-none">
                <CardContent className="flex flex-col items-center p-8 text-center space-y-4">
                  <div className="rounded-full bg-background p-4 shadow-sm">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-3xl bg-primary px-8 py-16 text-primary-foreground md:px-20 md:py-24"
        >
          <div className="relative z-10 flex flex-col items-center text-center space-y-6">
            <h2 className="text-3xl font-bold md:text-5xl">Yangi kolleksiyamizni ko'rdingizmi?</h2>
            <p className="max-w-[600px] text-lg opacity-90">
              Hozir ro'yxatdan o'ting va birinchi xaridingiz uchun 15% chegirmaga ega bo'ling!
            </p>
            <Button asChild variant="secondary" size="lg" className="rounded-full px-10 font-semibold">
              <Link to="/register">Ro'yxatdan o'tish</Link>
            </Button>
          </div>
          {/* Decorative circles */}
          <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-white/10 blur-2xl" />
          <div className="absolute -left-20 -bottom-20 h-64 w-64 rounded-full bg-white/10 blur-2xl" />
        </motion.div>
      </section>
    </div>
  );
}
