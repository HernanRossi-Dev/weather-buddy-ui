import React, { createContext, useReducer, useContext, useEffect, useRef } from "react"
import axios from 'axios'
import { AppState } from "../interfaces/ContextInterface"
import { Action } from "../types/AppContextTypes"
import { IWeatherData } from "../interfaces/Weather"
import { useInterval } from "../utils/UseInterval"

const appData: AppState = {
  weatherData: undefined,
  forecastIndex: 0,
  dataSetTime: new Date()
}

const appStateReducer = (state: AppState, action: Action): AppState => {
  switch (action.type) {
    case "SET_WEATHER_DATA": {
      return {
        ...state,
        weatherData: action.payload,
        dataSetTime: new Date()
      }
    }
    case "SET_FORECAST_INDEX": {
      return {
        ...state,
        forecastIndex: action.payload
      }
    }
  }
}

const AppStateContext = createContext<AppStateContextProps>({} as AppStateContextProps)

export interface AppStateContextProps {
  state: AppState
  dispatch: React.Dispatch<Action>
}

export const AppStateProvider = ({ children }: React.PropsWithChildren<{}>) => {
  const persistedState = localStorage.getItem("state")
  let localState = appData
  if (persistedState) {
    localState = JSON.parse(persistedState)
  }
  const [state, dispatch] = useReducer(appStateReducer, localState)
  useEffect(() => {
    localStorage.setItem("state", JSON.stringify(state));
  }, [state]);

  useInterval(() => {
    async function getWeather() {
      try {
        const url = `${process.env.REACT_APP_API_URL}api/weather`
        const result = await axios.get(url)
        if (!result) return
        const data = result.data.data as Array<IWeatherData>
        if (!data || data.length < 1) return
        dispatch({
          type: "SET_WEATHER_DATA",
          payload: data
        })
      } catch (err) {
        console.error("Failed to fetch weather: ", err.message)
      }
    }
    getWeather()
    //Poll every 5 minutes
  }, 300000);

  //rotate forecast
  useInterval(() => {
    if (!state.weatherData) return
    let currentIndex = state.forecastIndex + 1
    const cityCount = state.weatherData.length
    if (currentIndex >= cityCount) {
      currentIndex = 0
    }
    dispatch({
      type: "SET_FORECAST_INDEX",
      payload: currentIndex
    })
    //Poll every 10 seconds
  }, 10000);

  return (
    <AppStateContext.Provider value={{ state, dispatch }} >
      {children}
    </AppStateContext.Provider>
  )
}

export const useAppState = () => {
  return useContext(AppStateContext)
}
