import '@idux/charts/style.css'

import { IxBarChart, IxChart, IxLineChart, IxPieChart } from '@idux/charts'

const plugins = [IxChart, IxBarChart, IxLineChart, IxPieChart]

const install = (app) => {
  plugins.forEach(plugin => app.use(plugin))
}

export default { install }