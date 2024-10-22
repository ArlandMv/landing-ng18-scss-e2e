# LandingNg18ScssE2e

[Angular CLI](https://github.com/angular/angular-cli) version 18.2.8.
PNPM
NODE LTS version 20.18.0
GIT+ git bash

## Code scaffolding with ANGULAR CLI

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

COMPONENTS
ng g c components/navbar

PAGES

- ng g c pages/home --inline-style
- ng g c pages/products --inline-style
- ng g c pages/about --inline-template --inline-style
  ng generate component pages/home --standalone --inline-template --inline-style

Services

- ng g s services/auth

## NPM -> PNPM

- pnpm add motion
- pnpm add flowbite

npm install cypress --save-dev
pnpm add cypress --save-dev
add to scrips-> "e2e": "cypress open"
pnpm e2e

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
