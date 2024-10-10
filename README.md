
# ArgentBank

**Projet 11 du parcours "Intégrateur Web" chez OpenClassrooms**

Ce projet vise à développer l'interface utilisateur d'une application bancaire en utilisant **React**. Vous êtes responsable de la création du tableau de bord utilisateur, de l'authentification, ainsi que de la gestion des transactions.

## Contexte

**Argent Bank** est une nouvelle banque en ligne en phase de lancement, et vous intervenez en tant que **développeur front-end**. Sous la supervision d'Avery Moreau, CTO, et Mila, cheffe de projet, vous allez travailler sur l'intégration des fonctionnalités liées à l'authentification des utilisateurs et à la gestion des transactions.

### Objectifs :
- Implémenter l'application en utilisant **React**.
- Rendre le site **responsive** pour une accessibilité optimale sur différents appareils.
- Intégrer **React Router** pour la gestion des routes.
- Gérer le **state** global avec **Redux**.
- Appliquer les bonnes pratiques de **Green IT** pour optimiser le code et réduire l'empreinte écologique.
- Proposer et documenter les routes API pour les transactions en suivant les spécifications **Swagger**.

### Comptes de test :
| Prénom | Nom         | Email             | Mot de passe   |
|--------|-------------|-------------------|----------------|
| Tony   | Stark       | tony@stark.com    | password123    |
| Steve  | Rogers      | steve@rogers.com  | password456    |
| Test   | Mailtest    | test@mailtest.com | test           | 

## Prérequis

Vous aurez besoin de **Node.js** et **npm** installés localement sur votre machine.

> **Attention** : Le backend doit être configuré pour que l'application fonctionne correctement.

## Installation du projet

### 1. Installation des dépendances 

#### Frontend :
```bash
cd frontend
npx create-react-app NomduProjet  # Une seule fois pour initialiser l'application
npm install 
```

#### 2. Lancer le serveur dev Backend :
```bash
cd backend # (obligatoire)
nvs add 12.12   # Ajouter la version Node.js 12.12 (à faire qu'une fois)
nvs use 12.12   # Utiliser cette version de Node.js (obligatoire)
npm install     # Installer les dépendances backend (à faire qu'une fois)
npm run dev:server  # Démarrer le serveur backend (obligatoire)
```

### 3. Remplir la base de données

Dans un autre terminal :
```bash
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

## Fonctionnalités principales

- Connexion et déconnexion des utilisateurs.
- Affichage des informations du profil utilisateur.
- Consultation des détails des transactions, page disponible mais pas complétée en backend encore. 
- Navigation fluide grâce à **React Router**.

## Notes supplémentaires

Pour garantir un développement durable, nous avons appliqué des principes de **Green IT** pour optimiser les images et réutiliser les composants lorsque cela est possible.
