//Accordion
(function($){

    $(document).ready(function(){
        "use strict";
        var icons = {

            header: "fa fa-caret-right",

            activeHeader: "fa fa-caret-down"

            };

            $(".ts-acordion").accordion({

                icons: icons,

                active:0,

                collapsible: true

            }); 
     }); 
 }); 