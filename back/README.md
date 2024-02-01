# Back-end

API REST développée avec NODEJS, EXPRESS & MONGODB

IMPLEMENTATION DU CRUD :

- POST : Création d'un produit ("/products")
- GET : Récupération d'un ou plusieurs produits ("/products" ou "/api/products/:id)
- DELETE : Suppression d'un produit ("/products/:id")
- PATCH : Modification partielle d'un produit ("/products/:id")
- PUT : Modification complète d'un produit ("/products/:id")

Pour lancer le server utilisez la commande 'nodemon server'. Le serveur écoutera sur le port 5000 si celui-ci est disponible.

Pour se connecter à la base de données (MongoDB) : utilisation d'une variable d'environnement 'MONGO_URI'

Architecture:

                              server.js
                                  |
                                app.js
                  ________________|___________________
                  |                                   |
            data_base.js                            routes
                                            __________|_____________
                                            |                      |
                                    middlewares/multer        controllers
                                                                   |
                                                                 models

# Front-end

Le front-end envoie les requêtes directement à l'API pour afficher les produits.

# PROBLEMES

Toutes les requêtes émises avec POSTMAN fonctionnent correctement.
Le frontend est lié au backend.
Pour la partie frontend il subsiste des erreurs :

- Suppression
- Modification
  Probablement un clonflit avec la génération des ID.
