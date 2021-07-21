import React, { useState } from 'react';

const JobItem = ({ job, addFilter }) => {
  const addFilterHandler = (data) => {
    addFilter(data);
  };

  return (
    <li className={job.featured ? 'job job--highlight' : 'job'}>
      <img src={job.logo} className='job__image' alt={`${job.company} logo`} />
      <div className='job__info'>
        <div className='flex-row'>
          <h2 className='job__company'>{job.company}</h2>
          {job.new ? <span className='job__new'>New!</span> : null}
          {job.featured ? (
            <span className='job__featured'>Featured</span>
          ) : null}
        </div>
        <h3 className='job__title'>{job.position}</h3>
        <div className='job__details'>
          <ul className='flex-row'>
            <li>{job.postedAt}</li>
            <li>{job.contract}</li>
            <li>{job.location}</li>
          </ul>
        </div>
      </div>
      <hr className='horizontal-rule' />
      <div className='job__skills'>
        <ul className='flex-row'>
          <li onClick={() => addFilter(job.role)}>{job.role}</li>
          <li onClick={() => addFilter(job.level)}>{job.level}</li>
          {job.languages.map((lang) => (
            <li onClick={() => addFilter(lang)}>{lang}</li>
          ))}
          {job.tools.map((tool) => (
            <li onClick={() => addFilterHandler(tool)}>{tool}</li>
          ))}
        </ul>
      </div>
    </li>
  );
};

export default JobItem;
