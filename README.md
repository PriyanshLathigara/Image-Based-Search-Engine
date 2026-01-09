# Image-Based Product Search Engine

## Overview

An AI-powered product search system where users upload an image and receive visually similar products using AI-generated tags and semantic search.

## Tech Stack

- React.js + Ant Design
- Node.js + Express
- MongoDB Atlas
- Groq (Mock Vision for development)

## How It Works

1. User uploads an image
2. AI generates semantic tags
3. MongoDB text search finds relevant products
4. Ranked results are displayed

## Demo

(Insert screenshots here)

## Note

Vision tagging is mocked using Groq due to vision API quota limits. Architecture supports real vision APIs like Gemini or OpenAI.

## Run Locally

### Backend

```bash
cd server
npm install
npm run dev
```

### Frontend

```bash
cd client
npm install
npm start
```
