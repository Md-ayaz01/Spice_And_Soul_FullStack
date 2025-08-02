'use client';

import React from 'react';
import { useParams } from 'next/navigation';
import { Container } from 'react-bootstrap';

const blogPosts = [
  {
    title: 'The Art of Indian Spices',
    excerpt: 'Discover how traditional Indian spices create magical flavors...',
    image: 'https://th.bing.com/th/id/OIP.saaWLxVqSo5MwQ2UU-NTPgHaEg?o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3',
    slug: 'art-of-indian-spices',
    content: 'Spices are the soul of Indian cuisine. At Spice & Soul, we use the freshest spices to craft dishes that tell a story...',
  },
  {
    title: 'Why Food is Culture at Spice & Soul',
    excerpt: 'We believe food is more than just a meal — it’s a story...',
    image: 'https://tse4.mm.bing.net/th/id/OIP.4tK3z6VHRDC_0q-dlWP1pwHaHa?rs=1&pid=ImgDetMain&o=7&rm=3',
    slug: 'food-is-culture',
    content: 'Our restaurant believes that every dish is a representation of a region, a culture, and a memory...',
  },
  {
    title: 'From Farm to Fork: Our Fresh Ingredients',
    excerpt: 'See how we source fresh ingredients daily for your meals...',
    image: 'https://tse3.mm.bing.net/th/id/OIP.VZrjcen2GiUvgLCyM5fVuAHaE8?rs=1&pid=ImgDetMain&o=7&rm=3',
    slug: 'farm-to-fork',
    content: 'We partner with local farms and markets to ensure every ingredient in our kitchen is fresh, organic, and flavorful...',
  },
];

const BlogDetails = () => {
  const { slug } = useParams();
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <Container className="py-5 text-center">
        <h2>Blog post not found</h2>
      </Container>
    );
  }

  return (
    <Container className="py-5">
      <h1 className="mb-4 fw-bold">{post.title}</h1>
      <img src={post.image} alt={post.title} className="img-fluid rounded mb-4" />
      <p style={{ fontSize: '1.1rem', lineHeight: '1.7' }}>{post.content}</p>
    </Container>
  );
};

export default BlogDetails;
