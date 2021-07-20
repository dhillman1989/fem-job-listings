import './css/main.css';

import { data } from './data';

function App() {
  const jobs = data;
  return (
    <>
      <div class='header'></div>
      <ul class='listings'>
        {jobs &&
          jobs.map((job) => {
            return (
              <li class={job.featured ? 'job job--highlight' : 'job'}>
                <img src={job.logo} className='job__image' />
                <div class='job__info'>
                  <div class='flex-row'>
                    <h2 class='job__company'>{job.company}</h2>
                    {job.new ? <span class='job__new'>New!</span> : null}
                    {job.featured ? (
                      <span class='job__featured'>Featured</span>
                    ) : null}
                  </div>
                  <h3 class='job__title'>{job.position}</h3>
                  <div class='job__details'>
                    <ul class='flex-row'>
                      <li>{job.postedAt}</li>
                      <li>{job.contract}</li>
                      <li>{job.location}</li>
                    </ul>
                  </div>
                </div>
                <hr class='horizontal-rule' />
                <div class='job__skills'>
                  <ul class='flex-row'>
                    {job.languages.map((lang) => (
                      <li>{lang}</li>
                    ))}
                    {job.tools.map((tool) => (
                      <li>{tool}</li>
                    ))}
                  </ul>
                </div>
              </li>
            );
          })}
      </ul>

      <div class='attribution'>
        Challenge by
        <a href='https://www.frontendmentor.io?ref=challenge' target='_blank'>
          Frontend Mentor
        </a>
        . Coded by <a href='http://davehillman.co.uk'>David Hillman</a>.
      </div>
    </>
  );
}

export default App;
