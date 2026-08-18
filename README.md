# Arshith-Fresh

E-commerce & grocery platform with Node.js/Express backend and modern frontend.

## Project Structure

```
Arshith-Fresh/
├── backend/       # Node.js + Express API server
│   ├── server.js  # Main Express entry point
│   ├── package.json
│   └── .env.example
├── frontend/      # Frontend client application
└── README.md
```

## Getting Started

### Backend Setup
1. Navigate to the backend directory:
   ```bash
   cd backend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create `.env` file from `.env.example`:
   ```bash
   cp .env.example .env
   ```
4. Start the development server:
   ```bash
   npm run dev
   ```
   Server will run on `http://localhost:5000`.

### Health Check Route
- `GET http://localhost:5000/` &rarr; `"API is running"`
- `GET http://localhost:5000/api` &rarr; `{ "message": "API is running" }`
