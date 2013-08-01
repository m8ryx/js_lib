# function to read XML from filesystem

# http://www.w3schools.com/dom/dom_parser.asp
function loadXMLDoc(dname)
{
    if (window.XMLHttpRequest)
          {
                xhttp=new XMLHttpRequest();
                  }
                  else
                        {
                              xhttp=new ActiveXObject("Microsoft.XMLHTTP");
                                }
                                xhttp.open("GET",dname,false);
                                xhttp.send();
                                return xhttp.responseXML;
}

# http://stackoverflow.com/questions/649614/xml-parsing-of-a-variable-string-in-javascript/8412989#8412989
# function to convert to XML
var parseXml;
if (typeof window.DOMParser != "undefined") {
        parseXml = function(xmlStr) {
                    return ( new window.DOMParser() ).parseFromString(xmlStr, "text/xml");
                        };
} else if (typeof window.ActiveXObject != "undefined" &&
                 new window.ActiveXObject("Microsoft.XMLDOM")) {
        parseXml = function(xmlStr) {
                    var xmlDoc = new window.ActiveXObject("Microsoft.XMLDOM");
                            xmlDoc.async = "false";
                                    xmlDoc.loadXML(xmlStr);
                                            return xmlDoc;
                                                };
} else {
        throw new Error("No XML parser found");
}
}
        }
}
        }
}
                        }
          }
}
