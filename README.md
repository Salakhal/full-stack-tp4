# 📚 TP 4 – Application Bibliothèque (Node.js, Express, EJS, PostgreSQL)

Cours : Développement web full-stack avec JavaScript


## 📌 Description

Ce projet est une application web full-stack permettant de gérer une bibliothèque.
Elle permet de gérer des **auteurs** et des **livres** avec les opérations CRUD (Créer, Lire, Modifier, Supprimer).

---

## 🛠️ Technologies utilisées

* Node.js
* Express.js
* EJS (moteur de templates)
* PostgreSQL
* dotenv
* nodemon (développement)

---

## 📁 Structure du projet

```
bibliotheque-app/
├── config/
│   └── db.js
├── controllers/
│   ├── auteurController.js
│   └── livreController.js
├── models/
│   ├── auteurModel.js
│   └── livreModel.js
├── public/
│   ├── css/
│   │   └── style.css
│   └── js/
│       └── main.js
├── routes/
│   ├── auteurRoutes.js
│   └── livreRoutes.js
├── views/
│   ├── partials/
│   │   ├── header.ejs
│   │   ├── navigation.ejs
│   │   └── footer.ejs
│   └── pages/
│       ├── accueil.ejs
│       ├── 404.ejs
│       ├── error.ejs
│       ├── auteurs/
│       │   ├── liste.ejs
│       │   ├── ajouter.ejs
│       │   ├── modifier.ejs
│       │   └── details.ejs
│       └── livres/
│           ├── liste.ejs
│           ├── ajouter.ejs
│           ├── modifier.ejs
│           └── details.ejs
├── .env
├── app.js
└── package.json
```

---

## ⚙️ Installation

1. Cloner ou créer le projet :

```
mkdir bibliotheque-app
cd bibliotheque-app
npm init -y
```

2. Installer les dépendances :

```
npm install express ejs pg dotenv
npm install --save-dev nodemon
```

---

## 🗄️ Configuration de la base de données

Créer un fichier `.env` :

```
DB_USER=utilisateur
DB_PASSWORD=mot_de_passe
DB_HOST=localhost
DB_PORT=5432
DB_DATABASE=bibliotheque_db
PORT=3000
```

Créer la base et les tables dans PostgreSQL :

```sql
CREATE DATABASE bibliotheque_db;
```

Puis créer les tables **auteurs** et **livres** (voir TP).

---

## ▶️ Lancement du projet

Mode développement :

```
npm run dev
```

Mode production :

```
npm start
```

Application disponible sur :

```
http://localhost:3000
```

---

## 📌 Fonctionnalités

### 👤 Auteurs

* Liste des auteurs
* Ajouter un auteur
* Modifier un auteur
* Supprimer un auteur
* Voir les détails + ses livres

### 📖 Livres

* Liste des livres
* Recherche de livres
* Ajouter un livre
* Modifier un livre
* Supprimer un livre
* Voir les détails + auteur

---

## 🧪 Tests

Vérifier les routes :

* `/` → Accueil
* `/auteurs` → Gestion des auteurs
* `/livres` → Gestion des livres

Tester :

* Ajout / modification / suppression
* Recherche
* Pages 404

---

## 🚀 Améliorations possibles

* Authentification (JWT)
* Gestion des emprunts
* Upload d’images (couvertures)
* Pagination
* Dashboard statistiques

---

## ✅ Conclusion

Ce TP permet de comprendre :

* L’architecture MVC
* L’utilisation d’Express avec EJS
* La connexion à PostgreSQL
* La gestion des relations entre tables

---
## 🎥 Démo du Projet



## 👤 Auteur

* **École Normale Supérieure de Marrakech**
  
* **Réalisé par :** SALMA LAKHAL
  
* **Filière  :** CLE_INFO_S5

  
* **Encadré par :** Pr. Mohamed LACHGAR

* **Cours :** `Développement web full-stack avec JavaScript`

