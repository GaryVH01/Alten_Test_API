const mongoose = require("mongoose"); // importation de mongoose pour création d'un modèle

// Création d'un modèle pour la création d'un produit dans la base de données
const productSchema = mongoose.Schema(
  {
    id: { type: Number, required: false },
    code: { type: String, required: true },
    name: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    quantity: { type: Number, required: true },
    inventoryStatus: { type: String, required: true },
    category: { type: String, required: true },
    image: { type: String, required: false },
    rating: { type: Number, required: false, default: 0 },
  },
  {
    timestamps: true, // ajout des propriétés: date de création et de modification dans la base de données
  }
);

module.exports = mongoose.model("Product", productSchema); // export du modèle produit
