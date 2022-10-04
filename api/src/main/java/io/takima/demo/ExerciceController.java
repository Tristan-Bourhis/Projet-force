package io.takima.demo;

import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/exercices")
@CrossOrigin
public class ExerciceController {

    private final ExerciceDAO exerciceDAO;

    public ExerciceController(ExerciceDAO exerciceDAO) {
        this.exerciceDAO = exerciceDAO;
    }

    @GetMapping()
    public List<Exercice> getExercices() {
        Iterable<Exercice> it = this.exerciceDAO.findAll();
        List<Exercice> Exercices = new ArrayList<>();
        it.forEach(e -> Exercices.add(e));

        return Exercices;
    }

    @PostMapping()
    public Exercice addExercice(@RequestBody Exercice Exercice) {
        return this.exerciceDAO.save(Exercice);
    }

    @DeleteMapping("/{id_exercice}")
    public void deleteExercice(@PathVariable Long id) {
        this.exerciceDAO.deleteById(id);
    }

}
