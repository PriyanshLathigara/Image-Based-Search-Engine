// Product Grid Component - Displays search results in a grid layout
import React from "react";
import { Row, Col, Empty } from "antd";
import ProductCard from "./ProductCard";

const ProductGrid = ({ products }) => {
  if (!products || products.length === 0) {
    return <Empty description="No products found" />;
  }

  return (
    <Row gutter={[16, 16]}>
      {products.map((product) => (
        <Col key={product._id || product.name}
        xs={24} sm={12} md={8} lg={6}>
          <ProductCard product={product} />
        </Col>
      ))}
    </Row>
  );
};

export default ProductGrid;

