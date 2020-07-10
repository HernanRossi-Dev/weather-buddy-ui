import React, { createContext, useReducer, useContext, useEffect, useRef } from "react"
import axios from 'axios'
import { AppState } from "../interfaces/ContextInterface"
import { Action } from "../types/AppContextTypes"
import { IWeatherData } from "../interfaces/Weather"

const appData: AppState = {
  weatherData: undefined,
}

const appStateReducer = (state: AppState, action: Action): AppState => {
  switch (action.type) {
    case "SET_WEATHER_DATA": {
      return {
        weatherData: action.payload
      }
    }
  }
}

const AppStateContext = createContext<AppStateContextProps>({} as AppStateContextProps)

interface AppStateContextProps {
  state: AppState
  dispatch: React.Dispatch<Action>
}

export const AppStateProvider = ({ children }: React.PropsWithChildren<{}>) => {
  const persistedState = localStorage.getItem("state")
  let localState = appData
  if (persistedState) {
    localState = JSON.parse(persistedState)
  }

  useInterval(() => {
    async function getWeather() {
      console.log("Refresh data in context")
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
    //Poll api every half hour
  // }, 10000);
  }, 1800000);

  const [state, dispatch] = useReducer(appStateReducer, localState)

  useEffect(() => {
    localStorage.setItem("state", JSON.stringify(state));
  }, [state]);

  return (
    <AppStateContext.Provider value={{ state, dispatch }} >
      {children}
    </AppStateContext.Provider>
  )
}

export const useAppState = () => {
  return useContext(AppStateContext)
}

function useInterval(callback: any, delay: number) {
  const savedCallback = useRef(() => {});
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    function tick() {
      savedCallback.current();
    }
    if (delay !== null) {
      let id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
}