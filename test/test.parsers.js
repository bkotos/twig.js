var Twig = Twig || require("../twig"),
    twig = twig || Twig.twig;

describe("Twig.js Parsers ->", function() {
    // Encodings
    describe("custom parser ->", function() {
        it("should define a custom parser", function() {
            Twig.extend(function(Twig) {
                var parser = function(params) {
                    return '[CUSTOM PARSER] ' + params.data;
                };

                Twig.Templates.registerParser('custom', obj.loader, obj);
                Twig.Templates.parsers.should.have.property('custom');
            });
        });

        it("should run the data through the custom parser", function() {
            Twig.extend(function(Twig) {
                var params = {
                    data: 'This is a test template.'
                };
                var template = Twig.templates.parsers.custom(params);

                template.should.equal('[CUSTOM PARSER] This is a tes template.');
            });
        });

        it("should remove a registered parser", function() {
            Twig.extend(function(Twig) {
                Twig.Templates.unRegisterParser('custom');
                Twig.Templates.parsers.should.not.have.property('custom');
            });
        });
    });
});
