# ArgentBank

J'ai développé l'interface utilisateur de cette application bancaire en utilisant **React**. J'étais responsable de la création du tableau de bord utilisateur, de l'authentification, ainsi que de la gestion des transactions.

## Contexte

Dans le cadre de ce projet pour **Argent Bank**, une nouvelle banque en ligne en phase de lancement, j'ai travaillé en tant que **développeur front-end**. En collaboration avec Avery Moreau, CTO, et Mila, cheffe de projet, j'ai réalisé l'intégration des fonctionnalités liées à l'authentification des utilisateurs et à la gestion des transactions.

### Réalisations :

-  Implémentation complète de l'application avec **React**
-  Développement d'une interface **responsive** pour une accessibilité optimale sur différents appareils
-  Intégration de **React Router** pour la gestion des routes
-  Mise en place du **state** global avec **Redux**
-  Application des bonnes pratiques de **Green IT** pour optimiser le code et réduire l'empreinte écologique
-  Documentation des routes API pour les transactions suivant les spécifications **Swagger**

### Comptes de test :

| Prénom | Nom      | Email             | Mot de passe |
| ------ | -------- | ----------------- | ------------ |
| Tony   | Stark    | tony@stark.com    | password123  |
| Steve  | Rogers   | steve@rogers.com  | password456  |
| Test   | Mailtest | test@mailtest.com | test         |

## Technologies utilisées

Pour mener à bien ce projet, j'ai utilisé :

-  React.js
-  Redux
-  React Router
-  Node.js
-  HTML5/CSS3
-  Git/GitHub

## Installation et déploiement

### 1. Installation des dépendances

#### Frontend :

```shell
cd frontend
npx create-react-app NomduProjet  # Une seule fois pour initialiser l'application
npm install
```

#### 2. Lancer le serveur dev Backend :

```shell
cd backend # (obligatoire)
nvs add 12.12   # Ajouter la version Node.js 12.12 (à faire qu'une fois)
nvs use 12.12   # Utiliser cette version de Node.js (obligatoire)
npm install     # Installer les dépendances backend (à faire qu'une fois)
npm run dev:server  # Démarrer le serveur backend (obligatoire)
```

### 3. Remplir la base de données

Dans un autre terminal :

```shell
cd backend # (obligatoire)
nvs use 12.12 # (obligatoire)
npm run populate-db # (obligatoire)
```

### 4. Lancer le front-end

Dans un terminal **Git Bash** pour lancer l'application **frontend** :

```bash
cd frontend # (obligatoire)
npm start # (obligatoire)
```

## Fonctionnalités développées

J'ai implémenté les fonctionnalités suivantes :

-  Système complet de connexion et déconnexion des utilisateurs
-  Interface de consultation des informations du profil utilisateur
-  Intégration de Redux pour une gestion efficace et prévisible de l'état global de l'application, facilitant la maintenance et l'ajout de nouvelles fonctionnalités.
-  Page de consultation des détails des transactions (front-end)
-  Navigation fluide avec **React Router**

## Optimisations

Dans une démarche de développement durable, j'ai appliqué plusieurs principes de **Green IT** :

-  Optimisation des images
-  Réutilisation des composants
-  Minimisation des requêtes API
-  Structure de code modulaire et maintenable
