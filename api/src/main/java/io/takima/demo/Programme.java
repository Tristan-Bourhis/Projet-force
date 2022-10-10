package io.takima.demo;
import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import java.util.List;
import java.util.Objects;

@Entity(name = "programmes")
public class Programme {
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
    private Integer idProgramme;

    @Column(name = "nom")
    private String nom;
    @OneToMany(mappedBy = "programme",orphanRemoval = true,cascade = CascadeType.REMOVE)
    @JsonIgnore
    private List<Seance> seances;


    public Programme() {}

    public String getNom() {
        return nom;
    }

    public void setNom(String nom) {
        this.nom = nom;
    }

    public Integer getIdProgramme() {
        return idProgramme;
    }

    public void setIdProgramme(Integer idProgramme) {
        this.idProgramme = idProgramme;
    }

    public List<Seance> getSeances() {
        return seances;
    }

    public void setSeances(List<Seance> seances) {
        this.seances = seances;
    }

    @Override
    public String toString() {
        return "Programme{" +
                "idProgramme=" + idProgramme +
                ", nom='" + nom + '\'' +
                ", seances=" + seances +
                '}';
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Programme programme = (Programme) o;
        return idProgramme.equals(programme.idProgramme);
    }

    @Override
    public int hashCode() {
        return Objects.hash(idProgramme);
    }
}
