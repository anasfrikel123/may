import { Product, BlogPost, TeamMember, Testimonial } from './types';

export const products: Product[] = [
  {
    id: '1',
    name: 'Eco-Friendly Linen Dress',
    price: 89.99,
    description: 'A beautiful, breathable linen dress made from sustainable materials. Perfect for summer days and evening gatherings.',
    category: 'women',
    image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
    colors: ['White', 'Beige', 'Light Blue'],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    featured: true,
    new: true
  },
  {
    id: '2',
    name: 'Organic Cotton T-Shirt',
    price: 34.99,
    description: 'Classic fit t-shirt made from 100% organic cotton. Comfortable, durable, and eco-friendly.',
    category: 'men',
    image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
    colors: ['Black', 'White', 'Navy', 'Gray'],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    featured: true
  },
  {
    id: '3',
    name: 'Handcrafted Leather Belt',
    price: 59.99,
    description: 'Premium leather belt handcrafted by local artisans. Durable, stylish, and made to last.',
    category: 'accessories',
    image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
    colors: ['Brown', 'Black'],
    sizes: ['S', 'M', 'L'],
    featured: true
  },
  {
    id: '4',
    name: 'Sustainable Denim Jeans',
    price: 79.99,
    description: 'Eco-friendly denim jeans made with sustainable practices and recycled materials. Stylish and comfortable for everyday wear.',
    category: 'women',
    image: 'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
    colors: ['Blue', 'Black', 'Light Wash'],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    new: true
  },
  {
    id: '5',
    name: 'Merino Wool Sweater',
    price: 99.99,
    description: 'Luxurious merino wool sweater that keeps you warm without the bulk. Ethically sourced and produced.',
    category: 'men',
    image: 'https://images.unsplash.com/photo-1516826957135-700dedea698c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
    colors: ['Charcoal', 'Navy', 'Burgundy'],
    sizes: ['S', 'M', 'L', 'XL']
  },
  {
    id: '6',
    name: 'Handwoven Scarf',
    price: 45.99,
    description: 'Beautiful handwoven scarf made by local artisans using traditional techniques and natural dyes.',
    category: 'accessories',
    image: 'https://images.unsplash.com/photo-1520903920243-00d872a2d1c9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
    colors: ['Multicolor', 'Blue', 'Red'],
    sizes: ['One Size'],
    new: true
  }
];

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'Sustainable Fashion: The Future of Clothing',
    excerpt: 'Discover how sustainable practices are reshaping the fashion industry and how May Style is leading the way.',
    content: `
      <p>The fashion industry is one of the largest polluters in the world, but a new wave of sustainable practices is changing how we produce and consume clothing. At May Style, we believe in creating beautiful garments that don't harm our planet.</p>
      
      <p>Sustainable fashion encompasses several key principles:</p>
      
      <ul>
        <li>Using eco-friendly materials like organic cotton, hemp, and recycled fabrics</li>
        <li>Implementing ethical manufacturing processes that reduce waste and pollution</li>
        <li>Ensuring fair wages and safe working conditions for all workers</li>
        <li>Creating timeless designs that transcend seasonal trends</li>
      </ul>
      
      <p>Our commitment to sustainability goes beyond just using eco-friendly materials. We've implemented a closed-loop production system that minimizes waste and maximizes resource efficiency. Our factory in Tangier operates on 80% renewable energy, and we're working toward 100% by 2026.</p>
      
      <p>By choosing sustainable fashion, you're not just making a style statement—you're voting for a better future with your wallet. Every purchase from May Style supports our mission to make fashion that looks good, feels good, and does good.</p>
    `,
    author: 'Maya Johnson',
    date: 'April 15, 2025',
    image: 'https://images.unsplash.com/photo-1523381210434-271e8be1f52b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
    featured: true,
    tags: ['Sustainability', 'Eco-Fashion', 'Ethical Production']
  },
  {
    id: '2',
    title: 'Summer Style Guide: Effortless Looks for Hot Days',
    excerpt: 'Stay cool and stylish this summer with our curated selection of breathable, lightweight pieces.',
    content: `
      <p>As temperatures rise, dressing well while staying comfortable becomes a delicate balancing act. Our summer collection is designed with both style and function in mind, featuring breathable fabrics and versatile pieces that can be mixed and matched for any occasion.</p>
      
      <p>Here are our top summer style tips:</p>
      
      <h3>1. Choose Natural Fabrics</h3>
      <p>Opt for linen, cotton, and other natural fibers that allow your skin to breathe. Our Eco-Friendly Linen Dress is perfect for hot days, offering both comfort and elegance.</p>
      
      <h3>2. Layer Strategically</h3>
      <p>Even in summer, temperatures can fluctuate. Light layers like our Organic Cotton Cardigan can be easily added or removed as needed.</p>
      
      <h3>3. Accessorize Thoughtfully</h3>
      <p>A well-chosen accessory can elevate a simple outfit. Our Handwoven Scarves add a pop of color and can be styled multiple ways—as a headband, neck scarf, or even as a beach cover-up.</p>
      
      <p>Visit our store to explore our full summer collection and find pieces that will keep you looking and feeling cool all season long.</p>
    `,
    author: 'Sophia Chen',
    date: 'March 28, 2025',
    image: 'https://images.unsplash.com/photo-1469334031218-e382a71b716b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
    tags: ['Summer Fashion', 'Style Guide', 'Seasonal Trends']
  },
  {
    id: '3',
    title: 'Behind the Scenes: The Making of Our Handcrafted Accessories',
    excerpt: 'Take a journey with us as we explore the traditional craftsmanship behind our most popular accessories.',
    content: `
      <p>At May Style, we believe that true luxury lies in the story behind each piece. Our accessories collection showcases the incredible skill of local artisans who have perfected their craft over generations.</p>
      
      <p>Recently, we visited the workshop where our Handcrafted Leather Belts are made. The process begins with carefully selecting the finest locally sourced leather. Each hide is inspected for quality before being cut, shaped, and finished by hand.</p>
      
      <p>What makes these belts special is the attention to detail. The edges are beveled and burnished to create a smooth finish, and each hole is punched individually rather than machine-stamped. The buckles are attached using traditional methods that ensure durability and a clean aesthetic.</p>
      
      <p>It takes approximately four hours to complete a single belt—a testament to the care and precision that goes into each piece. This slow, methodical approach stands in stark contrast to mass production techniques used by fast fashion brands.</p>
      
      <p>By supporting traditional craftsmanship, we're not just creating beautiful accessories; we're helping preserve cultural heritage and providing sustainable livelihoods for skilled artisans in our community.</p>
    `,
    author: 'Karim Alaoui',
    date: 'March 10, 2025',
    image: 'https://images.unsplash.com/photo-1531995811006-35cb42e1a022?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
    tags: ['Craftsmanship', 'Accessories', 'Behind the Scenes']
  }
];

