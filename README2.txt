# original node version: 4.0.0, npm: 2.14.2

$ nvm use 8.0.0
$ npm install -g @angular/cli
$ ng new blog
$ cd blog
$ ng serve # npm start


# folders
$ mkdir src/app/components  src/app/services src/app/pages src/app/guards

# links
https://github.com/angular/angular-cli
https://www.typescriptlang.org/docs/handbook/basic-types.html
https://jsonplaceholder.typicode.com/



$ ng g c components/users
$ ng g s services/users # remember to provide it in app.module.ts



# services:
1. ng g s services/users # remember to provide it in app.module.ts in the providers: [xxx]
2. import it in a component
3. pass it in the constructor of the component
4. use it on ngOnInit function of component


# bootstrap
npm install bootstrap --save
// styles.css
@import "~bootstrap/dist/css/bootstrap.css";



#================================================ guards (6 types)
- CanActivate
$ ng g guard guards/auth
import { AuthGuard } from './guards/auth.guard';
{
  path: '',
  canActivate: [AuthGuard],
  component: HomeComponent
},

providers: [
  	UsersService,
    AuthGuard
  ],

#================================================




# TODO:

guards
forms
bootstrap
Input
Output
Geek Batman



