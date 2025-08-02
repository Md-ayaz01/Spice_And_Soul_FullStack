'use client';

import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { motion } from 'framer-motion';
import '../utils/image.styles.css'; // ensure this path is correct

const menuItems = [
  {
    title: 'Butter Chicken',
    description: 'Creamy tomato-based chicken curry.',
    price: '₹320',
    image: 'https://tse4.mm.bing.net/th/id/OIP.uVbgm8G3nSPeu5dV104iBwHaEK?rs=1&pid=ImgDetMain&o=7&rm=3',
  },
  {
    title: 'Paneer Tikka',
    description: 'Grilled cottage cheese with spices.',
    price: '₹280',
    image: 'https://i0.wp.com/vegecravings.com/wp-content/uploads/2018/04/Paneer-Tikka-Recipe-Step-By-Step-Instructions.jpg?fit=2324%2C1944&quality=30&strip=all&ssl=1',
  },
  {
    title: 'chicken Biryani',
    description: 'Spiced rice with mixed vegetables.',
    price: '₹240',
    image: 'https://img.freepik.com/premium-photo/spicy-chicken-biryani-platter_1169880-26020.jpg',
  },
  {
    title: 'Tandoori Roti',
    description: 'Clay-oven baked flatbread.',
    price: '₹35',
    image: 'https://png.pngtree.com/thumb_back/fw800/background/20240913/pngtree-delicious-indian-flatbread-naan-on-a-wooden-plate-image_16178877.jpg',
  },
  {
    title: 'Gulab Jamun',
    description: 'Sweet milk dumplings soaked in syrup.',
    price: '₹90',
    image: 'https://tse1.mm.bing.net/th/id/OIP.tjgallyCiGv_B0R1rpKrZAHaHa?w=800&h=800&rs=1&pid=ImgDetMain&o=7&rm=3',
  },
  {
    title: 'Masala Dosa',
    description: 'Crispy dosa with spicy potato filling.',
    price: '₹160',
    image: 'https://vismaifood.com/storage/app/uploads/public/8b4/19e/427/thumb__1200_0_0_0_auto.jpg',
  },
];

const Menu = () => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
  >
    <Container className="my-5 text-center">
      <h2 className="fw-bold mb-4">Our Menu</h2>
      <Row className="g-4">
        {menuItems.map((item, idx) => (
          <Col key={idx} xs={12} sm={6} md={4}>
            <Card className="h-100 shadow-sm rounded-4 glass">
              <div className="menu-image-wrapper">
                <Card.Img
                  variant="top"
                  src={item.image}
                  alt={item.title}
                  className="menu-image"
                />
              </div>
              <Card.Body>
                <Card.Title className="fw-bold">{item.title}</Card.Title>
                <Card.Text>{item.description}</Card.Text>
                <h5 className="text-primary fw-semibold">{item.price}</h5>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  </motion.div>
);

export default Menu;
