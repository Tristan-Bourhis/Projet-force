package io.takima.demo;
import javax.persistence.*;
import java.util.Objects;

@Entity(name = "seance")
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

    @Column(name = "id_exercice")
    private String idExercice;

    public Seance() {}

    public Seance(Long idSeance, String idExercice) {
        this.idSeance = idSeance;
        this.idExercice = idExercice;
    }

    public Long getIdSeance() {
        return idSeance;
    }

    public void setIdSeance(Long idSeance) {
        this.idSeance = idSeance;
    }

    public String getIdExercice() {
        return idExercice;
    }

    public void setIdExercice(String idExercice) {
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
