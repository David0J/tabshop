/**
 * Home Page - Dark Luxury Minimalism Design
 * Sophisticated dark gradients with jewel-tone accents
 * Frosted glass effects, generous spacing, refined typography
 */

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ProductCard } from "@/components/ProductCard";
import { PurchaseModal } from "@/components/PurchaseModal";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Star, Globe, TrendingUp, Zap, ShieldCheck } from "lucide-react";

interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  inStock: boolean;
  category: string;
}

export default function Home() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    fetch('/products.json')
      .then(res => res.json())
      .then(data => {
        setProducts(data);
        setLoading(false);
      })
      .catch(err => {
        console.error('Failed to load products:', err);
        setLoading(false);
      });
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-background to-secondary/20">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 glass-card border-b border-border/50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold gradient-text">TabShop</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#home" className="text-sm text-foreground hover:text-primary transition-colors">Home</a>
              <a href="#products" className="text-sm text-foreground hover:text-primary transition-colors">Guides</a>
              <a href="#faq" className="text-sm text-foreground hover:text-primary transition-colors">FAQ</a>
              <a href="https://t.me/alons0Dev" target="_blank" rel="noopener noreferrer">
                <Button size="sm" className="bg-gradient-to-r from-primary to-accent">
                  Contact
                </Button>
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <img 
            src="https://private-us-east-1.manuscdn.com/sessionFile/j8435vRBzWQyxpMgZs8ZtA/sandbox/6ZJU9Kth97DrMgogr9zuAw-img-1_1770420036000_na1fn_aGVyby1sdXh1cnktYWJzdHJhY3Q.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvajg0MzV2UkJ6V1F5eHBNZ1pzOFp0QS9zYW5kYm94LzZaSlU5S3RoOTdEck1nb2dyOXp1QXctaW1nLTFfMTc3MDQyMDAzNjAwMF9uYTFmbl9hR1Z5Ynkxc2RYaDFjbmt0WVdKemRISmhZM1EucG5nP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLHdfMTkyMCxoXzE5MjAvZm9ybWF0LHdlYnAvcXVhbGl0eSxxXzgwIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzk4NzYxNjAwfX19XX0_&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=BvFeifhly8TQtZAegY1tftA9GVVt2HqMipgFcYCwQBJPmNT91cXX~QUUACANEs9DzUZ2OEfX195tTpVwVAJmEHpVcvQEWoUfsZTuflxenqxPrXzilpMyclSpLZWoBQmaALhUStSH6TgbES258lzJsHGC5Npdipj26YrVdWR22h2dz8HCjVnMUkGohgPMAH1DPPM5zwXtvt4WD21ZOy2gtHfBweF8MJKXDluIXqonAhFaPcuMUGEHCEMr9BXtxeWRQCHZBhQmNeNtyf78F7izKYbxeHOs~hPaOHbQe-5wQK3F6ew3WdmW2zxJgK4-ouG9uLQHxrz8qZRI21mSHNNFvA__"
            alt="Hero Background"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full glass-card mb-8">
              <Star className="w-4 h-4 text-accent" fill="currentColor" />
              <span className="text-sm text-foreground">#1 trusted guide marketplace since 2023</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Your <span className="gradient-text">Go-To Resource</span> for<br />
              Money Making Guides
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
              Discover proven strategies, in-depth guides, and actionable methods to build multiple income streams. 
              Every guide is researched, tested, and regularly updated with the latest opportunities.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href="#products">
                <Button size="lg" className="bg-gradient-to-r from-primary to-accent hover:opacity-90 text-lg px-8 py-6 luxury-shadow">
                  Start Browsing
                </Button>
              </a>
              <a href="https://t.me/thetabshop" target="_blank" rel="noopener noreferrer">
                <Button size="lg" variant="outline" className="text-lg px-8 py-6 glass-card border-border/50">
                  Join the Community
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>





      {/* Products Section */}
      <section id="products" className="py-24 bg-gradient-to-b from-transparent to-secondary/10">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Guides</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Explore proven money-making strategies
            </p>
            <p className="text-sm text-muted-foreground mt-2">
              Each guide includes step-by-step instructions, real examples, and actionable tactics you can implement today.
            </p>
          </div>
          
          {loading ? (
            <div className="text-center py-20">
              <div className="inline-block w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
              <p className="text-muted-foreground mt-4">Loading products...</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {products.map((product) => (
                <ProductCard 
                  key={product.id} 
                  {...product}
                  onBuyNow={() => {
                    setSelectedProduct(product);
                    setIsModalOpen(true);
                  }}
                />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-24">
        <div className="container max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">FAQ</h2>
            <p className="text-xl text-muted-foreground">
              Frequently Asked Questions
            </p>
          </div>
          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="item-1" className="glass-card rounded-xl px-6 border-0">
              <AccordionTrigger className="text-lg font-semibold hover:text-primary">
                Are these guides applicable worldwide?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">
                Absolutely! Our guides are designed for a global audience. While some methods are region-specific, we provide alternatives and adaptations for different countries. Most strategies work in North America, Europe, and Asia with minor adjustments.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2" className="glass-card rounded-xl px-6 border-0">
              <AccordionTrigger className="text-lg font-semibold hover:text-primary">
                Which guide should I start with?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">
                Start with our Starter Bundle ($14.99) for a comprehensive overview of multiple methods. If you prefer quick wins, try our Quick-Start guides. For building long-term wealth, explore our Sustainable Income Strategies bundle. Each guide is self-contained, so you can pick what interests you most.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3" className="glass-card rounded-xl px-6 border-0">
              <AccordionTrigger className="text-lg font-semibold hover:text-primary">
                How long before I see results?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">
                It depends on the method. Quick-start guides can show results within days, while sustainable income strategies take 2-4 weeks to establish. Most members report their first earnings within the first week of implementation. Success depends on effort and consistency.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4" className="glass-card rounded-xl px-6 border-0">
              <AccordionTrigger className="text-lg font-semibold hover:text-primary">
                Are these guides legitimate and legal?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">
                Yes. All our guides cover legal, ethical money-making methods. We've been trusted since 2023 by thousands of members worldwide. Every guide is thoroughly researched and tested before publication. We don't promote anything illegal or unethical.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* Terms Section */}
      <section className="py-24 bg-secondary/20">
        <div className="container max-w-4xl">
          <div className="glass-card rounded-2xl p-10">
            <h2 className="text-3xl font-bold mb-6">Terms</h2>
            <h3 className="text-xl font-semibold mb-4 text-primary">General Terms And Conditions</h3>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                By accessing and using TabShop's guides and resources, you agree to these terms of service. 
                All guides are provided for educational purposes. Your success depends on your effort, market conditions, and ability to execute the strategies.
              </p>
              <ul className="space-y-3 ml-6">
                <li className="flex items-start">
                  <span className="text-accent mr-2">•</span>
                  <span>All guides are digital products. Once purchased, they cannot be refunded. We guarantee the quality of our content.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-2">•</span>
                  <span>We are not responsible for how you use the information provided. Use all strategies legally and ethically.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-2">•</span>
                  <span>Results vary based on individual effort, market conditions, and implementation. We don't guarantee specific earnings.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-2">•</span>
                  <span>All sales are final. Guides are updated regularly with new strategies and methods.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-2">•</span>
                  <span>TabShop reserves the right to update or modify guides as market conditions change.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 border-t border-border/50">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <span className="text-xl font-bold gradient-text">TabShop</span>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Your trusted resource for proven money-making guides and strategies. We help you discover multiple income streams and build sustainable wealth.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Pages</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#products" className="hover:text-primary transition-colors">Products</a></li>
                <li><a href="#features" className="hover:text-primary transition-colors">Features</a></li>
                <li><a href="#faq" className="hover:text-primary transition-colors">FAQ</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">Telegram</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Support</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Have a question?</h4>
              <p className="text-sm text-muted-foreground mb-4">
                Tell us what you're building and we'll match you with the right playbook.
              </p>
              <a href="https://t.me/alons0Dev" target="_blank" rel="noopener noreferrer" className="block">
                <Button className="bg-gradient-to-r from-primary to-accent w-full">
                  Contact Support
                </Button>
              </a>
            </div>
          </div>
          <div className="pt-8 border-t border-border/50 text-center text-sm text-muted-foreground">
            <p>© 2026 TabShop. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Purchase Modal */}
      <PurchaseModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        product={selectedProduct}
      />
    </div>
  );
}