export const teamMembers: TeamMember[] = [
  {
    id: '1',
    name: 'Maya Johnson',
    role: 'Founder & Creative Director',
    bio: 'With over 15 years of experience in the fashion industry, Maya founded May Style with a vision to create beautiful, sustainable clothing that celebrates traditional craftsmanship.',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: '2',
    name: 'Karim Alaoui',
    role: 'Head of Production',
    bio: 'Karim oversees all aspects of production, ensuring that each garment meets our high standards for quality and sustainability.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: '3',
    name: 'Sophia Chen',
    role: 'Lead Designer',
    bio: 'Sophia brings a fresh perspective to traditional designs, creating pieces that are both timeless and contemporary.',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: '4',
    name: 'Omar Benali',
    role: 'Marketing Director',
    bio: 'Omar leads our marketing efforts, sharing the story of May Style with the world and building our community of conscious consumers.',
    image: 'https://images.unsplash.com/photo-1531384441138-2736e62e0919?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80'
  }
];

export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Sarah M.',
    role: 'Loyal Customer',
    content: 'I\'ve been shopping with May Style for over two years now, and I\'m consistently impressed by the quality and durability of their clothing. The pieces I\'ve purchased still look as good as new, even after regular wear.',
    image: 'https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: '2',
    name: 'James T.',
    role: 'First-time Buyer',
    content: 'I was looking for sustainable clothing options and discovered May Style. The attention to detail in their garments is exceptional, and knowing that my purchase supports ethical production practices makes me feel good about my choice.',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: '3',
    name: 'Leila K.',
    role: 'Fashion Blogger',
    content: 'As someone who reviews fashion brands for a living, I can confidently say that May Style stands out for their commitment to both style and sustainability. Their pieces are versatile, well-made, and timeless.',
    image: 'https://images.unsplash.com/photo-1534751516642-a1af1ef26a56?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80'
  }
];