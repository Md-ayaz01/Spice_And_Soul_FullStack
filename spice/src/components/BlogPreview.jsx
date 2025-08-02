'use client';

import React from 'react';
import Link from 'next/link';
import { Container, Row, Col, Card } from 'react-bootstrap';

const blogPosts = [
  {
    title: 'The Art of Indian Spices',
    excerpt: 'Discover how traditional Indian spices create magical flavors...',
    image: 'https://th.bing.com/th/id/OIP.saaWLxVqSo5MwQ2UU-NTPgHaEg?o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3',
    slug: 'art-of-indian-spices',
  },
  {
    title: 'Why Food is Culture at Spice & Soul',
    excerpt: 'We believe food is more than just a meal — it’s a story...',
    image: 'https://tse4.mm.bing.net/th/id/OIP.4tK3z6VHRDC_0q-dlWP1pwHaHa?rs=1&pid=ImgDetMain&o=7&rm=3',
    slug: 'food-is-culture',
  },
  {
    title: 'From Farm to Fork: Our Fresh Ingredients',
    excerpt: 'See how we source fresh ingredients daily for your meals...',
    image: 'https://tse3.mm.bing.net/th/id/OIP.VZrjcen2GiUvgLCyM5fVuAHaE8?rs=1&pid=ImgDetMain&o=7&rm=3',
    slug: 'farm-to-fork',
  },
];

const BlogPreview = () => (
  <section className="bg-light py-5">
    <Container>
      <h2 className="text-center mb-4 fw-bold">From Our Blog</h2>
      <Row className="g-4">
        {blogPosts.map((post, index) => (
          <Col key={index} md={4}>
            <Card className="h-100 shadow-sm border-0 rounded-4">
              <Card.Img variant="top" src={post.image} className="blog-card-img" />

              <Card.Body>
                <Card.Title>{post.title}</Card.Title>
                <Card.Text>{post.excerpt}</Card.Text>
                <Link href={`/blog/${post.slug}`} className="btn btn-outline-primary btn-sm">
                  Read More
                </Link>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      <div className="text-center mt-4">
        <Link href="/blog" className="btn btn-primary px-4">View All Blogs</Link>
      </div>
    </Container>
  </section>
);

export default BlogPreview;
