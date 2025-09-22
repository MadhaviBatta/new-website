"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Default export React component — drop this file into pages/index.js (Next.js) or any React app.
// Tailwind CSS assumed. No external images required (uses unsplash). Replace sampleImages with your own.

export default function ProjectPage() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("all");
  const [selected, setSelected] = useState(null);

  const products = [
    {
      id: 1,
      name: "NitroBoost Fertilizer",
      category: "fertilizer",
      desc: "Balanced NPK formula for leafy growth and higher yields.",
      price: "₹750 / 10kg",
      img: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?w=1200&q=60",
    },
    {
      id: 2,
      name: "GreenGrow Organic",
      category: "fertilizer",
      desc: "100% organic compost-based fertilizer — safe for vegetables.",
      price: "₹420 / 5kg",
      img: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?w=1200&q=60&auto=format&fit=crop",
    },
    {
      id: 3,
      name: "CropShield Insecticide",
      category: "pesticide",
      desc: "Fast-acting insecticide for common field pests. Use as directed.",
      price: "₹380 / 1L",
      img: "https://images.unsplash.com/photo-1601004890684-d8cbf643f5f2?w=1200&q=60",
    },
    {
      id: 4,
      name: "FungiStop Fungicide",
      category: "pesticide",
      desc: "Systemic fungicide for mildew, blight and root rots.",
      price: "₹490 / 500ml",
      img: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=1200&q=60",
    },
    {
      id: 5,
      name: "MicroNutrients Mix",
      category: "fertilizer",
      desc: "Trace elements mix to correct micronutrient deficiencies.",
      price: "₹320 / 1kg",
      img: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?w=1200&q=60&crop=entropy",
    },
  ];

  const filtered = products.filter((p) => {
    if (category !== "all" && p.category !== category) return false;
    if (!query) return true;
    return (
      p.name.toLowerCase().includes(query.toLowerCase()) ||
      p.desc.toLowerCase().includes(query.toLowerCase())
    );
  });

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-900 via-black to-green-800 text-gray-100 p-6">
      <header className="max-w-6xl mx-auto mb-6">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-extrabold tracking-tight">Fertilizers & Pesticides</h1>
          <nav className="space-x-4">
            <button
              onClick={() => setCategory("all")}
              className={`px-3 py-1 rounded-md text-sm ${category === "all" ? "bg-white text-green-900" : "bg-white/10"}`}
            >
              All
            </button>
            <button
              onClick={() => setCategory("fertilizer")}
              className={`px-3 py-1 rounded-md text-sm ${category === "fertilizer" ? "bg-white text-green-900" : "bg-white/10"}`}
            >
              Fertilizers
            </button>
            <button
              onClick={() => setCategory("pesticide")}
              className={`px-3 py-1 rounded-md text-sm ${category === "pesticide" ? "bg-white text-green-900" : "bg-white/10"}`}
            >
              Pesticides
            </button>
          </nav>
        </div>

        <div className="mt-4 flex gap-3 items-center">
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search products, uses..."
            className="flex-1 p-2 rounded-md bg-white/10 placeholder-gray-300 focus:outline-none"
          />
          <span className="text-sm text-gray-300">{filtered.length} products</span>
        </div>
      </header>

      <main className="max-w-6xl mx-auto">
        <motion.section
          layout
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
        >
          {filtered.map((p) => (
            <motion.article
              key={p.id}
              layout
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              whileHover={{ scale: 1.02 }}
              className="bg-white/6 rounded-2xl p-4 backdrop-blur-md border border-white/6"
            >
              <div className="h-48 rounded-lg overflow-hidden mb-3">
                <img src={p.img} alt={p.name} className="w-full h-full object-cover" />
              </div>
              <h3 className="text-lg font-semibold">{p.name}</h3>
              <p className="text-sm text-gray-300 mt-1 line-clamp-2">{p.desc}</p>
              <div className="mt-3 flex items-center justify-between">
                <span className="font-medium">{p.price}</span>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setSelected(p)}
                    className="px-3 py-1 text-sm bg-white/10 rounded-md"
                  >
                    Details
                  </button>
                  <button className="px-3 py-1 text-sm bg-green-600 rounded-md">Buy</button>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.section>

        {/* Empty state */}
        {filtered.length === 0 && (
          <div className="mt-12 text-center text-gray-300">No products match your search.</div>
        )}
      </main>

      {/* Modal for product details */}
      <AnimatePresence>
        {selected && (
          <motion.div
            key="modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.95, y: 10 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 10 }}
              className="max-w-3xl w-full bg-white/5 rounded-2xl p-6 border border-white/10"
            >
              <div className="flex justify-between items-start gap-4">
                <div className="flex-1">
                  <h2 className="text-2xl font-bold">{selected.name}</h2>
                  <p className="mt-2 text-gray-300">{selected.desc}</p>

                  <ul className="mt-4 space-y-2 text-sm text-gray-200">
                    <li><strong>Category:</strong> {selected.category}</li>
                    <li><strong>Price:</strong> {selected.price}</li>
                    <li><strong>How to use:</strong> Follow label directions. Wear PPE when applying pesticides. For fertilizers, apply at recommended rates.</li>
                  </ul>

                  <div className="mt-6 flex gap-3">
                    <button className="px-4 py-2 bg-green-600 rounded-md">Add to Cart</button>
                    <button onClick={() => setSelected(null)} className="px-4 py-2 bg-white/10 rounded-md">Close</button>
                  </div>
                </div>
                <div className="w-48 h-48 rounded-lg overflow-hidden">
                  <img src={selected.img} alt={selected.name} className="w-full h-full object-cover" />
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      
    </div>
  );
}
