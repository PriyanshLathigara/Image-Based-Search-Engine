import React, { useState } from "react";
import { Upload, Typography, Divider, Tag, message } from "antd";
import { InboxOutlined } from "@ant-design/icons";

import api from "../services/api";
import ProductGrid from "../components/ProductGrid";

import "./SearchPage.css";

const { Title, Text } = Typography;
const { Dragger } = Upload;

const SearchPage = () => {
  const [preview, setPreview] = useState(null);
  const [products, setProducts] = useState([]);
  const [detectedTags, setDetectedTags] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleUpload = async (file) => {
    try {
      setLoading(true);
      setPreview(URL.createObjectURL(file));

      const formData = new FormData();
      formData.append("image", file);

      const response = await api.post("/search", formData, {
        headers: { "Content-Type": "multipart/form-data" }
      });

      setDetectedTags(response.data.tags || []);
      setProducts(response.data.results || []);
    } catch (error) {
      console.error(error);
      message.error("Image search failed");
    } finally {
      setLoading(false);
    }

    // prevent default upload behavior
    return false;
  };

  return (
    <div className="search-page">
      <Title level={2}>Image-Based Product Search</Title>
      <Text type="secondary">
        Upload a product image to find similar items instantly
      </Text>

      <div className="upload-section">
        <Dragger
          name="image"
          multiple={false}
          showUploadList={false}
          beforeUpload={handleUpload}
          disabled={loading}
        >
          <p className="ant-upload-drag-icon">
            <InboxOutlined />
          </p>
          <p className="ant-upload-text">
            Upload a product image
          </p>
          <p className="ant-upload-hint">
            JPG, PNG • AI-powered visual search
          </p>
        </Dragger>
      </div>

      {preview && (
        <div className="preview-section">
          <img src={preview} alt="Preview" />
        </div>
      )}

      {detectedTags.length > 0 && (
        <div className="tags-section">
          <strong>Detected Tags:</strong>
          <div className="tags">
            {detectedTags.map((tag, index) => (
              <Tag color="blue" key={index}>
                {tag}
              </Tag>
            ))}
          </div>
          <Text type="secondary" className="tag-note">
            *Tags are AI-generated for demo purposes
          </Text>
        </div>
      )}

      <Divider />

      <ProductGrid products={products} loading={loading} />
    </div>
  );
};

export default SearchPage;
