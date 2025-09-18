// index.js

const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
const PORT = process.env.PORT || 5000;

// Middlewares
app.use(cors());
app.use(bodyParser.json());

// ---------- Mock Data ----------
let artisanOffers = [
  {
    id: "a1",
    title: "Maâlem Zellige",
    metier: "Zellige",
    location: "Fès",
    experience: "5+ ans",
    description: "Atelier traditionnel cherche artisan confirmé pour projets de riads."
  },
  {
    id: "a2",
    title: "Menuisier Ebéniste",
    metier: "Menuiserie",
    location: "Marrakech",
    experience: "2-5 ans",
    description: "Fabrication de portes sculptées et mobilier sur mesure."
  }
];

let stages = [
  {
    id: "s1",
    title: "Stage – Tissage (3 mois)",
    metier: "Tissage",
    location: "Chefchaouen",
    experience: "0-2 ans",
    description: "Découverte des métiers du tissage avec maître artisan."
  }
];

// ---------- Routes ----------

// get all artisans
app.get("/api/artisans", (req, res) => {
  res.json(artisanOffers);
});

// get all stages
app.get("/api/stages", (req, res) => {
  res.json(stages);
});

// post a new artisan offer
app.post("/api/artisans", (req, res) => {
  const newOffer = { id: Date.now().toString(), ...req.body };
  artisanOffers.push(newOffer);
  res.status(201).json(newOffer);
});

// post a new stage
app.post("/api/stages", (req, res) => {
  const newStage = { id: Date.now().toString(), ...req.body };
  stages.push(newStage);
  res.status(201).json(newStage);
});

// ---------- Start Server ----------
app.listen(PORT, () => {
  console.log(`MANUARA backend running on http://localhost:${PORT}`);
});

