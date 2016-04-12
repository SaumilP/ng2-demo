package org.sandcastle.apps.ng2.mvc;

import org.sandcastle.apps.ng2.dto.PersonDTO;
import org.sandcastle.apps.ng2.service.PersonService;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import javax.inject.Inject;
import javax.servlet.http.HttpServletRequest;

@RestController
@RequestMapping(value = "/api/person")
public class PersonController {
    @Inject
    private PersonService service;

    @RequestMapping(value = "", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<Page<PersonDTO>> getAll(Pageable pageable, HttpServletRequest req){
        Page<PersonDTO> page = service.findPerson(pageable);
        return new ResponseEntity<>(page, HttpStatus.OK);
    }

    @RequestMapping(value = "/count", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<Long> getCount(HttpServletRequest req){
        Long noOfPersons = service.getCount();
        return new ResponseEntity<>(noOfPersons, HttpStatus.OK);
    }

    @RequestMapping(value = "/{id}", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<PersonDTO> getPerson(@PathVariable Long id, HttpServletRequest req) {
        PersonDTO person = service.getPerson(id);
        return new ResponseEntity<>(person, HttpStatus.OK);
    }

    @RequestMapping(value = "", method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_VALUE)
    public void createPerson(@RequestBody PersonDTO personDTO){
        service.savePerson(personDTO);
    }

    @RequestMapping(value = "", method = RequestMethod.PUT, produces = MediaType.APPLICATION_JSON_VALUE)
    public void updatePerson(@RequestBody PersonDTO personDTO){
        service.savePerson(personDTO);
    }

    @RequestMapping(value = "/{id}", method = RequestMethod.DELETE, produces = MediaType.APPLICATION_JSON_VALUE)
    public void deletePerson(@PathVariable Long id){
        service.deletePerson(id);
    }
}
