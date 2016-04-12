package org.sandcastle.apps.ng2.mvc;

import javax.servlet.Filter;
import javax.servlet.FilterChain;
import javax.servlet.FilterConfig;
import javax.servlet.ServletException;
import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

public class CORSFilter implements Filter {
    private static final String ALLOWED_DOMAINS_REGEXP = ".*";

    @Override
    public void init(FilterConfig filterConfig) throws ServletException {
    }

    @Override
    public void doFilter(ServletRequest servletRequest, ServletResponse servletResponse, FilterChain filterChain) throws IOException, ServletException {
        HttpServletRequest req = (HttpServletRequest)servletRequest;
        HttpServletResponse res = (HttpServletResponse) servletResponse;
        String origin = req.getHeader("Origin");
        if(origin != null && origin.matches(ALLOWED_DOMAINS_REGEXP)){
            res.addHeader("Access-Control-Allow-Origin", origin);
            if("options".equalsIgnoreCase(req.getMethod())) {
                res.setHeader("Allow", "GET, HEAD, PUT, DELETE, TRACE, OPTIONS");
                String headers = req.getHeader("Access-Control-Request-Headers");
                String method = req.getHeader("Access-Control-Request-Method");
                res.addHeader("Access-Control-Allow-Methods", method);
                res.addHeader("Access-Control-Allow-Headers", headers);
                res.addHeader("Access-Control-Allow-Credentials", "true");
                res.setContentType("text/plain");
                res.getWriter().flush();
                return;
            }
        }
        if("post".equalsIgnoreCase(req.getMethod())){
            res.addHeader("Cache-Control", "no-cache");
        }

        if(filterChain != null){
            filterChain.doFilter(req, res);
        }
    }

    @Override
    public void destroy() {
    }
}
