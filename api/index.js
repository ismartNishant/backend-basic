import express from "express";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;


const allowedOrigins = [
  "http://localhost:5173",
  "https://frontend-ebon-ten-23.vercel.app",
  
];

//  CORS config
const corsOptions = {
  origin: function (origin, callback) {
    // allow non-browser requests (like Postman)
    if (!origin) return callback(null, true);

    if (allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true
};

//  Global middlewares
app.use(cors(corsOptions));

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Welcome to the Joke API! Visit /api/jokes for some laughs.");
});

//  API routes
app.get("/api/jokes", (req, res) => {
  const jokes = [
    { id: 1, author: "Anonymous", joke: "Why don't scientists trust atoms? Because they make up everything!", category: "Science" },
    { id: 2, author: "Anonymous", joke: "Why did the scarecrow win an award? Because he was outstanding in his field!", category: "Farm" },
    { id: 3, author: "Anonymous", joke: "Why don't eggs tell jokes? They'd crack each other up!", category: "Food" },
    { id: 4, author: "Anonymous", joke: "What do you call fake spaghetti? An impasta!", category: "Food" },
    { id: 5, author: "Anonymous", joke: "Why did the bicycle fall over? It was two-tired!", category: "Transportation" }
  ];
  res.json(jokes);
});

//  Health check
app.get("/api/health", (req, res) => {
  res.status(200).json({ status: "OK" });
});


//  Global error handler (keeps CORS working on errors)
app.use((err, req, res, next) => {
  console.error(err.message);

  res.status(500).json({
    message: err.message || "Internal Server Error"
  });
});

export default function handler(req, res) {
  return app(req, res);
}