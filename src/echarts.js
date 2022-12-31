import * as echarts from "echarts/core";
import { BarChart, ScatterChart } from "echarts/charts";
import { LabelLayout } from "echarts/features";
import { CanvasRenderer } from "echarts/renderers";

import {
  TitleComponent,
  TooltipComponent,
  GridComponent,
  DatasetComponent,
  LegendComponent,
} from "echarts/components";

echarts.use([
  BarChart,
  ScatterChart,
  TitleComponent,
  TooltipComponent,
  GridComponent,
  DatasetComponent,
  LabelLayout,
  LegendComponent,
  CanvasRenderer,
]);

export default echarts;
