create table exercices
(
    id_exercice bigint auto_increment,
    constraint exercices_pk
        primary key (id_exercice),
    nom TEXT not null
);
create table exercices_seance
(
    id_exercice_seance bigint auto_increment,
    constraint exercices_seance_pk
        primary key (id_exercice_seance),
    serie int not null,
    repetition int not null,
    pourcentage_rm int not null,
    commentaire text null,
    resultat int null
);
create table seances
(
    id_seance bigint auto_increment,
    constraint seances_pk
        primary key (id_seance),
    id_exercice_seance bigint null,
    constraint seances_fk
        foreign key (id_exercice_seance) references exercices_seance(id_exercice_seance)
);
create table programmes
(
    id_programme bigint auto_increment,
    constraint programmes_pk
        primary key (id_programme),
    id_seance bigint null,
    constraint programmes_fk
        foreign key (id_seance) references seances(id_seance)
);
create table users
(
    id bigint auto_increment,
    constraint users_pk
        primary key (id),
    first_name TEXT not null,
    last_name TEXT not null,
    email TEXT not null,
    age int null,
    taille int null,
    poids int null,
    avancement int null,
    id_programme bigint null,
    constraint users_fk
        foreign key (id_programme) references programmes(id_programme)
);