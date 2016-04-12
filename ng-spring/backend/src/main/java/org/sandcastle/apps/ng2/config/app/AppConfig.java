package org.sandcastle.apps.ng2.config.app;

import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.ImportResource;

@Configuration
@ImportResource({ "classpath:/root-applicationContext.xml", "classpath:/data-applicationContext.xml", "classpath:/service-applicationContext.xml"})
public class AppConfig {
}
