var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var angular2_1 = require('angular2/angular2');
var Hero = (function () {
    function Hero() {
    }
    return Hero;
})();
var HEROES = [
    { "id": 11, "name": "Mr. Nice" },
    { "id": 12, "name": "Narco" },
    { "id": 13, "name": "Bombasto" },
    { "id": 14, "name": "Celeritas" },
    { "id": 15, "name": "Magneta" },
    { "id": 16, "name": "RubberMan" },
    { "id": 17, "name": "Dynama" },
    { "id": 18, "name": "Dr IQ" },
    { "id": 19, "name": "Magma" },
    { "id": 20, "name": "Tornado" }
];
var AppComponent = (function () {
    function AppComponent() {
        this.title = 'Tour of Heroes';
        this.hero = {
            id: 1,
            name: 'Windstorm'
        };
        this.heroes = HEROES;
    }
    AppComponent.prototype.onSelect = function (hero) {
        this.selectedHero = hero;
    };
    AppComponent.prototype.getSelectedClass = function (hero) {
        return { 'selected': hero === this.selectedHero };
    };
    AppComponent = __decorate([
        angular2_1.Component({
            selector: 'my-app',
            directives: [angular2_1.FORM_DIRECTIVES, angular2_1.NgFor, angular2_1.NgIf, angular2_1.NgClass],
            styles: ["\n\t.heroes {list-style-type: none; margin-left: 1em; padding: 0; width: 10em;}\n\t.heroes li { cursor: pointer; position: relative; left: 0; transition: all 0.2s ease; }\n\t.heroes li:hover {color: #369; background-color: #EEE; left: .2em;}\n\t.heroes .badge {\n\tfont-size: small;\n\tcolor: white;\n\tpadding: 0.1em 0.7em;\n\tbackground-color: #369;\n\tline-height: 1em;\n\tposition: relative;\n\tleft: -1px;\n\ttop: -1px;\n\t}\n\t.selected { background-color: #EEE; color: #369; }\n\t"],
            template: "\n\t\t<h1>{{title}}</h1>\n\n\t\t<h2>{{hero.name}} details!</h2>\n\t\t<div><label>id: </label>{{hero.id}}</div>\n\t\t<div>\n\t\t\t<label>name: </label>\n\t\t\t<div><input [(ng-model)]=\"hero.name\" placeholder=\"name\"></div>\n\t\t</div>\n\n\t\t<div *ng-if=\"selectedHero\">\n\t\t\t<h2>{{selectedHero.name}} details!</h2>\n\t\t\t<div><label>id: </label>{{selectedHero.id}}</div>\n\t\t\t<div>\n\t\t\t\t<label>name: </label>\n\t\t\t\t<div><input [(ng-model)]=\"selectedHero.name\" placeholder=\"name\"></div>\n\t\t\t</div>\n\t\t</div>\n\n\t\t<h2>My Heroes</h2>\n\t\t<ul class=\"heroes\">\n\t\t\t<li *ng-for=\"#hero of heroes\"\n\t\t\t \t[ng-class]=\"getSelectedClass(hero)\"\n\t\t\t\t(click)=\"onSelect(hero)\">\n\t\t\t\t<span class=\"badge\">{{hero.id}}</span> {{hero.name}}\n\t\t\t</li>\n\t\t</ul>\n\t\t"
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
})();
angular2_1.bootstrap(AppComponent);
//# sourceMappingURL=app.js.map