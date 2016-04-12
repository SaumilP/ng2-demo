package org.sandcastle.apps.ng2.mapper;

import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.MappingTarget;
import org.mapstruct.factory.Mappers;
import org.sandcastle.apps.ng2.domain.model.Person;
import org.sandcastle.apps.ng2.dto.PersonDTO;

@Mapper(componentModel = "spring")
public interface PersonMapper {
    PersonDTO toDTO(Person person);

    @Mapping(target = "version", constant = "1")
    Person toEntity(PersonDTO person);

    @Mapping(target = "version", constant = "1")
    void mapToEntity(PersonDTO personDTO, @MappingTarget Person person);
}
