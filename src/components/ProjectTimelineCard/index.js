// Write your code here
import {AiFillCalendar} from 'react-icons/ai'

import './index.css'

const ProjectTimelineCard = props => {
  const {projectCard} = props
  const {
    projectTitle,
    duration,
    description,
    projectUrl,
    imageUrl,
  } = projectCard
  return (
    <div>
      <img src={imageUrl} alt="project" className="project-img" />
      <div className="project-container">
        <h1 className="project-title">{projectTitle}</h1>
        <div className="calender-icon-container">
          <AiFillCalendar className="calender-icon" />
          <p className="project-duration">{duration}</p>
        </div>
      </div>
      <p className="project-desc">{description}</p>
      <a href={projectUrl} target="__blank" className="project-link">
        Visit
      </a>
    </div>
  )
}
export default ProjectTimelineCard
