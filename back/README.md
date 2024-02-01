# Back-end

API REST développée avec NODEJS, EXPRESS & MONGODB

IMPLEMENTATION DU CRUD :

- POST : Création d'un produit ("/api/products")
- GET : Récupération d'un ou plusieurs produits ("/api/products" ou "/api/products/:id)
- DELETE : Suppression d'un produit ("/api/products/:id")
- PATCH : Modification partielle d'un produit ("/api/products/:id")
- PUT : Modification complète d'un produit ("/api/products/:id")

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
