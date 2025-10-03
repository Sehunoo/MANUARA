import React, { useState } from "react";
import { BrowserRouter, Routes, Route, Link, NavLink, useNavigate } from "react-router-dom";
import "./App.css";


/* -------------------------- Initial Mock Data -------------------------- */
const INITIAL_ARTISAN_OFFERS = [
  { id: "a1", title: "Maâlem Zellige", metier: "Zellige", location: "Fès", experience: "5+ ans", description: "Atelier traditionnel cherche artisan confirmé pour projets de riads." },
  { id: "a2", title: "Menuisier Ebéniste", metier: "Menuiserie", location: "Marrakech", experience: "2-5 ans", description: "Fabrication de portes sculptées et mobilier sur mesure." },
  { id: "a3", title: "Tisserand", metier: "Tissage", location: "Tétouan", experience: "0-2 ans", description: "Coopérative cherchant stagiaire motivé pour apprentissage." },
  { id: "a4", title: "Ferronnier d’art", metier: "Ferronnerie", location: "Rabat", experience: "5+ ans", description: "Pièces sur mesure pour hôtels et maisons d’hôtes." },
];

const INITIAL_STAGES = [
  { id: "s1", title: "Stage – Tissage (3 mois)", metier: "Tissage", location: "Chefchaouen", experience: "0-2 ans", description: "Découverte des métiers du tissage avec maître artisan." },
  { id: "s2", title: "Stage – Zellige (2 mois)", metier: "Zellige", location: "Fès", experience: "0-2 ans", description: "Initiation à la coupe et pose de zellige traditionnel." },
];

