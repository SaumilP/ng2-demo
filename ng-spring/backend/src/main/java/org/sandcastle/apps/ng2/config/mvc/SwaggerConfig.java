package org.sandcastle.apps.ng2.config.mvc;

import com.google.common.base.Predicate;
import org.joda.time.Chronology;
import org.joda.time.DateTime;
import org.joda.time.DateTimeZone;
import org.joda.time.LocalDate;
import org.joda.time.LocalTime;
import org.sandcastle.apps.ng2.config.ConfigurationConstants;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Profile;
import springfox.documentation.builders.ApiInfoBuilder;
import springfox.documentation.service.ApiInfo;
import springfox.documentation.spi.DocumentationType;
import springfox.documentation.spring.web.plugins.Docket;
import springfox.documentation.swagger2.annotations.EnableSwagger2;

import static springfox.documentation.builders.PathSelectors.regex;

@Configuration
@EnableSwagger2
@Profile(ConfigurationConstants.PROFILE_SWAGGER_UI)
public class SwaggerConfig {

    @Bean
    public Docket swaggerSpringMvcPlugin(){
        return new Docket(DocumentationType.SWAGGER_2)
                .groupName("webservice-api")
                .select()
                .paths( urlPaths() )
                .build()
                .directModelSubstitute(LocalTime.class, String.class)
                .ignoredParameterTypes(DateTime.class, LocalDate.class, DateTimeZone.class, Chronology.class)
                .apiInfo( restApiInfo() );
    }

    private ApiInfo restApiInfo() {
        return new ApiInfoBuilder()
                .title("User Service API")
                .description("APIs providing all the functionality to work with user details and associated actions")
                .termsOfServiceUrl("http://springfox.io")
                .contact("no-reply@gmail.com")
                .version("1.0")
                .license("Apache License Version 2.0")
                .build();
    }

    private Predicate<String> urlPaths() {
        return regex("/.*");
    }
}
