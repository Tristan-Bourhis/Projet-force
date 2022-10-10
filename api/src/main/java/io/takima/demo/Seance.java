package io.takima.demo;
import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import java.util.List;
import java.util.Objects;

@Entity(name = "seances")
public class Seance {
/*
Toutes les classes marquées de "@Entity" correspondent à une table en BDD, la table "users" ici.

Les champs marqués de "@Column" correspondent aux colonnes de ta table.
--> remplacé par "@Id" & "@GeneratedValue(strategy = GenerationType.IDENTITY)" pour le champ id de ta classe.

/!\ Chaque classe entitée à besoin au minimum pour fonctionner de :
     - un constructeur vide
     - des getter et setter associé à ses champs
/!\    (vous pouvez les générer automatiquement via IntelliJ, Clique droit n'importe où dans ta classe --> Generate)
 */

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long idSeance;

    @OneToMany(mappedBy = "seance",orphanRemoval = true,cascade = CascadeType.REMOVE)
    @JsonIgnore
    private List<Exercice> exercices;

    @ManyToOne
    @JoinColumn(name="id_programme")
    private Programme programme;

    public Seance() {}

    public Seance(Long idSeance, List<Exercice> idExercice, Programme programme) {
        this.idSeance = idSeance;
        this.exercices = idExercice;
        this.programme = programme;
    }

    public Long getIdSeance() {
        return idSeance;
    }

    public void setIdSeance(Long idSeance) {
        this.idSeance = idSeance;
    }

    public List<Exercice> getExercices() {
        return exercices;
    }

    public void setExercices(List<Exercice> exercices) {
        this.exercices = exercices;
    }

    public Programme getProgramme() {
        return programme;
    }

    public void setProgramme(Programme programme) {
        this.programme = programme;
    }

    public Programme getSeance() {
        return programme;
    }

    public void setSeance(Programme programme) {
        this.programme = programme;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Seance seance = (Seance) o;
        return idSeance.equals(seance.idSeance);
    }

    @Override
    public int hashCode() {
        return Objects.hash(idSeance);
    }
}
