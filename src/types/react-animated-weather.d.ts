declare module "react-animated-weather" {
  import * as React from 'react'

  export interface Props {
    icon?: string
    color?: string
    size?: number
    animate?: boolean
  }

  class ReactWeather extends React.Component<Props> { }

  export default ReactWeather
}
