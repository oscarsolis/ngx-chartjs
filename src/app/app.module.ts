import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { ChartjsModule } from '../lib/public_api';
import { AppComponent } from './app.component';
import { BarExampleComponent } from './bar-example/bar-example.component';
import { BubbleExampleComponent } from './bubble-example/bubble-example.component';
import { CrazyDataLineExampleComponent } from './crazy-data-line-example/crazy-data-line-example.component';
import { DoughnutExampleComponent } from './doughnut-example/doughnut-example.component';
import { DynamicDoughnutExampleComponent } from './dynamic-doughnut-example/dynamic-doughnut-example.component';
import { HorizontalBarExampleComponent } from './horizontal-bar-example/horizontal-bar-example.component';
import { LegendHandlersExampleComponent } from './legend-handlers-example/legend-handlers-example.component';
import { LegendOptionsExampleComponent } from './legend-options-example/legend-options-example.component';
import { LineExampleComponent } from './line-example/line-example.component';
import { MixedDataExampleComponent } from './mixed-data-example/mixed-data-example.component';
import { PieExampleComponent } from './pie-example/pie-example.component';
import { PolarExampleComponent } from './polar-example/polar-example.component';
import { RadarExampleComponent } from './radar-example/radar-example.component';
import { RandomizedDataLineExampleComponent } from './randomized-data-line-example/randomized-data-line-example.component';
import { ScatterExampleComponent } from './scatter-example/scatter-example.component';

@NgModule({
  declarations: [
    AppComponent,
    DoughnutExampleComponent,
    DynamicDoughnutExampleComponent,
    PieExampleComponent,
    BarExampleComponent,
    HorizontalBarExampleComponent,
    RadarExampleComponent,
    PolarExampleComponent,
    BubbleExampleComponent,
    ScatterExampleComponent,
    MixedDataExampleComponent,
    RandomizedDataLineExampleComponent,
    CrazyDataLineExampleComponent,
    LegendOptionsExampleComponent,
    LegendHandlersExampleComponent,
    LineExampleComponent,
  ],
  imports: [BrowserModule, FormsModule, ChartjsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
