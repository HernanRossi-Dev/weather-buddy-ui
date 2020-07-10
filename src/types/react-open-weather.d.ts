declare module "react-open-weather" {
  import * as React from 'react';

  export interface Props {
    type?: string;
    city?: string;
    lon?: string;
    lat?: string;
    forecast?: string;
    apikey?: string;
    unit?: string;
    lang?: string;
  }

  class ReactWeather extends React.Component<Props> { }

  export default ReactWeather
}
