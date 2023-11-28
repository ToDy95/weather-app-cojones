import React from 'react'
import { ThreeCircles } from 'react-loader-spinner'
const Spinner = ({ height, width }) => {
  return (
    <ThreeCircles
      height={height}
      width={width}
      color="#090979e8"
      wrapperStyle={{}}
      wrapperClass=""
      visible={true}
      ariaLabel="three-circles-rotating"
      outerCircleColor=""
      innerCircleColor=""
      middleCircleColor=""
    />
  )
}

export default Spinner
