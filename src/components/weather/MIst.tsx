import React from 'react'
import { WeatherComponentProps } from '../../interfaces/Weather'
import '../../styles/Weather.scss'

// All credit for this css weather animation goes to Tuan Hoang https://codepen.io/code4food
export const Mist = ({ height, width }: WeatherComponentProps) => {
  return (
    <svg style={{ height: `${height}px`, width: `${width}px` }} viewBox="0 0 220 220">
      <g className="small-cloud">
        <path fill="#43647E" d="M69.054,67.463c-5.109-9.405-15.105-15.409-25.866-15.409c-14.947,0-27.066,10.456-29.036,24.651
	C6.634,78.396,1,85.121,1,93.143c0,9.293,7.561,16.854,16.853,16.854c3.911,0,7.547-1.27,10.472-3.617
	c4.715,3.022,9.6,4.497,14.864,4.497c4.978,0,8.361-0.792,12.25-2.944c3.312,1.927,7.053,2.944,10.932,2.944
	c12.016,0,21.792-9.776,21.792-21.792C88.162,77.976,79.807,68.789,69.054,67.463z"/></g>
      <g className="mist-string">
        <path fill="none" stroke="#43637D" strokeMiterlimit="10" d="M85.263,105.176
		c3.002-1.646,6.403-2.549,9.903-2.549c11.375,0,20.633,9.256,20.633,20.633s-9.258,20.633-20.633,20.633H3.473"/>
        <path fill="none" stroke="#43637D" strokeMiterlimit="10" d="M69.756,113.884
		c1.62-0.888,3.457-1.376,5.345-1.376c6.14,0,11.136,4.996,11.136,11.137c0,6.14-4.996,11.136-11.136,11.136H25.313"/>
        <path fill="none" stroke="#43637D" strokeMiterlimit="10" d="M75.536,180.462
		c2.131,1.166,4.545,1.809,7.027,1.809c8.072,0,14.642-6.569,14.642-14.643s-6.569-14.643-14.642-14.643H18.043"/>
      </g>
    </svg>
  )
}







