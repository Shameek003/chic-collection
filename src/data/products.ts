import headphones1 from "@/assets/headphones-1.jpg";
import smartphone1 from "@/assets/smartphone-1.jpg";
import laptop1 from "@/assets/laptop-1.jpg";
import earbuds1 from "@/assets/earbuds-1.jpg";
import gamingPhone1 from "@/assets/gaming-phone-1.jpg";
import creatorLaptop1 from "@/assets/creator-laptop-1.jpg";

export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  category: string;
  brand: string;
  description: string;
  features: string[];
  images: string[];
  rating: number;
  reviewCount: number;
  inStock: boolean;
  tags: string[];
}

export const products: Product[] = [
  {
    id: "1",
    name: "Premium Wireless Headphones",
    price: 299,
    originalPrice: 399,
    category: "Audio",
    brand: "SoundTech",
    description: "Experience exceptional sound quality with our premium wireless headphones. Featuring advanced noise cancellation and 30-hour battery life.",
    features: [
      "Active Noise Cancellation",
      "30-hour battery life",
      "Wireless charging case",
      "Premium leather headband",
      "Hi-Res audio support"
    ],
    images: [headphones1],
    rating: 4.8,
    reviewCount: 124,
    inStock: true,
    tags: ["wireless", "premium", "audio", "noise-cancelling"]
  },
  {
    id: "2",
    name: "Flagship Smartphone",
    price: 899,
    originalPrice: 999,
    category: "Phones",
    brand: "TechPro",
    description: "The ultimate smartphone experience with cutting-edge technology, premium design, and professional-grade camera system.",
    features: [
      "6.7-inch OLED display",
      "Triple camera system",
      "5G connectivity",
      "Wireless charging",
      "Premium titanium build"
    ],
    images: [smartphone1],
    rating: 4.9,
    reviewCount: 89,
    inStock: true,
    tags: ["smartphone", "5g", "camera", "premium"]
  },
  {
    id: "3",
    name: "Ultra-Thin Laptop",
    price: 1299,
    category: "Computers",
    brand: "ProBook",
    description: "Ultra-portable laptop designed for professionals. Combines powerful performance with exceptional portability and all-day battery life.",
    features: [
      "14-inch 4K display",
      "16GB RAM",
      "512GB SSD",
      "All-day battery",
      "Thunderbolt 4 ports"
    ],
    images: [laptop1],
    rating: 4.7,
    reviewCount: 156,
    inStock: true,
    tags: ["laptop", "portable", "professional", "4k"]
  },
  {
    id: "4",
    name: "Wireless Sport Earbuds",
    price: 179,
    originalPrice: 229,
    category: "Audio",
    brand: "FitSound",
    description: "Perfect for workouts and active lifestyles. Sweat-resistant with secure fit and premium sound quality.",
    features: [
      "IPX7 water resistance",
      "8-hour battery + case",
      "Secure sport fit",
      "Touch controls",
      "Quick charge"
    ],
    images: [earbuds1],
    rating: 4.6,
    reviewCount: 203,
    inStock: true,
    tags: ["earbuds", "sport", "wireless", "waterproof"]
  },
  {
    id: "5",
    name: "Gaming Smartphone",
    price: 649,
    category: "Phones",
    brand: "GameTech",
    description: "Built for mobile gaming with advanced cooling system, high refresh rate display, and gaming-optimized performance.",
    features: [
      "120Hz display",
      "Gaming triggers",
      "Advanced cooling",
      "5000mAh battery",
      "RGB lighting"
    ],
    images: [gamingPhone1],
    rating: 4.5,
    reviewCount: 67,
    inStock: false,
    tags: ["gaming", "smartphone", "high-refresh", "performance"]
  },
  {
    id: "6",
    name: "Creator Laptop Pro",
    price: 2199,
    category: "Computers",
    brand: "CreativeBook",
    description: "Designed for content creators and professionals. Features powerful graphics, color-accurate display, and premium build quality.",
    features: [
      "16-inch 4K display",
      "32GB RAM",
      "1TB SSD",
      "Dedicated GPU",
      "Color calibrated"
    ],
    images: [creatorLaptop1],
    rating: 4.9,
    reviewCount: 45,
    inStock: true,
    tags: ["laptop", "creator", "professional", "high-performance"]
  }
];

export const categories = ["All", "Audio", "Phones", "Computers"];
export const brands = ["All", "SoundTech", "TechPro", "ProBook", "FitSound", "GameTech", "CreativeBook"];