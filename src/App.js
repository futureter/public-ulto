import { Fragment } from 'react'

import Header from './components/Header/Header'
import GroupTitle from './components/GroupTitle/GroupTitle'
import WeekWrapper from './components/WeekWrapper/WeekWrapper'

function App() {
  return (
    <Fragment>
      <Header />
      <GroupTitle />
      <WeekWrapper />
    </Fragment>
  )
}

export default App
