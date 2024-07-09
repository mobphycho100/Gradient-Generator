import {ListItem, DirectionButton} from './styledComponents'

const GradientDirectionItem = ({data, isActive, changeDirection}) => {
  const {directionId, displayText} = data

  const onClickDirectionButton = () => {
    changeDirection(directionId)
  }

  return (
    <ListItem>
      <DirectionButton onClick={onClickDirectionButton} isActive={isActive}>
        {displayText}
      </DirectionButton>
    </ListItem>
  )
}

export default GradientDirectionItem
