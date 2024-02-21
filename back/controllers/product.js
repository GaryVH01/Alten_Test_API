const Product = require("../models/product"); // importation du modèle product
const fs = require("fs"); // permet de manipuler le système de fichiers pou la suppression des images

//Fonction pour créer un produit (POST)
exports.createProduct = (req, res) => {
  const product = new Product({
    id: Date.now(),
    ...req.body,
    // image: `${req.protocol}://${req.get("host")}/images/${req.file.filename}`,
  });
  Product.create(product) // enregistrement de l'objet product dans la base de données
    .then(() => res.status(201).json({ message: "Produit enregistré !" }))
    .catch((error) => res.status(400).json({ error }));
};

//Fonction pour retrouver un produit en particulier (GET)
exports.getOneProduct = (req, res, next) => {
  Product.findOne({ id: req.params.id }) // Avec la méthode findOne on récupère un seul produit grâce à son id
    .then((product) => res.status(200).json(product)) // On renvoie l'objet product
    .catch((error) => res.status(404).json({ error: error })); // Sinon on renvoie une erreur 404
};

// Fonction pour modifier un produit (PUT)
exports.updateProduct = (req, res) => {
  const productObject = req.file // si la requête comprend un champ file =>
    ? {
        ...req.body, // on récupère l'objet requête avec l'URL de l'image
        image: `${req.protocol}://${req.get("host")}/images/${
          req.file.filename
        }`,
      }
    : { ...req.body }; // Si aucun objet n'est transmit, on récupère l'objet du corps de la requête
  console.log(productObject);
  Product.findOne({ id: req.params.id }) // Récupération de l'objet dans la base de données
    .then(() => {
      Product.updateOne(
        // Mise à jour du produit
        { id: req.params.id },
        { ...productObject, id: req.params.id }
      )
        .then(() => res.status(200).json({ message: "Objet modifié!" }))
        .catch((error) => res.status(401).json({ error }));
    })
    .catch((error) => {
      res.status(400).json({ error });
    });
};

// Fonction pour modifier un produit avec un PATCH (Même fonction que le PUT)
exports.patchProduct = (req, res) => {
  const productObject = req.file // si la requête comprend un champ file =>
    ? {
        ...req.body, // on récupère l'objet requête avec l'URL de l'image
        image: `${req.protocol}://${req.get("host")}/images/${
          req.file.filename
        }`,
      }
    : { ...req.body }; // Si aucun objet n'est transmit, on récupère l'objet du corps de la requête
  console.log(productObject);
  Product.findOne({ id: req.params.id }) // Récupération de l'objet dans la base de données
    .then(() => {
      Product.updateOne(
        // Mise à jour du produit
        { id: req.params.id },
        { ...productObject, id: req.params.id }
      )
        .then(() => res.status(200).json({ message: "Objet modifié!" }))
        .catch((error) => res.status(401).json({ error }));
    })
    .catch((error) => {
      res.status(400).json({ error });
    });
};

// Fonction de suppression d'un produit (DELETE)
exports.deleteProduct = (req, res) => {
  Product.findOne({ id: req.params.id }) // On récupère l'objet dans la base de données
    .then((product) => {
      // const filename = product.image.split("/images/")[1]; // on récupère l'url de l'image pour la supprimer
      // fs.unlink(`images/${filename}`, () => {
      Product.deleteOne({ id: req.params.id }) // Puis on supprime le produit de la base de données
        .then(() => {
          res.status(200).json({ message: "Objet supprimé !" });
        })
        .catch((error) => {
          res.status(401).json({ error });
        });
    })
    // })
    .catch((error) => {
      res.status(500).json({ error });
    });
};

// Fonction permettant de récupérer tous les produits (GET)
exports.getAllProducts = (req, res) => {
  Product.find() // utilisation de la méthode find pour récupérer la liste complète des produits
    .then((product) => res.status(200).json(product)) // on renvoie le tableau de tous les produits
    .catch((error) => res.status(400).json({ error: error })); // sinon on renvoie une erreur 400
};
