package org.sandcastle.apps.ng2.service;


import org.sandcastle.apps.ng2.dto.PersonDTO;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

public interface PersonService {
    Page<PersonDTO> findPerson(Pageable pageable);
    PersonDTO getPerson(Long id);
    void updatePerson(PersonDTO personDTO);
    void savePerson(PersonDTO personDTO);
    void deletePerson(Long id);
    Long getCount();
}
