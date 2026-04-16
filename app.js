import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';
import auteurRoutes from './routes/auteurRoutes.js';
import livreRoutes from './routes/livreRoutes.js';

// Configuration pour __dirname avec ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Configuration du moteur de template EJS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.get('/', (_, res) => {
    res.render('pages/accueil', { title: 'Accueil - Bibliothèque' });
});

app.use('/auteurs', auteurRoutes);
app.use('/livres', livreRoutes);

// Gestion des erreurs 404
app.use((_, res) => {
    res.status(404).render('pages/404', { title: 'Page non trouvée' });
});

// Middleware de gestion d'erreurs global
app.use((err, req, res, next) => {
    console.error('Erreur:', err);
    res.status(500).render('pages/error', { 
        title: 'Erreur serveur',
        message: err.message || 'Une erreur est survenue'
    });
});

// Démarrage du serveur
app.listen(PORT, () => {
    console.log(`🚀 Serveur démarré sur http://localhost:${PORT}`);
});