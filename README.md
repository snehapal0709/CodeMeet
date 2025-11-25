# ⚡ CodeMeet – Realtime Technical Interview Platform

CodeMeet is a full-stack real-time collaborative **mock interview platform** where users can:

- Create interview sessions  
- Join sessions via shareable room links  
- Use live **video calling** powered by Stream  
- Solve coding questions together with a built-in code editor  
- Chat in real-time  
- Track active & past sessions  

The platform helps interviewers and candidates practice live coding rounds just like real technical interviews.

---

## 🚀 Features

### 🎥 Real-time Video Interview
- HD video calling using **Stream Video API**
- Auto-join via session link
- Host + Participant view

### 💻 Collaborative Coding
- Integrated code editor
- Write + run code during interview
- Supports multiple languages using Piston API

### 💬 Live Chat
- Stream Chat integration
- Session-specific chat channels

### 🔐 Authentication (Clerk)
- Login / signup via Clerk
- Secure protected backend routes
- Automatic session-based auth

### 🗂️ Dashboard + Session Management
- Create new interview sessions
- See active sessions
- View recent completed sessions

---

## 🧰 Tech Stack

### **Frontend**
- React (Vite)
- Clerk Authentication
- TanStack Query
- Stream Video + Chat SDKs
- Axios

### **Backend**
- Node.js + Express
- MongoDB + Mongoose
- Clerk Auth Middleware
- Stream Server SDK
- Piston API for code execution

---

## 📁 Project Structure

/frontend
/src
/api
/components
/hooks
/lib
/pages
.env
package.json

/backend
/src
/controllers
/middleware
/models
/routes
server.js
.env
package.json

yaml
Copy code

---

## 🔧 Backend Setup

### 1️⃣ Go to backend folder
```bash
cd backend
2️⃣ Install dependencies
bash
Copy code
npm install
3️⃣ Create .env (Backend)
ini
Copy code
PORT=3000
MONGO_URI=your_mongodb_url

CLERK_SECRET_KEY=your_clerk_secret_key

STREAM_API_KEY=your_stream_api_key
STREAM_SECRET_KEY=your_stream_secret_key

PISTON_API_URL=https://emkc.org/api/v2/piston
4️⃣ Run backend
bash
Copy code
npm run dev
Backend: http://localhost:3000

🎨 Frontend Setup
1️⃣ Go to frontend
bash
Copy code
cd frontend
2️⃣ Install dependencies
bash
Copy code
npm install
3️⃣ Create .env (Frontend)
ini
Copy code
VITE_CLERK_PUBLISHABLE_KEY=your_clerk_key
VITE_API_URL=http://localhost:3000
VITE_STREAM_API_KEY=your_stream_key
4️⃣ Start frontend
bash
Copy code
npm run dev
Frontend: http://localhost:5173

🔗 Sharing Session Links
Each new session generates a unique URL like:

bash
Copy code
http://localhost:5173/session/:sessionId
Send this URL to the interviewer/candidate.
They can join instantly (must be logged in).

☁️ Deployment (High-level)
Deploy backend → Render / Railway

Add all environment variables

Deploy frontend → Vercel / Netlify

Update VITE_API_URL in frontend

Stream + Clerk keys must be production keys

🤝 Contributing
Contributions are welcome!
Feel free to open issues, fix bugs, or request features.

⭐ Support
If you like this project, please star it on GitHub ⭐
It motivates development and future improvements!