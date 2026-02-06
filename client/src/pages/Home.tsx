/**
 * Home Page - Dark Luxury Minimalism Design
 * Sophisticated dark gradients with jewel-tone accents
 * Frosted glass effects, generous spacing, refined typography
 */

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ProductCard } from "@/components/ProductCard";
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
              <span className="text-xl font-bold gradient-text">SauceyShop</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#home" className="text-sm text-foreground hover:text-primary transition-colors">Home</a>
              <a href="#products" className="text-sm text-foreground hover:text-primary transition-colors">Products</a>
              <a href="#features" className="text-sm text-foreground hover:text-primary transition-colors">Features</a>
              <a href="#faq" className="text-sm text-foreground hover:text-primary transition-colors">FAQ</a>
              <Button size="sm" className="bg-gradient-to-r from-primary to-accent">
                Contact
              </Button>
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
              <span className="text-sm text-foreground">#1 trusted digital marketplace since 2022</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Your <span className="gradient-text">Digital Plug</span> for Proven<br />
              Money Making Tools
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
              Access exclusive tools, guides, and reseller packs built to help you earn worldwide. 
              Every product is tested, verified, and updated — so you never miss a new opportunity.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" className="bg-gradient-to-r from-primary to-accent hover:opacity-90 text-lg px-8 py-6 luxury-shadow">
                Start Browsing
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-6 glass-card border-border/50">
                Join the Community
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="glass-card rounded-2xl p-8 text-center luxury-shadow">
              <div className="text-4xl md:text-5xl font-bold gradient-text mb-2">5K+</div>
              <div className="text-sm text-muted-foreground uppercase tracking-wider">Satisfied Customers</div>
            </div>
            <div className="glass-card rounded-2xl p-8 text-center luxury-shadow">
              <div className="text-4xl md:text-5xl font-bold gradient-text mb-2">5.0</div>
              <div className="text-sm text-muted-foreground uppercase tracking-wider">Rating of Our Products</div>
            </div>
            <div className="glass-card rounded-2xl p-8 text-center luxury-shadow">
              <div className="text-4xl md:text-5xl font-bold gradient-text mb-2">2022</div>
              <div className="text-sm text-muted-foreground uppercase tracking-wider">We Make People 💸 Since</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Core Plays</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Four moves to keep your hustle scaling
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="glass-card rounded-2xl p-8 hover:scale-105 transition-transform duration-300">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-6">
                <Globe className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Global-ready catalog</h3>
              <p className="text-muted-foreground leading-relaxed">
                Every product functions worldwide so you can plug in from any country. Even Giftcard Shops include options beyond the US.
              </p>
            </div>
            <div className="glass-card rounded-2xl p-8 hover:scale-105 transition-transform duration-300">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-accent to-primary flex items-center justify-center mb-6">
                <TrendingUp className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Long-term money blueprints</h3>
              <p className="text-muted-foreground leading-relaxed">
                Build durable income streams with kits like Make Money With Your Own Shop, Reseller Packs, and OF Manager playbooks.
              </p>
            </div>
            <div className="glass-card rounded-2xl p-8 hover:scale-105 transition-transform duration-300">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary via-accent to-primary flex items-center justify-center mb-6">
                <Zap className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Quick flip toolset</h3>
              <p className="text-muted-foreground leading-relaxed">
                Need speed? Grab Giftcard Shops, CC Sites, or CC to Crypto to unlock fast wins and instant value.
              </p>
            </div>
            <div className="glass-card rounded-2xl p-8 hover:scale-105 transition-transform duration-300">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-accent via-primary to-accent flex items-center justify-center mb-6">
                <ShieldCheck className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Proven community trust</h3>
              <p className="text-muted-foreground leading-relaxed">
                Operating since 2022 with hundreds of satisfied buyers—this shop is the evolved version of our legacy.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-24 bg-gradient-to-b from-transparent to-secondary/10">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Product Catalog</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Pick the plays that stay winning
            </p>
            <p className="text-sm text-muted-foreground mt-2">
              Every offer ships after the crew signs off, so you can lock in the next move and get paid faster.
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
                <ProductCard key={product.id} {...product} />
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
                Are products that are on the shop worldwide?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">
                Yes! Every product in our catalog is designed to work worldwide. Whether you're in the US, Europe, Asia, or anywhere else, 
                our tools and guides are accessible and functional globally. Even our Giftcard Shops include options beyond the US market.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2" className="glass-card rounded-xl px-6 border-0">
              <AccordionTrigger className="text-lg font-semibold hover:text-primary">
                I want to make money! What should I buy?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">
                We recommend starting with our Starter Bundle ($14.99) which gives you everything you need to begin. 
                For long-term income, check out our Reseller Packs or the Money Maker Bundle. If you want everything, 
                the Elite Pack ($199.99) includes our complete catalog.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3" className="glass-card rounded-xl px-6 border-0">
              <AccordionTrigger className="text-lg font-semibold hover:text-primary">
                How can I make money quick?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">
                For quick wins, we recommend our Giftcard Shops (50-70% off), CC to Crypto guides, or our Refund Guides. 
                These products are designed for fast implementation and immediate value. Many customers see results within days.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4" className="glass-card rounded-xl px-6 border-0">
              <AccordionTrigger className="text-lg font-semibold hover:text-primary">
                How can I be sure this shop is legitimate?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">
                We've been operating since 2022 with over 5,000 satisfied customers and a 5.0 rating. 
                Every product is tested and verified before being listed. We stand behind everything we sell, 
                and our reputation speaks for itself. Check our testimonials and community feedback.
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
                As a buyer of SauceyShop's products and services, it is your obligation and responsibility to read 
                the terms of service in their entirety. By reading, conceptualizing, and accepting such terms you are 
                further bound by such terms and no exceptions will be afforded to you.
              </p>
              <ul className="space-y-3 ml-6">
                <li className="flex items-start">
                  <span className="text-accent mr-2">•</span>
                  <span>You must not change any information on the account (name/email/password). Unless specified in the account description. If changed, warranty will be voided.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-2">•</span>
                  <span>No Refunds. We stand behind everything we sell and we are sure about our products, if something is patched / doesn't work, it's removed from the shop.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-2">•</span>
                  <span>If an account stops working after 2 hours, SauceyShop and any parties associated are not entitled to replace it.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-2">•</span>
                  <span>All sales are final.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-2">•</span>
                  <span>SauceyShop and any parties associated are not responsible for any buyer conduct after purchase.</span>
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
                <span className="text-xl font-bold gradient-text">SauceyShop</span>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                The digital plug for verified product drops, reseller packs, and launch playbooks designed to help your crew win faster.
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
              <Button className="bg-gradient-to-r from-primary to-accent w-full">
                Contact Support
              </Button>
            </div>
          </div>
          <div className="pt-8 border-t border-border/50 text-center text-sm text-muted-foreground">
            <p>© 2026 SauceyShop. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
