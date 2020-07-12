import styled, { keyframes } from 'styled-components'
import Logo from  '../assets/Sun.png'

export const StyledAppContainer = styled.div`
  background-color: #fffff;
  height: 100%;
  width: 100%;
`
export const StyledSideContainer = styled.div`
  background-color: #fffff;
  height: 100%;
  width: 100%;
`

interface WeatherCardDynaProps {
  zIndex?: number
}

export const WeatherCardDynaProps = styled.div<WeatherCardDynaProps>`
  z-index: ${props => (props.zIndex ? props.zIndex : 1)};
`
export const WeatherCard = styled(WeatherCardDynaProps)`
  height: 68px;
  width: 210px;
  background: white;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  border-radius: 5px 5px 0 0;
  position: relative;
  left: -100px;
  top: -100px;
`
export const StyledMapContainer = styled.div`
  width: 100%;
  height: 100%;
  margin: auto;
`
export const TimerCard = styled.div`
  width: 220px;
  height: 30px;
  background: white;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  border-radius: 5px 5px 0 0;
`
export const WeatherForecastCard = styled.div`
  width: 95%;
  height: 100%;
  background: white;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  border-radius: 5px 5px 0 0;
  margin: auto;
`
export const LabelContainer = styled.div`
  padding: 2px 16px;
`
export const DrawerFooter = styled.span`
  userSelect: none;
  position: absolute;
  bottom: 0;
  padding: 6px 12px 2px;
  font-weight: 400;
  font-size: 10px;
  text-align: center;
  color: #df691a;  
`

const logoAnimation = keyframes`
  0% {
    width: 125px;
    height:95px;
    opacity: 0;
  }
  50% {
    width: 250px;
    height: 190px;
    opacity: 0.85;
  }
  100% {
    width: 125px;
    height:95px;
    opacity: 0;
  }
}`

export const LogoLoading = styled.div`
  background-size: 100% 100%;
  background-image: url(${Logo});
  width: 250px;
  height: 190px;
  -webkit-animation: ${logoAnimation} 4s cubic-bezier(.85,.12,.31,.98) infinite;
  animation: ${logoAnimation}  4s cubic-bezier(.85,.12,.31,.98) infinite;
  margin: auto;
  margin-top: 125px;
`
export const LoadingContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 125px;
`