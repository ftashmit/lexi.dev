# 🚀 lexi.dev — AI-Powered Sentiment Analysis Platform

lexi.dev is a full-stack, AI-powered sentiment analysis platform built with a modern glassmorphic frontend, a scalable Django REST backend, and a machine learning–driven sentiment classification service. The project is designed to analyze textual data in real time and extract emotions, sentiment polarity, and confidence scores with high accuracy.

This repository follows a **monorepo architecture** containing:
- A modern frontend for user interaction  
- A robust backend API  
- A machine learning service for sentiment inference  

---

## 🧠 Key Features

- ✨ Modern glassmorphic UI with animated gradients
- ⚡ Real-time sentiment analysis using AI
- 🌍 Language detection and translation
- 📊 Sentiment classification with confidence score
- 🔗 REST API powered by Django
- 🧠 Dedicated ML service for inference
- 📱 Fully responsive across all devices
- 🛠 Monorepo architecture for clean separation of concerns

---

## 🏗 Project Architecture
```
lexi.dev/
│
├── frontend/ # Vite + React + Tailwind CSS (UI)
├── backend/ # Django REST API (Business logic)
├── ml-service/ # Machine Learning sentiment model
├── .gitignore
└── README.md

```


---

## 🎨 Frontend Tech Stack

- **Vite**
- **React.js**
- **Tailwind CSS**
- **React Icons**
- **Glassmorphism UI Design**
- **Animated element effects**
- **Responsive layout system**

### Frontend Capabilities
- Hero section with animated gradients
- Sticky glassmorphic navbar
- About section with technology logo loop
- Interactive sentiment analyzer UI
- Modern footer with GitHub integration

---

## ⚙ Backend Tech Stack

- **Django**
- **Django REST Framework (DRF)**
- **API-based architecture**
- **CORS configuration**
- **Text preprocessing & routing**
- **Translation & language detection pipeline**

The backend serves as the **bridge between the frontend UI and machine learning model**, exposing clean REST endpoints.

---

## 🤖 Machine Learning Stack

- **Python**
- **Scikit-learn / Deep Learning models**
- **NLP preprocessing**
- **Tokenization & vectorization**
- **Confidence scoring**
- **Saved model inference system**

The ML service is responsible for:
- Sentiment detection (Positive / Negative / Neutral)
- Confidence score generation
- Language normalization for better accuracy

---

## 🔌 API Workflow

Frontend → Django REST API → ML Service → Sentiment Result → Frontend UI


---

## 🔍 Sentiment Output Format

```json
{
  "language": "en",
  "translated": "This product is amazing!",
  "sentiment": "Positive",
  "confidence": "0.94"
}
```
🚀 How to Run Locally
1️⃣ Clone the Repository

```
git clone https://github.com/ftashmit/lexi.dev.git
cd lexi.dev
```
2️⃣ Run the Frontend
```
cd frontend
npm install
npm run dev
```
3️⃣ Run the Backend
```
cd backend
pip install -r requirements.txt
python manage.py runserver 8001
```
4️⃣ Run the ML Service
```
cd ml-service
uvicorn app:app --reload --port 8000
```
🌐 Future Deployment Strategy
- Frontend → Vercel

- Backend → AWS / Railway / Render

- ML Service → Dedicated cloud VM or API container

# Full CI/CD planned

## 🧩 Use Cases
- CRM sentiment monitoring

- Social media monitoring tools

- Customer feedback analysis

- Product review analysis

- Opinion mining for business analytics

## 📈 Impact & Outcomes
- lexi.dev enables businesses and CRM teams to:

- Identify customer emotions in real time

- Detect negative feedback early

- Improve customer retention

- Enhance data-driven decision-making

- Optimize support workflows using AI

## 👨‍💻 Author
Ashmit Dutta

🔗 GitHub Repository
👉 https://github.com/ftashmit/lexi.dev

## 📜 License
This project is licensed under the MIT License — feel free to use, modify, and distribute with attribution.

## ⭐ If you like this project
Don’t forget to star the repository and share it with others!


---
