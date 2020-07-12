import { Card, CardContent, Typography } from '@material-ui/core'
import moment from 'moment-timezone'
import React, { useEffect, useState } from 'react'
import { TimerCard } from '../styles/StyledComponents'
import { useInterval } from '../utils/UseInterval'

interface TimerProps {
  lat: number
  lng: number
}
export const TimerComponent = (props: TimerProps): JSX.Element => {
  const [time, setTime] = useState('00:00:00')
  const [date, setDate] = useState('Mon Jan 1')

  //rotate forecast
  useInterval(() => {
    const timeRaw = moment().tz("America/Vancouver");
    const formatedTime = timeRaw.format("hh:mm:ss A");
    const dateTimeFormat = timeRaw.format("ddd MMM Do");
    setDate(dateTimeFormat)
    setTime(formatedTime)
  }, 1000);

  useEffect(() => {
    const timeRaw = moment().tz("America/Vancouver");
    const formatedTime = timeRaw.format("hh:mm:ss A");
    const dateTimeFormat = timeRaw.format("ddd MMM Do");
    setDate(dateTimeFormat)
    setTime(formatedTime)
  }, [])

  return (
    <TimerCard>
      <Card>
        <CardContent>
          <Typography variant="h5" color="textSecondary" component="p">
            <strong>{date}</strong><br />
            <strong>{time}</strong>
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p" style={{ marginTop: '10px', marginBottom: '-10px' }}>
            Made by Hernan Rossi 2020.
          </Typography>
        </CardContent>
      </Card>
    </TimerCard>
  )
}