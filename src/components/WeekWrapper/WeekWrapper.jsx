import styled from 'styled-components'

import DayWrapper from '../DayWrapper/DayWrapper'

function WeekWrapper() {
  const WeekContainer = styled.div`
    display: flex;
    margin: 2rem var(--global-offset);
    flex-wrap: wrap;
  `

  return (
    <WeekContainer>
      <DayWrapper dayOfWeek="Понедельник" />
      <DayWrapper dayOfWeek="Вторник" />
      <DayWrapper dayOfWeek="Среда" />
      <DayWrapper dayOfWeek="Четверг" />
      <DayWrapper dayOfWeek="Пятница" />
      <DayWrapper dayOfWeek="Суббота" />
      <DayWrapper dayOfWeek="Воскресенье" />
    </WeekContainer>
  )
}

export default WeekWrapper
