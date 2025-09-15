import React, { useState } from "react";

function ContactForm() {
  const [form, setForm] = useState({
    role: "",
    name: "",
    email: "",
  });

  return (
    <div style={{ padding: "20px" }}>
      <h2>Contactez-nous</h2>
      <form>
        <label style={{ display: "block", marginBottom: "10px" }}>
          Votre rôle:
          <select
            value={form.role}
            onChange={(e) => setForm({ ...form, role: e.target.value })}
            style={{ marginLeft: "10px" }}
          >
            <option value="">Sélectionnez</option>
            <option value="entreprise">Entreprise</option>
            <option value="artisan">Artisan</option>
            <option value="stagiaire">Candidat / Stagiaire</option>
          </select>
        </label>

        <label style={{ display: "block", marginBottom: "10px" }}>
          Nom:
          <input
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            style={{ marginLeft: "10px" }}
          />
        </label>

        <label style={{ display: "block", marginBottom: "10px" }}>
          Email:
          <input
            type="email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            style={{ marginLeft: "10px" }}
          />
        </label>

        <button type="submit" style={{ marginTop: "10px" }}>
          Envoyer
        </button>
      </form>
    </div>
  );
}

export default ContactForm;
