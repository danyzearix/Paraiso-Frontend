import React, { Fragment } from 'react';
import SliderComponent from '../layout/SliderComponent/SliderComponent';
import Countdown from '../layout/Countdown/Countdown';
import Welcome from "../layout/Welcome/Welcome"
import withScrollAnimation from '../hoc/withScrollAnimation'; // Asegúrate de importar el HOC

const AnimatedSlider = withScrollAnimation(SliderComponent);
const AnimatedCountdown = withScrollAnimation(Countdown);

function Home({slides}) {
  return (
    <Fragment>
        <AnimatedSlider slides={slides}/>
        <AnimatedCountdown />
        <Welcome/>
    </Fragment>
  )
}

export default Home;
