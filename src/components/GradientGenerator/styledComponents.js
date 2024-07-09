// Style your elements here
import styled from 'styled-components'

export const GradientContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-image: ${props =>
    `linear-gradient(to ${props.direction}, ${props.color1}, ${props.color2})`};
  min-height: 100vh;
  justify-content: center;
  padding: 20px;
`

export const MainHeading = styled.h1`
  font-size: 2rem;
  color: white;
  margin-bottom: 20px;
  text-align: center;
`

export const SubHeading = styled.p`
  font-size: 1.5rem;
  color: white;
  margin-bottom: 20px;
  font-weight: bold;
  text-align: center;
`

export const OptionsContainer = styled.ul`
  display: flex;
  margin-bottom: 20px;
  flex-wrap: wrap;
  justify-content: space-around;
`

export const InputFieldsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
`

export const EachInputField = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 10px;
`

export const ColorValue = styled.p`
  font-size: 1rem;
  color: white;
  margin-bottom: 10px;
`

export const ColorPicker = styled.input`
  width: 50px;
  height: 50px;
  border: none;
  cursor: pointer;
`

export const GenerateButton = styled.button`
  background: #00bcd4;
  border: none;
  padding: 10px 20px;
  color: white;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1rem;
  margin-top: 20px;

  &:hover {
    background: #0195a8;
  }
`
