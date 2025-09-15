import React from "react";

const crafts = [
  {
    name: "Pottery",
    image: "/assets/pottery.jpg",
    description: "Beautiful handmade pottery crafted with traditional techniques.",
  },
  {
    name: "Weaving",
    image: "/assets/weaving.jpg",
    description: "Intricate textiles woven by skilled artisans.",
  },
  {
    name: "Leatherwork",
    image: "/assets/leather.jpg",
    description: "High-quality leather products made with care.",
  },
  {
    name: "Carpet Design",
    image: "/assets/carpet.jpg",
    description: "Unique carpet patterns inspired by Moroccan heritage.",
  },
  {
    name: "Wood Carving",
    image: "/assets/wood.jpg",
    description: "Detailed wooden carvings by experienced craftsmen.",
  },
];

function Crafts() {
  return (
    <section className="crafts">
      <h2 style={{ textAlign: "center", margin: "30px 0" }}>Our Crafts</h2>
      <div className="crafts-grid">
        {crafts.map((craft, index) => (
          <div className="craft-card" key={index}>
            <img src={craft.image} alt={craft.name} />
            <h3>{craft.name}</h3>
            <p>{craft.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Crafts;
