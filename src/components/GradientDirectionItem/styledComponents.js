// Style your elements here
import styled from 'styled-components'

export const ListItem = styled.li`
  list-style-type: none;
`

export const DirectionButton = styled.button`
  opacity: ${props => (props.isActive ? 1 : 0.5)};
  border: none;
  padding: 10px 20px;
  margin: 5px;
  border-radius: 5px;
  cursor: pointer;
  width: 100px;

  &:hover {
    opacity: 1;
  }
`
