
INSERT INTO defaultdb.programmes (id_programme, nom_programme) VALUES (1, '');
INSERT INTO defaultdb.programmes (id_programme, nom_programme) VALUES (2, 'Expert');
INSERT INTO defaultdb.programmes (id_programme, nom_programme) VALUES (3, 'Novice');
INSERT INTO defaultdb.programmes (id_programme, nom_programme) VALUES (4, 'Intermediaire');
INSERT INTO defaultdb.seances (id_seance, id_programme) VALUES (1, 2);
INSERT INTO defaultdb.seances (id_seance, id_programme) VALUES (2, 2);
INSERT INTO defaultdb.seances (id_seance, id_programme) VALUES (3, 3);
INSERT INTO defaultdb.exercices (id_exercice, nom, serie, repetition, pourcentage_rm, id_seance) VALUES (1, 'Squat', 4, 5, 80, 1);
INSERT INTO defaultdb.exercices (id_exercice, nom, serie, repetition, pourcentage_rm, id_seance) VALUES (2, 'Terre', 4, 5, 80, 1);
INSERT INTO defaultdb.exercices (id_exercice, nom, serie, repetition, pourcentage_rm, id_seance) VALUES (3, 'Bench', 4, 5, 80, 2);
INSERT INTO defaultdb.exercices (id_exercice, nom, serie, repetition, pourcentage_rm, id_seance) VALUES (4, 'curl biceps', 4, 10, 75, 3);
INSERT INTO defaultdb.users (id, first_name, last_name, email, id_programme) VALUES (1, 'Paul', 'Harrohide', 'paul@gmail.com', 2);
INSERT INTO defaultdb.users (id, first_name, last_name, email, id_programme) VALUES (2, 'Harry', 'Covert', 'harry@gmail.com', 1);