// index.js
import express from 'express';
import cors from 'cors';

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors({
  origin: 'http://localhost:5173', // Update this to match your frontend URL
  optionsSuccessStatus: 200
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something went wrong!' });
});

// ---------- Mock Data ----------
let artisanOffers = [
  {
    id: "a1",
    title: "Maâlem Zellige",
    metier: "Zellige",
    location: "Fès",
    experience: "5+ ans",
    description: "Atelier traditionnel cherche artisan confirmé pour projets de riads.",
    createdAt: new Date().toISOString()
  },
  {
    id: "a2",
    title: "Menuisier Ebéniste",
    metier: "Menuiserie",
    location: "Marrakech",
    experience: "2-5 ans",
    description: "Fabrication de portes sculptées et mobilier sur mesure.",
    createdAt: new Date().toISOString()
  }
];

let stages = [
  {
    id: "s1",
    title: "Stage – Tissage (3 mois)",
    metier: "Tissage",
    location: "Chefchaouen",
    experience: "0-2 ans",
    description: "Découverte des métiers du tissage avec maître artisan.",
    createdAt: new Date().toISOString()
  }
];

// Helper function to validate artisan data
const validateArtisan = (data) => {
  if (!data.title || !data.metier || !data.location) {
    return { valid: false, error: 'Title, metier, and location are required' };
  }
  return { valid: true };
};

// Helper function to validate stage data
const validateStage = (data) => {
  if (!data.title || !data.metier || !data.location) {
    return { valid: false, error: 'Title, metier, and location are required' };
  }
  return { valid: true };
};

// ---------- Routes ----------

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.status(200).json({ status: 'ok', timestamp: new Date().toISOString() });
});

// Get all artisans
app.get('/api/artisans', (req, res) => {
  try {
    res.status(200).json({
      success: true,
      count: artisanOffers.length,
      data: artisanOffers
    });
  } catch (error) {
    res.status(500).json({ success: false, error: 'Server error' });
  }
});

// Get artisan by ID
app.get('/api/artisans/:id', (req, res) => {
  try {
    const artisan = artisanOffers.find(a => a.id === req.params.id);
    if (!artisan) {
      return res.status(404).json({ success: false, error: 'Artisan not found' });
    }
    res.status(200).json({ success: true, data: artisan });
  } catch (error) {
    res.status(500).json({ success: false, error: 'Server error' });
  }
});

// Create a new artisan offer
app.post('/api/artisans', (req, res) => {
  try {
    const validation = validateArtisan(req.body);
    if (!validation.valid) {
      return res.status(400).json({ success: false, error: validation.error });
    }

    const newOffer = { 
      id: Date.now().toString(), 
      ...req.body,
      createdAt: new Date().toISOString()
    };
    
    artisanOffers.push(newOffer);
    res.status(201).json({ success: true, data: newOffer });
  } catch (error) {
    res.status(500).json({ success: false, error: 'Server error' });
  }
});

// Get all stages
app.get('/api/stages', (req, res) => {
  try {
    res.status(200).json({
      success: true,
      count: stages.length,
      data: stages
    });
  } catch (error) {
    res.status(500).json({ success: false, error: 'Server error' });
  }
});

// Get stage by ID
app.get('/api/stages/:id', (req, res) => {
  try {
    const stage = stages.find(s => s.id === req.params.id);
    if (!stage) {
      return res.status(404).json({ success: false, error: 'Stage not found' });
    }
    res.status(200).json({ success: true, data: stage });
  } catch (error) {
    res.status(500).json({ success: false, error: 'Server error' });
  }
});

// Create a new stage
app.post('/api/stages', (req, res) => {
  try {
    const validation = validateStage(req.body);
    if (!validation.valid) {
      return res.status(400).json({ success: false, error: validation.error });
    }

    const newStage = { 
      id: Date.now().toString(), 
      ...req.body,
      createdAt: new Date().toISOString()
    };
    
    stages.push(newStage);
    res.status(201).json({ success: true, data: newStage });
  } catch (error) {
    res.status(500).json({ success: false, error: 'Server error' });
  }
});

// 404 Handler
app.use((req, res) => {
  res.status(404).json({ success: false, error: 'Endpoint not found' });
});

// ---------- Start Server ----------
const server = app.listen(PORT, () => {
  console.log(`MANUARA backend running on http://localhost:${PORT}`);
});

// Handle unhandled promise rejections
process.on('unhandledRejection', (err) => {
  console.error(`Error: ${err.message}`);
  server.close(() => process.exit(1));
});

export default app;
