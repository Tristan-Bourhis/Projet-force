package io.takima.demo;
import javax.persistence.*;
import java.util.Objects;

@Entity(name = "exercices")
public class Exercice {
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
    private Integer idExercice;

    @Column(name = "nom")
    private String nom;

    @Column(name = "serie")
    private Integer serie;

    @Column(name = "repetition")
    private Integer repetition;

    @Column(name = "pourcentage_rm")
    private Integer pourcentageRm;

    @Column(name = "commentaire")
    private String commentaire;

    @Column(name = "resultat")
    private Integer resultat;

    @ManyToOne
    @JoinColumn(name="id_seance")
    private Seance seance;

    public Exercice() {}

    public Exercice(Integer idExercice, String nom, Integer serie, Integer repetition, Integer pourcentageRm, String commentaire, Integer resultat) {
        this.idExercice = idExercice;
        this.nom = nom;
        this.serie = serie;
        this.repetition = repetition;
        this.pourcentageRm = pourcentageRm;
        this.commentaire = commentaire;
        this.resultat = resultat;
    }

    public Integer getIdExercice() {
        return idExercice;
    }

    public Seance getSeance() {
        return seance;
    }

    public void setSeance(Seance seance) {
        this.seance = seance;
    }

    public void setIdExercice(Integer idExercice) {
        this.idExercice = idExercice;
    }

    public String getNom() {
        return nom;
    }

    public void setNom(String nom) {
        this.nom = nom;
    }

    public Integer getSerie() {
        return serie;
    }

    public void setSerie(Integer serie) {
        this.serie = serie;
    }

    public Integer getRepetition() {
        return repetition;
    }

    public void setRepetition(Integer repetition) {
        this.repetition = repetition;
    }

    public Integer getPourcentageRm() {
        return pourcentageRm;
    }

    public void setPourcentageRm(Integer pourcentageRm) {
        this.pourcentageRm = pourcentageRm;
    }

    public String getCommentaire() {
        return commentaire;
    }

    public void setCommentaire(String commentaire) {
        this.commentaire = commentaire;
    }

    public Integer getResultat() {
        return resultat;
    }

    public void setResultat(Integer resultat) {
        this.resultat = resultat;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Exercice exercice = (Exercice) o;
        return idExercice.equals(exercice.idExercice);
    }

    @Override
    public int hashCode() {
        return Objects.hash(idExercice);
    }
}
