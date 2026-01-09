# 📸 Image-Based Product Search Engine

An AI-powered product search engine where users upload an image and receive visually relevant products from a catalog using semantic tags and intelligent ranking.

This project demonstrates end-to-end system design combining frontend, backend, AI (mocked vision), and database search.

---

## 🚀 Features

- **Upload product images** with live preview.
- **AI-generated semantic tags** from uploaded images.
- **Intelligent product matching** using MongoDB text search.
- **Ranked and relevant product results** for better UX.
- **Clean, responsive UI** built with Ant Design.
- **Modular backend architecture** (easy to swap AI providers).

---

## 🧠 How It Works (High-Level Flow)

Image Upload (Frontend)
↓
POST /api/search (Backend)
↓
AI Tag Generation (Groq – Mock Vision)
↓
MongoDB Text Search + Ranking
↓
Relevant Products Returned
↓
Results Rendered in UI

---

## 🛠️ Tech Stack

### Frontend

- **React.js**
- **Ant Design** (UI Components)
- **Axios** (API Requests)

### Backend

- **Node.js & Express.js**
- **MongoDB Atlas** (Database)
- **Multer** (Image upload handling)

### AI / ML

- **Groq LLM** (Mock Vision for Development)

---

## ⚠️ Important Note About AI Vision (Please Read)

Real image understanding (Vision APIs such as OpenAI Vision or Google Gemini Vision) requires paid API access. Due to **API quota restrictions** and **paid model requirements**, **image-to-tag extraction is MOCKED using Groq LLM** for development and demo purposes.

### How Mock Vision Works

1.  A common prompt is used to simulate image understanding.
2.  Groq generates realistic product tags (e.g., brand, category, color).
3.  The rest of the pipeline (search, ranking, UI) remains production-ready.

**Example prompt used:**

> _"Generate ONLY comma-separated product tags for a footwear product image such as brand, color, category, and type."_

---

## 📦 Sample Product Catalog

The database includes products from multiple categories to demonstrate relevance-based filtering:

- 👟 **Footwear** (Nike, Adidas, Puma, Reebok)
- 👕 **Clothing** (T-Shirts)
- 🎧 **Electronics** (Headphones)
- ⌚ **Accessories** (Watches)
- 🐶 **Pet Supplies** (Dog Food)

_Only relevant products appear based on AI-generated tags._

---

## 🎥 Demo Video

▶️ **[Click here to watch the Demo Video](https://youtu.be/vMN3A8hUYY4)**

**Demo Shows:**

- Uploading a product image
- Image preview
- AI-generated tags
- Matching product results

---

## 🖼️ Screenshots

Screenshots are available in the `/screenshots` folder:

1.  **Home Page**
2.  **Image Upload & Preview**
3.  **Detected Tags**
4.  **Product Results**

---

## 🧪 Run Locally

### 1️⃣ Clone Repository

```bash
git clone [https://github.com/PriyanshLathigara/Image-Based-Search-Engine.git](https://github.com/PriyanshLathigara/Image-Based-Search-Engine.git)
cd Image-Based-Search-Engine
```

### 2️⃣ Backend Setup

```bash
cd server
npm install
npm run dev
```

**Create a `.env` file in `server/`:**

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
GROQ_API_KEY=your_groq_api_key
```

3️⃣ Frontend Setup

```bash
cd client
npm install
npm start
```

- **Frontend:** http://localhost:3000
- **Backend:** http://localhost:5000

---

## 🔮 Future Enhancements

- Replace mock vision with real Vision APIs (OpenAI / Gemini).
- Category confidence-based filtering.
- Product similarity scoring improvements.
- Deployment (Vercel + Render).
- User authentication & favorites.

---

## 🧠 What This Project Demonstrates

- **Clean Architecture:** Frontend–backend separation.
- **Abstraction Layer:** Designing for easy AI provider swaps.
- **Practicality:** Real-world handling of API limitations and costs.
- **Advanced Search:** Semantic search using MongoDB.

---

## 📄 License

This project is licensed under the **MIT License**.

---

## 🙌 Acknowledgements

- **Groq SDK** for fast LLM inference.
- **MongoDB Atlas** for cloud database hosting.
- **Ant Design** for the UI library.

---

⭐ **If you like this project, feel free to star the repository!**
