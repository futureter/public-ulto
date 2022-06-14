import styled from 'styled-components'

import cardStyle from '../../styles/cardStyle'

function ClassCard({ classTitle, classTime, classroom, teacher, classType }) {
  const Card = styled(cardStyle)`
    padding: 1.2rem 1rem;
    margin-bottom: 1.8rem;
  `
  const InformationContainer = styled.div`
    display: flex;
    justify-content: space-between;
  `
  const TitleContainer = styled(InformationContainer)``
  const InformationText = styled.p`
    font-family: 'PT Sans';
    font-weight: 400;
    font-size: 1rem;
    color: #acacac;
    margin-top: 0.2rem;
  `
  const BoldInformationText = styled.p`
    font-family: 'Ubuntu';
    font-weight: 500;
    font-size: 1rem;
    margin-bottom: 0.875rem;
  `

  return (
    <Card>
      <TitleContainer>
        <BoldInformationText>
          {classTitle}
        </BoldInformationText>
        <BoldInformationText>
          {classTime.start} - {classTime.end}
        </BoldInformationText>
      </TitleContainer>
      <InformationContainer>
        <InformationText>
          Аудитория
        </InformationText>
        <InformationText>
          {classroom}
        </InformationText>
      </InformationContainer>
      <InformationContainer>
        <InformationText>
          Преподаватель
        </InformationText>
        <InformationText>
          {teacher}
        </InformationText>
      </InformationContainer>
      <InformationContainer>
        <InformationText>
          Тип занятия
        </InformationText>
        <InformationText>
          {classType}
        </InformationText>
      </InformationContainer>
    </Card>
  )
}

export default ClassCard
