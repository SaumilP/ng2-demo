package org.sandcastle.apps.ng2.mvc;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class MainController {

    @RequestMapping("/swagger")
    public String getSwaggerUIPage(){
        return "swagger";
    }
}
