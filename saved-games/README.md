# sv-front

Front end do Saved Games, desenvolvido em Angular 9.

# SavedGames

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.1.0.

# Estrutura do projeto

## Core

O core module deve conter serviços singleton, componentes universais e outros recursos em que há uma instância única. 
Autenticação, header, interceptors são exemplos de componentes que terá apenas uma instância ativa para a aplicação e será utilizado praticamente por todos os modules.

## Shared

O shared é onde todos os componentes compartilhados, pipes, filters e services devem ir. 
O shared pode ser importado em qualquer module. Assim esses itens serão reutilizados. O shared module deve ser independente do restante do aplicativo. Portanto, não deve ter referências de outro módulo.

## Módulos - Lazy loading

Módulos lazy loaded ajudam a diminuir o tempo de inicialização da aplicação. Com o lazy load, o aplicativo não precisa carregar tudo de uma só vez. Ele só vai carregar o que o usuário espera ver. O módulo só irá carregar quando o usuário navegar para sua rota. Perfeito para aplicações grandes, combina com o interesse do usuário e organiza a estrutura. Todo o conteúdo do módulo está diretamente relacionado com a rota. Logo faz sentido os componentes estarem dentro do módulo.

Comando para criar novos módulos - ng generate module customers --route customers --module app.module
[Documentação-Angular](https://angular.io/guide/lazy-loading-ngmodules)

## Referências

[Documentação-Angular](https://angular.io/guide/styleguide#!#application-structure-and-angular-modules)
[Artigo-Medium-Leandro-Mancini](https://medium.com/@mancinileandro/como-definir-uma-estrutura-de-pastas-altamente-escal%C3%A1vel-para-o-seu-projeto-angular-31102e79a33f)
[Artigo-Bruno-Brito](https://www.brunobrito.net.br/estruturando-components-angular/)

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).