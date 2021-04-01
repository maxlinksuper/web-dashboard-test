import React from 'react'
import styled from 'styled-components'
const StyledContainer = styled.div`
  border: ${(props) => `1px solid black`};
  padding: 25px 12px 18px;
  background: ${(props) => `linear-gradient(
    45deg, gray, gold
  )`};
`
const Title = styled.h2`
  color: #fff;
  font-weight: 300;
  @media (max-width: 500px) {
    font-size: 1rem;
  }
`
const Date = styled.div`
  color: #ccc;
  font-weight: 300;
  margin: 6px 0;
  @media (max-width: 500px) {
    font-size: 0.8rem;
  }
`
const Description = styled.p`
  color: #fff;
  font-weight: 300;
  @media (max-width: 500px) {
    font-size: 0.75rem;
  }
`
const Actions = styled.div`
  color: #333;
  display: flex;
  align-items: center;
  svg {
    transform: translateY(2px);
    margin-right: 5px;
  }
  @media (max-width: 500px) {
    flex-direction: column;
    & button {
      width: 100%;
      margin-bottom: 4px;
      font-size: 0.65rem;
    }
  }
`
const Action = styled.button`
  margin: 0 5px;
  padding: 8px 14px;
  background: rgba(155, 155, 155, 0.2);
  color: #fff;
  cursor: pointer;
  border: 1px solid #fff;
  outline: 0;
  font-weight: 300;
  :hover {
    opacity: 0.8;
  }
  :active {
    background: black;
  }
`
const StyledPhoto = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border: ${(props) => `1px solid green`};
`

const Card = ({
  title,
  date,
  description,
  comments,
  likes,
  views,
  actions,
  imgsource,
}) => (
  <StyledContainer>
    <StyledPhoto src={imgsource} />
    <Title>{title}</Title>
    {/* <Date>{date}</Date> */}
    {/* <Description>{description}</Description> */}
    {/* <Actions>
      {actions.map(({ label }) => (
        <Action>{label}</Action>
      ))}
    </Actions> */}
  </StyledContainer>
)
export default Card