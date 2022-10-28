# Projet-force
# Présentation du sujet

Le but de notre projet est de proposer un outil dédié à la pratique du powerlifting. <br>
C'est une discipline sportive qui consiste à soulever le poids le plus lourd sur trois exercices différents:
* Squat
* Bench
* Deadlift
Lors d'une compétition le vainqueur, de sa catégorie d'âge et de poids, est celui avec le plus gros total donc celui dont la somme des charges sur les 3 lifts est la plus grande. <br>

Une des difficultés de ce sport est l'optimisation des entrainements qui nécessitent beaucoup de calculs afin de préparer des séances optimals. <br>

C'est pourquoi notre application propose de centraliser les outils nécessaires à l'entrainement du powerlifter. <br>

Notre projet se décompose donc en deux axes principaux:

* Un premier permettant de sélectionner et suivre un programme d'entrainnement prédefini et optimisé pour la pratique du powerlifting.
* Un second axe regroupant tous les outils nécessaire aux athlètes pour organiser aux mieux leurs séances d'entrainement.

Parmis ces outils il y a :
* le calcul du score total, qui définit les performances d'un athlète
* le calcul du socre DOTS, qui définit les performances relative au pois et au sexe de l'athlète. C'est un indice de performance efficace permettant de mieux se comparer aux autres athlètes.
* le calcul des RPE, qui de définir au mieux l'effort perçu en fonction du poids, afin de définir au mieux les charges des exercices.
* le calcul de la charge maximale estimée, permettant de se situer et de se définir des objectifs précis et pertinent.
* le calcul des "jumps", c'est à dire les poids et répétition à effectuer pour s'échauffer avant d'effectuer un set sur un poids donné.

# Creation de la base de donnée et lancement de l'application

1. Importe le projet dans IntelliJ IDEA en important le fichier "pom.xml" à la racine de ce répertoire


2. Lance et init la bdd avant de run le projet<br>
   (besoin du coup de pouce ?  [III. SetUp de la BDD via Docker](https://github.com/resourcepool/training-spring-boot/tree/readme-setup#iii-setup-de-la-bdd-via-docker))

```
docker run --name mariadb --rm -e MYSQL_ROOT_PASSWORD=toor -e MYSQL_DATABASE=defaultdb -p 3306:3306 mariadb
```

3. Connecte la bdd à IntelliJ via l'onglet Database épinglé à droite.<br>
   (besoin du coup de pouce ?  [III.2. Afficher la BDD dans Intellij](https://github.com/resourcepool/training-spring-boot/tree/readme-setup#2-afficher-la-bdd-dans-intellij))


4. Lance les scripts sql contenus dans le dossier `/initdb` : Sélectionne les fichiers .sql, clique droit puis 'Run'.<br>
   (besoin du coup de pouce ?  [III.3. Initialisation de la BDD](https://github.com/resourcepool/training-spring-boot/tree/readme-setup#3-initialisation-de-la-bdd))


5. Lance l'application via IntelliJ, et vérifie qu'elle fonctionne ! (sur http://localhost:8080 par défaut).<br>
   (besoin du coup de pouce ?  [IV. Run du projet (c'est bientôt fini promis !)](https://github.com/resourcepool/training-spring-boot/tree/readme-setup#iv-run-du-projet-cest-bientôt-fini-promis-))
   
# Lancement du Front

* Ouvrir le dossier *front* depuis Intellij
* Taper `npm start` en ligne de commandes. 
* Si cela ne marche pas suivre la procédure d'installation suivante :

## Processus d'installation (NodeJs, npm, Angular CLI):

* Télécharger Node.js (npm est inclus avec) : https://nodejs.org/en/download/
* Ouvrir un terminal et entrer la commande afin de télécharger le CLI Angular: `npm install -g @angular/cli`

## Utliser un front Angular

* Ouvrir le dossier *front* depuis Intellij
* Taper `npm i` en ligne de commandes. 
Cette commande permet d'installer toutes les dépendances précisées dans le fichier *package.json* et de générer le *package-lock.json*

## Démarrer le serveur
* Pour construire l'application et démarrer le serveur, entrer la commande : `ng serve`


# Utilisation du site

A la première utilisation du site, il faut s'inscrire. Il est ensuite possible de se connecter avec son adresse mail. <br>

L'utilisateur peut ensuite aller dans les section "Programme" pour choisir le programme de son choix s'il n'en a pas encore choisit. L'ensemble des séances seront affichées et il pourra les suivre l'une après l'autre. Il est possible à tout moment d'arrêter le programme et d'en choisir un autre grâce au bouton créé à cet effet. <br>

L'utilisateur peut facilement naviguer sur le site grâce à la navbar pour accéder à la multitude d'outils de calcul proposé pour faciliter la gestion de ses entraienements et suivre sa progression en fonction des résultats de la séance. <br>

Il peut enfin se déconnecter avec le bouton logout.
