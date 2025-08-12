import { Link } from 'react-router-dom';
import { ArrowLeft, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { products } from '@/data/products';
import { useWishlist } from '@/hooks/useWishlist';
import ProductCard from '@/components/ProductCard';

const Wishlist = () => {
  const { wishlist } = useWishlist();

  const wishlistProducts = products.filter(product => 
    wishlist.includes(product.id)
  );

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="container mx-auto px-4 py-8">
        <Link to="/" className="inline-flex items-center text-sm text-muted-foreground hover:text-accent transition-smooth mb-6">
          <ArrowLeft className="h-4 w-4 mr-1" />
          Back to Products
        </Link>

        <div className="flex items-center space-x-3 mb-8">
          <Heart className="h-8 w-8 text-accent" />
          <h1 className="text-3xl font-bold">My Wishlist</h1>
          <span className="bg-accent text-accent-foreground text-sm font-medium px-3 py-1 rounded-full">
            {wishlist.length}
          </span>
        </div>

        {/* Wishlist Content */}
        {wishlistProducts.length === 0 ? (
          <div className="text-center py-16">
            <Heart className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
            <h2 className="text-2xl font-semibold mb-2">Your wishlist is empty</h2>
            <p className="text-muted-foreground mb-6">
              Save products you love to your wishlist and never lose track of them.
            </p>
            <Link to="/">
              <Button variant="accent">
                Start Shopping
              </Button>
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {wishlistProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Wishlist;