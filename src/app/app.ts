
import {Component, View, bootstrap} from 'angular2/angular2';

@Component({
	selector: 'my-app',
	template: '<h1>My First Angular 2 App</h1>'
})
class AppComponent {
	public title = 'Tour of Heroes';
	public hero = 'Windstorm';
}

bootstrap(AppComponent);
