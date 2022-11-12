import Puppy from '../assets/animations/puppy.riv'
import { useRive } from '@rive-app/react-canvas'

const Animation = () => {
  const { RiveComponent } = useRive({
    src: Puppy,
    autoplay: true,
    stateMachines: "State Machine 1"
  });

  return (
    <RiveComponent />
  )
}

export default Animation