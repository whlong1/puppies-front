import GreyBat from '../assets/icons/greyBat.svg'
import GreyDrop from '../assets/icons/greyDrop.svg'
import GreyButton from '../assets/icons/greyButton.svg'
import BlackBat from '../assets/icons/blackBat.svg'
import BlackDrop from '../assets/icons/blackDrop.svg'
import BlackButton from '../assets/icons/blackButton.svg'
import WhiteBat from '../assets/icons/whiteBat.svg'
import WhiteDrop from '../assets/icons/whiteDrop.svg'
import WhiteButton from '../assets/icons/whiteButton.svg'
import BrownBat from '../assets/icons/brownBat.svg'
import BrownDrop from '../assets/icons/brownDrop.svg'
import BrownButton from '../assets/icons/brownButton.svg'
import GoldenBat from '../assets/icons/goldenBat.svg'
import GoldenDrop from '../assets/icons/goldenDrop.svg'
import GoldenButton from '../assets/icons/goldenButton.svg'

const iconTable = {
  GreyBat,
  GreyDrop,
  GreyButton,
  BlackBat,
  BlackDrop,
  BlackButton,
  WhiteBat,
  WhiteDrop,
  WhiteButton,
  BrownBat,
  BrownDrop,
  BrownButton,
  GoldenBat,
  GoldenDrop,
  GoldenButton,
}

const PuppyIcon = ({ puppy }) => {
  const puppyImg = iconTable[puppy.color + puppy.ears]
  return (
    <img src={puppyImg} alt="A cute puppy" />
  )
}

export default PuppyIcon