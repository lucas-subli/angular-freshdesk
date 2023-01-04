import { ModuleWithProviders, NgModule, Type } from '@angular/core';
import { FreshdeskWebwidgetConfig } from './freshdesk-webwidget.model';
import { FreshdeskWebwidgetService } from './freshdesk-webwidget.service';

@NgModule()
export class FreshdeskWebwidgetModule {
  static forRoot(freshdeskConfig: Type<FreshdeskWebwidgetConfig>): ModuleWithProviders<FreshdeskWebwidgetModule> {
    return {
      ngModule: FreshdeskWebwidgetModule,
      providers: [
        {provide: FreshdeskWebwidgetConfig, useClass: freshdeskConfig },
        {provide: FreshdeskWebwidgetService, useClass: FreshdeskWebwidgetService, deps: [FreshdeskWebwidgetConfig] }
      ]
    };
  }
}

export {
  FreshdeskWebwidgetService,
  FreshdeskWebwidgetConfig
};
