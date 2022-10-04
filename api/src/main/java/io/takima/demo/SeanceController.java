package io.takima.demo;

import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/seances")
@CrossOrigin
public class SeanceController {

    private final SeanceDAO seanceDAO;

    public SeanceController(SeanceDAO seanceDAO) {
        this.seanceDAO = seanceDAO;
    }

    @GetMapping()
    public List<Seance> getSeances() {
        Iterable<Seance> it = this.seanceDAO.findAll();
        List<Seance> seances = new ArrayList<>();
        it.forEach(e -> seances.add(e));

        return seances;
    }

    @PostMapping()
    public Seance addSeance(@RequestBody Seance seance) {
        return this.seanceDAO.save(seance);
    }

    @DeleteMapping("/{id_seance}")
    public void deleteSeance(@PathVariable Long id) {
        this.seanceDAO.deleteById(id);
    }

}
