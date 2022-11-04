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
  grey: { bat: GreyBat, drop: GreyDrop, button: GreyButton },
  black: { bat: BlackBat, drop: BlackDrop, button: BlackButton },
  white: { bat: WhiteBat, drop: WhiteDrop, button: WhiteButton },
  brown: { bat: BrownBat, drop: BrownDrop, button: BrownButton },
  golden: { bat: GoldenBat, drop: GoldenDrop, button: GoldenButton },
}

const PuppyCard = ({ puppy }) => {
  const avatar = iconTable[puppy.color][puppy.ears]
  return (
    <li>
      <img src={avatar} alt="A cute puppy" />
      <h2>{puppy.name.toUpperCase()}</h2>
      <p>A {puppy.age} year old {puppy.breed}</p>
    </li>
  )
}

export default PuppyCard