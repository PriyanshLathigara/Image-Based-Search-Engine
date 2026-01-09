import React, { useState } from "react";
import { Upload, Typography, Spin } from "antd";
import { InboxOutlined } from "@ant-design/icons";
import "./ImageUpload.css";

const { Dragger } = Upload;
const { Text } = Typography;

const ImageUpload = ({ onSearch, loading }) => {
  const [preview, setPreview] = useState(null);

  const handleChange = (info) => {
    const file = info.file.originFileObj || info.file;
    if (!file) return;

    const previewUrl = URL.createObjectURL(file);
    setPreview(previewUrl);

    onSearch(file);
  };

  
  return (
    <div className="upload-container">
      {!preview && (
        <Dragger
          accept="image/*"
          beforeUpload={() => false}
          showUploadList={false}
          onChange={handleChange}
        >
          <p className="upload-icon">
            <InboxOutlined />
          </p>
          <p className="upload-text">Upload a product image</p>
          <Text type="secondary">
            JPG, PNG · AI-powered visual search
          </Text>
        </Dragger>
      )}

      {preview && (
        <div className="preview-container">
          <img src={preview} alt="Preview" />
          {loading && (
            <div className="loading-overlay">
              <Spin size="large" />
              <Text>Analyzing image...</Text>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default ImageUpload;