/* -------------------------- App -------------------------- */
function App() {
  const [artisanOffers, setArtisanOffers] = useState(INITIAL_ARTISAN_OFFERS);
  const [stages, setStages] = useState(INITIAL_STAGES);
  const [employerOffers, setEmployerOffers] = useState([]);

  return (
    <BrowserRouter>
      <div className="page-container">
        <Header />
        <main className="container">
          <Routes>
            <Route path="/" element={<Home artisanOffers={artisanOffers} />} />
            <Route path="/artisan" element={<ArtisanList artisanOffers={artisanOffers} />} />
            <Route path="/stage" element={<StageList stages={stages} />} />
            <Route path="/crafts" element={<Crafts />} />
            <Route path="/employer" element={<EmployerForm setEmployerOffers={setEmployerOffers} />} />
            <Route path="/employer-offers" element={<EmployerOffersList employerOffers={employerOffers} />} />
            <Route path="/employee" element={<EmployeeForm setArtisanOffers={setArtisanOffers} setStages={setStages} />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

/* -------------------------- Header -------------------------- */
function Header() {
  return (
    <header className="header">
      <div className="brand-container">
        <Link className="brand" to="/">
          <img
            src="https://media.istockphoto.com/id/1404932480/photo/gold-capital-letter-m.jpg?s=612x612&w=0&k=20&c=h_ghzUqp66yviVae3cjOhwWQaDkiXbqI4kaupAJtmOE="
            alt="Manuara Logo"
            className="logo"
          />
          <span className="brand-name">ANUARA</span>
        </Link>
      </div>

      <nav className="nav">
        <NavLink to="/" end className={({ isActive }) => (isActive ? "active" : undefined)}>Home</NavLink>
        <NavLink to="/artisan" className={({ isActive }) => (isActive ? "active" : undefined)}>Artisans</NavLink>
        <NavLink to="/stage" className={({ isActive }) => (isActive ? "active" : undefined)}>Stages</NavLink>
        <NavLink to="/crafts" className={({ isActive }) => (isActive ? "active" : undefined)}>Crafts</NavLink>
        <NavLink to="/employer" className={({ isActive }) => (isActive ? "active" : undefined)}>Employeur</NavLink>
        <NavLink to="/employee" className={({ isActive }) => (isActive ? "active" : undefined)}>Candidat</NavLink>
      </nav>
    </header>
  );
}

/* -------------------------- Footer -------------------------- */
function Footer() {
  return <footer className="footer">© 2025 MANUARA Maroc</footer>;
}

/* -------------------------- Home Page -------------------------- */
function Home({ artisanOffers }) {
  return (
    <section className="home">
      <section className="home-hero">
        <div className="home-hero__content">
          <span className="home-hero__kicker">Craftsmanship • Community • Careers</span>
          <h1>
            Welcome to <span className="text-highlight">MANUARA</span> Morocco
          </h1>
          <p>
            Discover Morocco’s artisanal heritage. Find opportunities, publish offers, and connect with masters across the kingdom.
          </p>
          <div className="btn-group">
            <Link to="/artisan" className="btn btn-primary">See the offers</Link>
            <Link to="/employer" className="btn btn-secondary">Post an offer</Link>
          </div>
        </div>
      </section>

      <section className="featured-offers">
        <h2>Featured Offers</h2>
        <ul className="card-list">
          {artisanOffers.slice(0, 2).map(a => (
            <li key={a.id} className="card">
              <h3>{a.title}</h3>
              <p>{a.metier} — {a.location}</p>
              <p>{a.description}</p>
              <Link to="/artisan" className="btn-small">See all the offers</Link>
            </li>
          ))}
        </ul>
      </section>

      <section className="home-crafts-preview">
        <h2>Discover our crafts</h2>
        <div className="crafts-preview">
          <img src="https://media.istockphoto.com/id/2178507792/fr/photo/artiste-f%C3%A9minine-d%C3%A9corant-et-peignant-des-tasses-en-argile-en-c%C3%A9ramique-faites-%C3%A0-la-main-dans.webp?a=1&b=1&s=612x612&w=0&k=20&c=3A7kynIecatuVe39nTJPD8oN_vlmue22JosxkaZXKy8=" title="Pottery" height="200" width="200" />
          <img src="https://media.istockphoto.com/id/546770268/fr/photo/femme-designer-fabrique-et-con%C3%A7oit-des-bijoux-en-atelier.webp?a=1&b=1&s=612x612&w=0&k=20&c=uqcGSPiFKJKCHOXTDkuPGso_bX4YvT8ndjsL6pAnmYc=" title="Jewelry" height="200" width="200" />
          <img src="https://images.unsplash.com/photo-1591944489410-16ec1074a18e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8dGFpbG9yaW5nfGVufDB8fDB8fHww" title="Tailoring" height="200" width="200" />
        </div>
        <Link to="/crafts" className="btn">Explore the crafts</Link>
      </section>

      <section className="stats">
        <div className="stat">
          <h3>50+</h3>
          <p>Registered artisans</p>
        </div>
        <div className="stat">
          <h3>20+</h3>
          <p>Available workshops</p>
        </div>
        <div className="stat">
          <h3>15+</h3>
          <p>Employers</p>
        </div>
      </section>

      <section className="cta">
        <p>Ready to join the MANUARA community and make your artisanal talent shine?</p>
        <Link to="/employee" className="btn">Sign up now</Link>
      </section>
    </section>
  );
}

/* -------------------------- Artisans List -------------------------- */
function ArtisanList({ artisanOffers }) {
  const [filter, setFilter] = useState("All");
  const crafts = ["All", ...new Set(artisanOffers.map(a => a.metier))];
  const filteredArtisans = artisanOffers.filter(a =>
    filter === "All" ? true : a.metier === filter
  );

  return (
    <section>
      <h2>Offers for Artisans</h2>
      <div className="filter-buttons">
        {crafts.map(c => (
          <button
            key={c}
            className={filter === c ? "active" : ""}
            onClick={() => setFilter(c)}
          >
            {c}
          </button>
        ))}
      </div>

      <ul className="card-list">
        {filteredArtisans.map(a => (
          <li key={a.id} className="card">
            <h3>{a.title}</h3>
            <p>{a.metier} — {a.location} — {a.experience}</p>
            {a.email && <p><strong>Email:</strong> {a.email}</p>}
            <p>{a.description}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}

/* -------------------------- Stage List -------------------------- */
function StageList({ stages }) {
  const [filter, setFilter] = useState("All");
  const crafts = ["All", ...new Set(stages.map(s => s.metier))];
  const filteredStages = stages.filter(s => filter === "All" ? true : s.metier === filter);

  return (
    <section>
      <h2>Available Workshops / Stages</h2>
      <div className="filter-buttons">
        {crafts.map(c => (
          <button
            key={c}
            className={filter === c ? "active" : ""}
            onClick={() => setFilter(c)}
          >
            {c}
          </button>
        ))}
      </div>

      <ul className="card-list">
        {filteredStages.map(s => (
          <li key={s.id} className="card">
            <h3>{s.title}</h3>
            <p>{s.metier} — {s.location} — {s.experience}</p>
            {s.email && <p><strong>Email:</strong> {s.email}</p>}
            <p>{s.description}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}

/* -------------------------- Crafts Page -------------------------- */
function Crafts() {
  const crafts = [
    { image: "https://media.istockphoto.com/id/939572008/photo/womans-hands-molding-clay-with-sponge.webp?a=1&b=1&s=612x612&w=0&k=20&c=KHJFx4VqFMvUI6uriiMIsS27uE6PKyim_Uu-CNmyf_E=", title: "Pottery", description: "Pottery is the process and products of shaping clay and other raw materials into durable objects by firing them at high temperatures. It is one of the oldest human inventions, with artifacts dating as far back as 29,000 BC. ." 
     
    },
    { image: "https://media.istockphoto.com/id/1403250565/photo/making-jewelry-with-beads.webp?a=1&b=1&s=612x612&w=0&k=20&c=0cP5OX0wfxBky10pH1Y9eYwgHNytvjhaNRjy0xJPeKg=", title: "Jewelry", description: "Jewelry making is the craft of creating, designing, and fabricating ornamental pieces for personal adornment. Techniques can range from simple wire-wrapping to advanced goldsmithing, and materials vary from beads and natural elements to precious metals and gemstones. For beginners, common entry points include beading and metal stamping ." },
    { image: "https://media.istockphoto.com/id/2191749535/photo/tailors-hand.webp?a=1&b=1&s=612x612&w=0&k=20&c=vaG0YW1XauOXDngjOPGRlGDDD4hmW7_WliU6T0suKuU=", title: "Tailoring", description: "Tailoring is the art of crafting, altering, and mending garments to achieve a personalized and custom fit. While often associated with formal wear like suits, the practice can be applied to nearly any piece of clothing to enhance its comfort, appearance, and durability." },
    { image: "https://media.istockphoto.com/id/611074750/photo/weave-pattern-hand-bamboo.webp?a=1&b=1&s=612x612&w=0&k=20&c=IsJJIaqvmWQyX0XH_F17_Dr05aeKQZIjmE2EYplGzZw=", title: "Weaving", description: "Tailoring is the art of crafting, altering, and mending garments to achieve a personalized and custom fit. While often associated with formal wear like suits, the practice can be applied to nearly any piece of clothing to enhance its comfort, appearance, and durability." },
    { image: "https://media.istockphoto.com/id/1011260612/photo/murano-glass-blowing-factory-glass-blower-forming-beautiful-piece-of-glass-put-iron-rod-with.webp?a=1&b=1&s=612x612&w=0&k=20&c=-wssjhRhIrOVfZXAsJUztarc6n068Pm6_0pSsEfzO8M=", title: "Glass Making", description: "Glassmaking starts by heating a mixture of silica sand, soda ash, and limestone to a very high temperature (around 1300-1600°C) to create molten glass. This molten material is then shaped using various techniques like glassblowing or the float process, where a ribbon of molten glass floats on a bed of tin. Finally, the shaped glass is slowly cooled in an annealing oven to prevent cracking, transforming it into a durable, transparent materia." },
    { image: "https://plus.unsplash.com/premium_photo-1679809447949-b15690ccf840?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Q2VyYW1pY3MlMjByZWxhdGVkJTIwdG8lMjB0cmFkaXRpb25hbCUyMGNyYWZ0c3xlbnwwfHwwfHx8MA%3D%3D", title: "Ceramics", description: "A ceramic is any of the various hard, brittle, heat-resistant, and corrosion-resistant materials made by shaping and then firing an inorganic, nonmetallic material, such as clay, at a high temperature. Common examples are earthenware, porcelain, and brick." },
    { image: " https://media.istockphoto.com/id/2229212899/fr/photo/un-chandelier-forg%C3%A9-artistique-en-cours-de-fabrication-dans-une-forge-les-produits.webp?a=1&b=1&s=612x612&w=0&k=20&c=_jciMCbOfgfvg-CNfZOtwuNxmM9ZUlL48x-fY5UC3bA=", title: "The wrought iron", description: "Wrought iron is a type of iron that was widely used for centuries in gates, railings, furniture, decorative grilles, and structural elements. It’s known for its low carbon content, making it softer, more malleable, and less brittle than cast iron. " },
    { image: "https://media.istockphoto.com/id/1319027710/fr/photo/restaurer-la-beaut%C3%A9-des-azulejos-de-tuiles-vintage-sur-la-fa%C3%A7ade-de-la-vieille-maison.webp?a=1&b=1&s=612x612&w=0&k=20&c=i7k-dFyzbwbyftVKD3dKNciUp3Ee3R_dcz0nFWb8YKg=", title: "Zellige", description: "Artisans hand-cut tiny, brightly glazed tiles called zellij from square blanks and fit them into precise geometric patterns. It’s a centuries-old craft that decorates fountains, courtyards, palaces and mosques." },
    { image: "https://media.istockphoto.com/id/1493177152/fr/photo/gros-plan-dun-artisan-sculptant-une-sculpture-desprit-en-bois-avec-maillet-et-ciseau-%C3%A0-la.webp?a=1&b=1&s=612x612&w=0&k=20&c=WQqELiGecoOggWv06d6sdwGTBNQsf0WAJBckPxuGXGc=", title: "Wood carving / marquetry", description: "Carvers use cedar, thuya or lemon wood to produce doors, ceilings, furniture and small boxes. Marquetry adds inlays of bone, shell, or metal to form floral and geometric designs." }, 

    { image: "https://plus.unsplash.com/premium_photo-1675623429517-7e1fe71fb300?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Q2FsbGlncmFwaHklMjAlMjYlMjBpbGx1bWluYXRpb24lMjBtYWtpbmd8ZW58MHx8MHx8fDA%3D", title: "Calligraphy & illumination", description: "Scribes use reed pens and natural inks to write verses or proverbs in elegant Arabic scripts, then embellish with gold leaf, geometric borders or floral motifs." },
  ]

  return (
    <section className="crafts-section">
      <h2>Our Crafts</h2>
      <div className="crafts-container">
        {crafts.map((c, i) => (
          <div className="craft-item" key={i}>
            <img src={c.image} alt={c.title} />
            <h3>{c.title}</h3>
            <p>{c.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

/* -------------------------- Employer Form -------------------------- */
function EmployerForm({ setEmployerOffers }) {
  const navigate = useNavigate();
  const crafts = ["Pottery","Jewelry","Tailoring","Weaving","Glass Making",
    "Ceramics","Wrought Iron","Zellige","Wood Carving / Marquetry","Calligraphy & Illumination"];

  const [form, setForm] = useState({
    company: "",
    email: "",
    ville: "",
    craft: "",
    type: "",
    description: ""
  });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    const newId = Date.now().toString();
    setEmployerOffers(prev => [...prev, { id: newId, ...form }]);
    setForm({ company: "", email: "", ville: "", craft: "", type: "", description: "" });
    navigate("/employer-offers");
  };

  return (
    <section>
      <h2 className="form-title">Employer Form</h2>
      <form className="form" onSubmit={handleSubmit}>
        <input name="company" value={form.company} onChange={handleChange} placeholder="Nom de l'entreprise" />
        <input name="email" value={form.email} onChange={handleChange} type="email" placeholder="Email" />
        <input name="ville" value={form.ville} onChange={handleChange} placeholder="Ville" />
        <select name="craft" value={form.craft} onChange={handleChange}>
          <option value="">Sélectionner un métier artisanal</option>
          {crafts.map((c, i) => <option key={i} value={c}>{c}</option>)}
        </select>
        <select name="type" value={form.type} onChange={handleChange}>
          <option value="">Type d'offre</option>
          <option value="job">Emploi</option>
          <option value="internship">Stage</option>
        </select>
        <textarea name="description" value={form.description} onChange={handleChange} placeholder="Description de l'offre"></textarea>
        <button type="submit">Publier l'offre</button>
      </form>
    </section>
  );
}

/* -------------------------- Employer Offers List -------------------------- */
function EmployerOffersList({ employerOffers }) {
  if (employerOffers.length === 0) return <p>No employer offers yet.</p>;

  return (
    <section>
      <h2>Employer Offers</h2>
      <ul className="card-list">
        {employerOffers.map(o => (
          <li key={o.id} className="card">
            <h3>{o.company}</h3>
            <p>{o.craft} — {o.ville} — {o.type}</p>
            <p>{o.description}</p>
            <p><strong>Email:</strong> {o.email}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}

/* -------------------------- Employee Form -------------------------- */
function EmployeeForm({ setArtisanOffers, setStages }) {
  const crafts = ["Pottery","Jewelry","Tailoring","Weaving","Glass Making","Ceramics"];
  const [form, setForm] = useState({
    name: "",
    email: "",
    craft: "",
    type: "",
    description: "",
    ville: ""
  });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    const newId = Date.now().toString();
    if (form.type === "job") {
      setArtisanOffers(prev => [...prev, {
        id: newId,
        title: form.name,
        metier: form.craft,
        location: form.ville,
        experience: "N/A",
        description: form.description,
        email: form.email
      }]);
    } else if (form.type === "internship") {
      setStages(prev => [...prev, {
        id: newId,
        title: `Stage – ${form.craft} (${form.name})`,
        metier: form.craft,
        location: form.ville,
        experience: "N/A",
        description: form.description,
        email: form.email
      }]);
    }
    setForm({ name: "", email: "", craft: "", type: "", description: "", ville:"" });
    alert("Your information has been published!");
  };

  return (
    <section>
      <h2 className="form-title">Candidate Form</h2>
      <form className="form" onSubmit={handleSubmit}>
        <input name="name" value={form.name} onChange={handleChange} type="text" placeholder="Nom complet" />
        <input name="email" value={form.email} onChange={handleChange} type="email" placeholder="Email" />
        <input name="ville" value={form.ville} onChange={handleChange} type="text" placeholder="Ville" />
        <select name="craft" value={form.craft} onChange={handleChange}>
          <option value="">Métier artisanal recherché</option>
          {crafts.map((c, i) => <option key={i} value={c}>{c}</option>)}
        </select>
        <select name="type" value={form.type} onChange={handleChange}>
          <option value="">Type de recherche</option>
          <option value="job">Emploi</option>
          <option value="internship">Stage</option>
        </select>
        <textarea name="description" value={form.description} onChange={handleChange} placeholder="Vos besoins / expérience / compétences"></textarea>
        <button type="submit">Envoyer</button>
      </form>
    </section>
  );
}

export default App;
