(function(Twig){
    'use strict';

    Twig.Templates.registerParser('raw', function(params) {
        return params.data || '';
    });
})();
