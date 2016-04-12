package org.sandcastle.apps.ng2.domain.repository.impl;

import com.mysema.query.jpa.JPQLQuery;
import com.mysema.query.jpa.impl.JPAQuery;
import org.sandcastle.apps.ng2.domain.repository.PersonRepositoryCustom;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

public class PersonRepositoryImpl implements PersonRepositoryCustom {
    @PersistenceContext
    private EntityManager em;

    @Override
    public int countCustom() {
        JPQLQuery query = new JPAQuery(em);
        return 0;
        //return (int) query.from(QPerson.person).where(QPerson.person.id.isNotNull()).count();
    }
}
