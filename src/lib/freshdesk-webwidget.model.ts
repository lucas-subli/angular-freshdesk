export abstract class FreshdeskWebwidgetConfig {
  abstract widgetId: number;
  abstract locale: string;
  abstract callback(FreshworksWidget): any;
}
