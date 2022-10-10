drop table users;

drop table programmes;

drop table seances;

drop table exercices;

create table exercices
(
    id_exercice int auto_increment,
    constraint exercices_pk
        primary key (id_exercice),
    nom VARCHAR(255) not null,
    serie int not null,
    repetition int not null,
    pourcentage_rm int not null,
    commentaire VARCHAR(255) null,
    resultat int null,
    id_seance int null
);
create table seances
(
    id_seance int auto_increment,
    constraint seances_pk
        primary key (id_seance),
    id_programme int null
);
create table programmes
(
    id_programme int auto_increment,
    constraint programmes_pk
        primary key (id_programme),
    nom_programme VARCHAR(255) null
);
create table users
(
    id int auto_increment,
    constraint users_pk
        primary key (id),
    first_name VARCHAR(255) not null,
    last_name VARCHAR(255) not null,
    email VARCHAR(255) not null,
    age int null,
    taille int null,
    poids int null,
    avancement int null,
    id_programme int null,
    constraint users_fk
        foreign key (id_programme) references programmes(id_programme)
);