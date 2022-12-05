import { Injectable } from '@angular/core';

import { FreshdeskWebwidgetConfig } from './freshdesk-webwidget.model';

function getWindow(): any {
  return window;
}

@Injectable()
export class FreshdeskWebwidgetService {

  constructor(private freshdeskWebwidgetConfig?: FreshdeskWebwidgetConfig) {
    if (!this.freshdeskWebwidgetConfig.widgetId) {
      throw new Error('Missing widgetId. Please set in app config via FreshdeskWidgetProvider');
    }
    const window = getWindow();

    const script = document.createElement('script');

    script.type = 'text/javascript';
    script.async = true;
    script.src = `https://widget.freshworks.com/widgets/${this.freshdeskWebwidgetConfig.widgetId}.js`;

    window.fwSettings = {
      'widget_id': freshdeskWebwidgetConfig.widgetId,
      'locale': freshdeskWebwidgetConfig.locale
    };

    window.FreshworksWidget || function() {
      if ("function" != typeof window.FreshworksWidget) {
        let n = function() {
          n['q'].push(arguments)
        };
        n['q'] = [], window.FreshworksWidget = n
      }
    }();

    script.onload = function (event) {
      try {
        freshdeskWebwidgetConfig.callback(window.FreshworksWidget);
      } catch (error) {
        console.log("error.: ", error)
      }
    };

    script.onerror = function (event) {
      console.log("error Onerror.: ", event)
    };

    document.body.append(script);
  }

  get FreshworksWidget() {
    const window = getWindow();
    return window.FreshworksWidget;
  }
}
