package io.takima.demo;

import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

/**
 *
 */
@Repository
public interface UserDAO extends CrudRepository<User, Long> {

    Optional<User> findByEmail(String email);

}
