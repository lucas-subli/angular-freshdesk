# angular-freshdesk

[![Maintainability](https://api.codeclimate.com/v1/badges/75bc5877b3bf6939fe44/maintainability)](https://codeclimate.com/github/lucas-subli/angular-freshdesk/maintainability)
[![Build Status](https://travis-ci.org/lucas-subli/angular-freshdesk.svg?branch=master)](https://travis-ci.org/lucas-subli/angular-freshdesk)
[![contributions welcome](https://img.shields.io/badge/contributions-welcome-brightgreen.svg?style=flat)](https://github.com/lucas-subli/angular-freshdesk/issues)

Freshdesk widget for Angular 14+ (fork of https://github.com/AlisonVilela/ngx-freshdesk-webwidget). I just updated the libs.

## Installation

Via [npm](https://www.npmjs.com/package/angular-freshdesk):

```bash
npm install angular-freshdesk --save
```

## Usage

### 1. Import the `FreshdeskWebwidgetModule`

```ts
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { FreshdeskWebwidgetModule } from 'angualr-freshdesk';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FreshdeskWebwidgetModule.forRoot()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

#### SharedModule

```ts
@NgModule({
    exports: [
      CommonModule,
      FreshdeskWebwidgetModule
    ]
})
export class SharedModule { }
```

##### Configuration

```ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FreshdeskWebwidgetModule, FreshdeskWebwidgetConfig } from 'angular-freshdesk';

import { AppComponent } from './app';

export class FreshdeskConfig extends FreshdeskWebwidgetConfig {
  widgetId = 00000000000;
  locale = 'en';
  callback(FreshworksWidget) {
    FreshworksWidget('hide');
  }
}

@NgModule({
    imports: [
        BrowserModule,
        HttpClientModule,
        FreshdeskWebwidgetModule.forRoot(FreshdeskConfig)
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
```

#### 2. Import the `FreshdeskWebwidgetService`

```ts
import { FreshdeskWebwidgetService } from 'angular-freshdesk';

@Component({
  selector: 'app',
  templateUrl: './app.html'
})
export class app {

  constructor(private _FreshdeskWebwidgetService: FreshdeskWebwidgetService) { }

}
```

#### 3. Example

```ts
constructor(private _FreshdeskWebwidgetService: FreshdeskWebwidgetService) {
  this._FreshdeskWebwidgetService.FreshworksWidget('identify', 'ticketForm', {
    name: 'John Doe',
    email: 'john.doe@acme.inc',
  });

  this._FreshdeskWebwidgetService.FreshworksWidget('show');
}

logout(){
  this._FreshdeskWebwidgetService.FreshworksWidget('hide');
}
```

```ts
buttonClick(){
  this._FreshdeskWebwidgetService.FreshworksWidget('open', 'ticketForm');
}
```

```ts
buttonClickArticle(articleId: number){
  this._FreshdeskWebwidgetService.FreshworksWidget('open', 'article', {
    id: articleId
  });
}
```

## API

### FreshdeskWebwidgetService

#### Methods

- `FreshworksWidget`. Please see [Freshdesk Documentation](https://developers.freshdesk.com/widget-api) for more information.

#### FreshdeskWebwidgetConfig

- `widgetId`: Number of your Freshdesk Web Widget ID.
- `locale`: To force the widget to load in a particular language.
- `callback`: Callback, executed after Freshdesk loaded.

## Issues

Please report bugs and issues [here](https://github.com/lucas-subli/angular-freshdesk/issues).

## License

MIT © [lucas.subli](https://github.com/lucas-subli)

## Change log

### v0.1.0

- Upgraded for angular 14/15
- Initial version (fork of [ngx-freshdesk-webwidget](https://github.com/AlisonVilela/ngx-freshdesk-webwidget))
