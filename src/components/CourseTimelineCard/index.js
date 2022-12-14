// Write your code here

import {AiFillClockCircle} from 'react-icons/ai'

import './index.css'

const CourseTimelineCard = props => {
  const {courseCard} = props
  const {courseTitle, description, duration} = courseCard
  return (
    <div className="course-container">
      <div className="duration-container">
        <h1 className="course-main-title">{courseTitle}</h1>
        <div className="icon-container">
          <AiFillClockCircle className="clock-icon" />
          <p className="course-duration">{duration}</p>
        </div>
      </div>
      <p className="course-desc">{description}</p>
      <div className="course-u-list">
        {courseCard.tagsList.map(tags => (
          <p className="course-list" key={tags.id}>
            {tags.name}
          </p>
        ))}
      </div>
    </div>
  )
}
export default CourseTimelineCard
