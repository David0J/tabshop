/**
 * ProductCard Component
 * Design: Dark Luxury Minimalism - frosted glass card with soft shadows
 * Features: Hover scale effect, gradient accents, elegant typography
 */

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface ProductCardProps {
  title: string;
  description: string;
  price: number;
  inStock: boolean;
  category: string;
}

export function ProductCard({ title, description, price, inStock, category }: ProductCardProps) {
  return (
    <div className="glass-card rounded-xl p-6 transition-all duration-300 ease-out hover:scale-[1.02] hover:shadow-2xl group">
      {/* Stock Badge */}
      <div className="flex items-center justify-between mb-4">
        <Badge 
          variant={inStock ? "default" : "secondary"}
          className="bg-primary/20 text-primary border border-primary/30 backdrop-blur-sm"
        >
          {inStock ? "IN STOCK" : "OUT OF STOCK"}
        </Badge>
        <span className="text-xs text-muted-foreground uppercase tracking-wider">
          {category}
        </span>
      </div>

      {/* Title */}
      <h3 className="text-lg font-semibold mb-3 text-foreground group-hover:text-primary transition-colors duration-300 line-clamp-2">
        {title}
      </h3>

      {/* Description */}
      <p className="text-sm text-muted-foreground mb-6 line-clamp-3 leading-relaxed">
        {description}
      </p>

      {/* Price and CTA */}
      <div className="flex items-center justify-between mt-auto pt-4 border-t border-border/50">
        <div className="flex flex-col">
          <span className="text-xs text-muted-foreground mb-1">Price</span>
          <span className="text-2xl font-bold gradient-text">
            ${price.toFixed(2)}
          </span>
        </div>
        <Button 
          className="bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-opacity duration-300 shadow-lg"
          disabled={!inStock}
        >
          Buy Now
        </Button>
      </div>
    </div>
  );
}
