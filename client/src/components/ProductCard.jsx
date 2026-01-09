// Product Card Component - Individual product card display

import React from "react";
import { Card, Typography } from "antd";

const { Title, Text } = Typography;

const ProductCard = ({ product }) => {
  return (
    <Card
      hoverable
      cover={
        <img
          alt={product.name}
          src={product.imageUrl || "https://via.placeholder.com/300"}

          style={{ height: 200, objectFit: "cover" }}
        />
      }
    >
      <Title level={5}>{product.name}</Title>
      <Text type="secondary">{product.description}</Text>
      <br />
      <Text strong style={{ color: "#1677ff" }}>
        ₹{product.price}
      </Text>
    </Card>
  );
};

export default ProductCard;

