// Write your code here

import {Chrono} from 'react-chrono'

import CourseTimelineCard from '../CourseTimelineCard'
import ProjectTimelineCard from '../ProjectTimelineCard'

import './index.css'

const TimelineView = props => {
  const {timelineItemsList} = props

  const renderTimelineCard = card => {
    if (card.categoryId === 'COURSE') {
      return <CourseTimelineCard courseCard={card} key={card.id} />
    }
    return <ProjectTimelineCard projectCard={card} key={card.id} />
  }

  return (
    <div className="my-journey-container">
      <h1 className="my-journey">
        MY JOURNEY OF <br />
        <span className="ccbp">CCBP 4.0</span>
      </h1>

      <div className="chrono-container">
        <Chrono
          items={timelineItemsList}
          mode="VERTICAL_ALTERNATING"
          theme={{
            primary: '#0967d2',
            secondary: '#ffffff',
          }}
        >
          {timelineItemsList.map(eachCard => renderTimelineCard(eachCard))}
        </Chrono>
      </div>
    </div>
  )
}
export default TimelineView
