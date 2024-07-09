import {Component} from 'react'

import {
  GradientContainer,
  MainHeading,
  SubHeading,
  OptionsContainer,
  InputFieldsContainer,
  EachInputField,
  ColorValue,
  ColorPicker,
  GenerateButton,
} from './styledComponents'

import GradientDirectionItem from '../GradientDirectionItem'

const gradientDirectionsList = [
  {directionId: 'TOP', value: 'top', displayText: 'Top'},
  {directionId: 'BOTTOM', value: 'bottom', displayText: 'Bottom'},
  {directionId: 'RIGHT', value: 'right', displayText: 'Right'},
  {directionId: 'LEFT', value: 'left', displayText: 'Left'},
]

class GradientGenerator extends Component {
  state = {
    inputColor1: '#8ae323',
    inputColor2: '#014f7b',
    selectedDirection: gradientDirectionsList[0].directionId,
    color1: '#8ae323',
    color2: '#014f7b',
    currentDirection: 'top',
  }

  onChangeDirection = directionId => {
    this.setState({selectedDirection: directionId})
  }

  onGenerateGradient = () => {
    const {inputColor1, inputColor2, selectedDirection} = this.state
    this.setState({
      color1: inputColor1,
      color2: inputColor2,
      currentDirection: selectedDirection.toLowerCase(),
    })
  }

  render() {
    const {
      inputColor1,
      inputColor2,
      selectedDirection,
      color1,
      color2,
      currentDirection,
    } = this.state

    return (
      <GradientContainer
        data-testid="gradientGenerator"
        color1={color1}
        color2={color2}
        direction={currentDirection}
      >
        <MainHeading>Generate a CSS Color Gradient</MainHeading>

        <SubHeading>Choose Direction</SubHeading>

        <OptionsContainer>
          {gradientDirectionsList.map(each => (
            <GradientDirectionItem
              key={each.directionId}
              data={each}
              isActive={each.directionId === selectedDirection}
              changeDirection={this.onChangeDirection}
            />
          ))}
        </OptionsContainer>

        <SubHeading>Pick the Colors</SubHeading>

        <InputFieldsContainer>
          <EachInputField>
            <ColorValue>{inputColor1}</ColorValue>
            <ColorPicker
              type="color"
              value={inputColor1}
              onChange={event =>
                this.setState({inputColor1: event.target.value})
              }
            />
          </EachInputField>

          <EachInputField>
            <ColorValue>{inputColor2}</ColorValue>
            <ColorPicker
              type="color"
              value={inputColor2}
              onChange={event =>
                this.setState({inputColor2: event.target.value})
              }
            />
          </EachInputField>
        </InputFieldsContainer>

        <GenerateButton type="button" onClick={this.onGenerateGradient}>
          Generate
        </GenerateButton>
      </GradientContainer>
    )
  }
}

export default GradientGenerator
