import Puppy from '../assets/animations/puppy-animation.riv'
import { useRive, Layout, Fit, Alignment } from '@rive-app/react-canvas'

const Animation = () => {
  const { RiveComponent } = useRive({
    src: Puppy,
    autoplay: true,
    stateMachines: "State Machine 1",
    layout: new Layout({
      fit: Fit.Cover,
      alignment: Alignment.TopCenter,
    }),
  })

  return (
    <RiveComponent />
  )
}

export default Animation