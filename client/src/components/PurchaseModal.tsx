/**
 * PurchaseModal Component
 * Design: Dark Luxury Minimalism - frosted glass modal with detailed product info
 * Shows product details and allows customer to confirm purchase with pre-filled Telegram message
 */

import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { X, CheckCircle } from "lucide-react";

interface PurchaseModalProps {
  isOpen: boolean;
  onClose: () => void;
  product: {
    id: number;
    title: string;
    description: string;
    price: number;
    category: string;
  } | null;
}

export function PurchaseModal({ isOpen, onClose, product }: PurchaseModalProps) {
  if (!product) return null;

  const handleConfirmPurchase = () => {
    const message = `Hi! I'd like to purchase the following guide:\n\n📚 **${product.title}**\nPrice: $${product.price.toFixed(2)}\nCategory: ${product.category}\n\nPlease send me the access details.`;
    const telegramUrl = `https://t.me/alons0Dev?text=${encodeURIComponent(message)}`;
    window.open(telegramUrl, "_blank");
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="glass-card border-border/50 max-w-md">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">Confirm Purchase</DialogTitle>
          <DialogDescription className="text-muted-foreground">
            Review the guide details before proceeding
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-6">
          {/* Product Details */}
          <div className="space-y-4 bg-secondary/30 rounded-lg p-4 border border-border/50">
            <div>
              <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">Guide Title</p>
              <h3 className="text-lg font-semibold text-foreground">{product.title}</h3>
            </div>

            <div>
              <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">Description</p>
              <p className="text-sm text-foreground leading-relaxed">{product.description}</p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">Category</p>
                <p className="text-sm font-medium text-primary capitalize">{product.category}</p>
              </div>
              <div>
                <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">Product ID</p>
                <p className="text-sm font-medium text-accent">#{product.id}</p>
              </div>
            </div>
          </div>

          {/* Price Section */}
          <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-lg p-4 border border-primary/20">
            <p className="text-xs text-muted-foreground uppercase tracking-wider mb-2">Total Price</p>
            <div className="flex items-baseline gap-2">
              <span className="text-4xl font-bold gradient-text">${product.price.toFixed(2)}</span>
              <span className="text-sm text-muted-foreground">USD</span>
            </div>
          </div>

          {/* Info Message */}
          <div className="flex gap-3 p-3 bg-secondary/40 rounded-lg border border-border/50">
            <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
            <p className="text-sm text-muted-foreground">
              Click "Proceed to Purchase" to contact us on Telegram. We'll send you the guide access immediately.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3">
            <Button
              variant="outline"
              className="flex-1 glass-card border-border/50"
              onClick={onClose}
            >
              Cancel
            </Button>
            <Button
              className="flex-1 bg-gradient-to-r from-primary to-accent hover:opacity-90"
              onClick={handleConfirmPurchase}
            >
              Proceed to Purchase
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
