package io.takima.demo;
import javax.persistence.*;
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
    private Integer idSeance;

    @Column(name = "id_exercice")
    private Integer idExercice;

    public Seance() {}

    public Seance(Integer idSeance, Integer idExercice) {
        this.idSeance = idSeance;
        this.idExercice = idExercice;
    }

    public Integer getIdSeance() {
        return idSeance;
    }

    public void setIdSeance(Integer idSeance) {
        this.idSeance = idSeance;
    }

    public Integer getIdExercice() {
        return idExercice;
    }

    public void setIdExercice(Integer idExercice) {
        this.idExercice = idExercice;
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
