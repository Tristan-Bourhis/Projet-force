package io.takima.demo;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

/**
 *
 */
@Repository
public interface ProgrammeDAO extends CrudRepository<Programme, Long> {



}
