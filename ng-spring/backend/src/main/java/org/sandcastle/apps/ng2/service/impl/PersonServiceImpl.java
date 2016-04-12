package org.sandcastle.apps.ng2.service.impl;

import org.sandcastle.apps.ng2.domain.model.Person;
import org.sandcastle.apps.ng2.domain.repository.PersonRepository;
import org.sandcastle.apps.ng2.dto.PersonDTO;
import org.sandcastle.apps.ng2.mapper.PersonMapper;
import org.sandcastle.apps.ng2.service.PersonService;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import javax.inject.Inject;

@Service
@Transactional
public class PersonServiceImpl implements PersonService {
    @Inject
    private PersonRepository personRepository;

    @Inject
    PersonMapper mapper;

    @Override
    public Page<PersonDTO> findPerson(Pageable pageable) {
        return personRepository.findAll(pageable).map(person -> mapper.toDTO(person));
    }

    @Override
    public PersonDTO getPerson(Long id) {
        Person person = personRepository.getOne(id);
        if(person != null){
            return mapper.toDTO(person);
        }
        return null;
    }

    @Override
    public void updatePerson(PersonDTO personDTO) {
        Person person = personRepository.findOne(personDTO.getId());
        personRepository.save(person);
    }

    @Override
    public void savePerson(PersonDTO personDTO) {
        Person person = mapper.toEntity(personDTO);
        personRepository.save(person);
    }

    @Override
    public void deletePerson(Long id) {
        personRepository.delete(id);
    }

    @Override
    public Long getCount() {
        return (long) personRepository.countCustom();
    }
}
