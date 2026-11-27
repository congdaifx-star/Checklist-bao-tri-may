var suitehelp = {};
suitehelp.contexts = {
        
}
        // Check for a context-sensitive link and redirect if present (and valid)
suitehelp.checkContext = function () {
    "use strict";

    var context = suitehelp.contexts[suitehelp.getQueryString("context")],
        adjustedQS =  window.location.search.substring(1).replace(/context=[^&]+&|(&|^)context=[^&]+/, "");
    /* if (context) {
        if (adjustedQS) {
       
            document.location =  document.getElementsByTagName("head")[0].getAttribute("data-approot-head") + context + "?" + adjustedQS;
        } else {
            document.location =  document.getElementsByTagName("head")[0].getAttribute("data-approot-head") + context;
        }
    } */
// replaced per Falcon software developer Leah Emerson (2021)
	if (context) {
            // Must start with GUID or home, must not contain any symbols other than '-'
            if (((String(context)).indexOf("GUID") == 0 || (String(context)).indexOf("home") == 0) & (String(context)).match(/^[A-Za-z0-9-]+$/) !== null) {
                console.log("no match context" + context);
                return;
            }
            if (adjustedQS) {
                // Must be the only string we are expecting
                if (adjustedQS === "local=true&nav=toc_pane" || adjustedQS === "nav=toc_pane" || adjustedQS !== null) {
                    document.location = document.getElementsByTagName("head")[0].getAttribute("data-approot-head") + context + "?" + adjustedQS;
                }

            } else {
                document.location = document.getElementsByTagName("head")[0].getAttribute("data-approot-head") + context;
            }
        }
	
};

// Lookup a query string variable
suitehelp.getQueryString = function (key) {
    "use strict";

    if (!suitehelp.queryString) {
        suitehelp.queryString = {};
        var query = window.location.search.substring(1),
            vars = query.split("&"),
            i,
            pair;
        for (i = 0; i < vars.length; i += 1) {
            pair = vars[i].split("=");
            suitehelp.queryString[pair[0]] = decodeURIComponent(pair[1]);
        }
    }

    return suitehelp.queryString[key];
};

suitehelp.checkContext();