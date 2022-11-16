import PuppyLogo from '../assets/animations/puppy-logo.riv'
import { useRive } from '@rive-app/react-canvas'

const Animation = () => {
  const { RiveComponent } = useRive({
    src: PuppyLogo,
    autoplay: true,
    stateMachines: "State Machine 1",
  })

  return (
    <RiveComponent />
  )
}

export default Animation