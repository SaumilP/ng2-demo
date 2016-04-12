package org.sandcastle.apps.ng2.domain.repository;

import org.sandcastle.apps.ng2.domain.model.Person;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PersonRepository extends JpaRepository<Person,Long>, PersonRepositoryCustom {
}
