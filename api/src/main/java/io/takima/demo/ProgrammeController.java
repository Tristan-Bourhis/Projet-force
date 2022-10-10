package io.takima.demo;

import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/programmes")
@CrossOrigin
public class ProgrammeController {

    private final ProgrammeDAO programmeDAO;

    public ProgrammeController(ProgrammeDAO programmeDAO) {
        this.programmeDAO = programmeDAO;
    }

    @GetMapping()
    public List<Programme> getprogrammes() {
        Iterable<Programme> it = this.programmeDAO.findAll();
        List<Programme> programmes = new ArrayList<>();
        it.forEach(e -> programmes.add(e));

        return programmes;
    }

    @PostMapping()
    public Programme addProgramme(@RequestBody Programme programme) {
        return this.programmeDAO.save(programme);
    }

    @DeleteMapping("/{id_programme}")
    public void deleteProgramme(@PathVariable Long id) {
        this.programmeDAO.deleteById(id);
    }

}
