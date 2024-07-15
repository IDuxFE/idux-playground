import { getCurrentInstance } from 'vue'

import { IxBarChart, IxChart, IxLineChart, IxPieChart } from '@idux/charts'

const plugins = [IxChart, IxBarChart, IxLineChart, IxPieChart]

const install = (app) => {
  plugins.forEach(plugin => app.use(plugin))
}

const loadCss = () => {
  const proLink = document.createElement('link')
  proLink.rel = 'stylesheet'
  proLink.href = '#CHARTS_STYLE_HREF#'
  document.body.appendChild(proLink)
}

export const setupIduxCharts = () => {
  const instance = getCurrentInstance()
  instance?.appContext.app.use({ install })

  loadCss()
}
