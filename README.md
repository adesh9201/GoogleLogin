# 🔐 GoogleLogin

A full-stack Google OAuth login system built using **Node.js (Express)** for the backend, **MongoDB** for the database, and a **React + Vite** frontend styled with **Tailwind CSS**.

## 🚀 Features

- 🌐 Google OAuth2 Login Integration
- 🔐 Secure JWT Authentication with HTTP-only Cookies
- 🧾 User details stored in MongoDB
- ⚡️ Vite-based React Frontend
- 🌈 Tailwind CSS for styling
- 📁 Environment variables managed securely

---

## 🛠️ Tech Stack

- **Frontend:** React + Vite + Tailwind CSS  
- **Backend:** Node.js + Express  
- **Database:** MongoDB  

---

## 📁 Project Structure

GoogleLogin/
├── backend/               # Express.js server
│   ├── routes/            # Auth routes
│   ├── controllers/       # Auth logic
│   ├── models/         
│   ├── utils     
│   └── .env               # Secret keys (ignored in git)
├── frontend/              # React frontend with Vite
│   ├── src/
│   ├── public/
│   └── .env               # Google OAuth client ID (ignored)
├── .gitignore
└── README.md

---

## 📦 Setup Instructions

1. **Clone the project**
```bash
git clone https://github.com/adesh9201/GoogleLogin.git
cd GoogleLogin

	2.	Install dependencies

# Backend
cd backend
npm install

#for GoogleLogin
cd ..

# Frontend
cd frontend
npm install


   3.	Add .env files
    
	•	backend/.env:

MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
CLIENT_URL=http://localhost:5173

	•	frontend/.env:

VITE_GOOGLE_CLIENT_ID=your_google_client_id

	4.	Run the project

	•	Backend:

cd backend
npm start

	•	Frontend:

cd ../frontend
npm run dev

📸 Preview

Add login screen preview image or GIF here (optional)

✅ To Do
	•	Add refresh token support
	•	Add logout functionality
	•	Improve UI responsiveness
	•	Add error handling on frontend

📃 License

This project is licensed under the MIT License.

	Made with 💙 by Adesh Mishra

---

