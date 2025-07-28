import React from 'react'
import './experience.css'
import { experience } from './data'

const Experience = () => {
  const renderDescription = (text) => {
    if (!text) return null;
    
    // Check if the text contains a link
    const linkMatch = text.match(/(https?:\/\/[^\s]+)/);
    if (linkMatch) {
      const link = linkMatch[1];
      const beforeLink = text.substring(0, text.indexOf(link));
      const afterLink = text.substring(text.indexOf(link) + link.length);
      
      return (
        <p>
          {beforeLink}
          <a href={link} target="_blank" rel="noopener noreferrer" className="project-link">
            {link}
          </a>
          {afterLink}
        </p>
      );
    }
    
    return <p>{text}</p>;
  };

  return (
    <section id='experience' className='experience'>
      <div className='d-flex justify-content-center my-5'>
        <h1>experience</h1>
      </div>
      <div className='container experience-wrapper'>
        {experience.map((item, key) => {
          if (item.id % 2 != 1) {
            return (
              <div className='timeline-block timeline-block-right' key={key}>
                <div className='marker'></div>
                <div className='timeline-content'>
                  <h3>{item.title}</h3>
                  <p className='role-duration'>{item.description}</p>
                  {renderDescription(item.description2)}
                  {renderDescription(item.description3)}
                  {renderDescription(item.description4)}
                  {renderDescription(item.description5)}
                  {renderDescription(item.description6)}
                </div>
              </div>
            )
          } else {
            return (
              <div className='timeline-block timeline-block-left' key={key}>
                <div className='marker'></div>
                <div className='timeline-content'>
                  <h3>{item.title}</h3>
                  <p className='role-duration'>{item.description}</p>
                  {renderDescription(item.description2)}
                  {renderDescription(item.description3)}
                  {renderDescription(item.description4)}
                  {renderDescription(item.description5)}
                  {renderDescription(item.description6)}
                </div>
              </div>
            )
          }
        })}
      </div>
    </section>
  )
}

export default Experience
