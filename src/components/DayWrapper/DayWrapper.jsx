import { useState, Fragment } from 'react'
import styled from 'styled-components'

import ClassCard from '../ClassCard/ClassCard'

function DayWrapper({ dayOfWeek }) {
  const [isVisible, setVisibility] = useState(true)

  const DayContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    padding-top: .5rem;

    &:first-child {
      margin-top: 0;
    }
  `
  const DayHeader = styled.button`
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 2rem;

    &:hover {
      cursor: pointer;
    }
  `
  const DayTitle = styled.h2`
    font-size: 1.5rem;
    font-family: 'Ubuntu';
    font-weight: 500;
  `
  const ExpandButtonIcon = styled.img.attrs({
    src: process.env.PUBLIC_URL + '/static/images/expand.svg',
  })`
    width: 1rem;
    height: 1rem;
  `
  const AddNewButton = styled.button`
    width: 6rem;
    align-self: center;
    transition: color 0.5s ease-out;

    &:hover {
      cursor: pointer;
      color: #777676;
    }
  `
  const AddNewIcon = styled.img.attrs({
    src: process.env.PUBLIC_URL + '/static/images/add.svg',
  })`
    width: 100%;
  `

  return (
    <DayContainer>
      <DayHeader onClick={event => setVisibility(!isVisible)}>
        <DayTitle>{dayOfWeek}</DayTitle>
        <ExpandButtonIcon />
      </DayHeader>
      {isVisible && (
        <Fragment>
          <ClassCard
            classTitle="ИТиП"
            classTime={{
              start: '08:30',
              end: '10:00',
            }}
            classroom="415"
            teacher="Куликова С. А."
            classType="практическое (ПЗ)"
          />
          <ClassCard
            classTitle="История"
            classTime={{
              start: '10:10',
              end: '11:40',
            }}
            classroom="228"
            teacher="Иванько Г. В."
            classType="лекция (Л)"
          />
          <AddNewButton>
            <AddNewIcon />
          </AddNewButton>
        </Fragment>
      )}
    </DayContainer>
  )
}

export default DayWrapper
