import { useState } from 'react';

import './css/main.css';
import JobItem from './components/JobItem';
import { data } from './data';

function App() {
  const [filters, setFilters] = useState([]);
  const jobs = data;
  const addFilter = (data) => {
    if (filters.some((f) => f === data)) {
      return;
    } else {
      setFilters([...filters, data]);
    }
  };
  const removeFilter = (data) => {
    setFilters([...filters.filter((f) => f !== data)]);
  };

  return (
    <>
      <header className='header'></header>
      <main>
        {filters.length > 0 && (
          <section className='filterbox'>
            <div className='job__skills filterlist '>
              <ul className='flex-row'>
                {filters.map((filter) => (
                  <li onClick={() => removeFilter(filter)}>{filter}</li>
                ))}
              </ul>
            </div>
          </section>
        )}
        <ul className='listings'>
          {filters.length
            ? jobs
                .filter((job) => {
                  const reducedDetails = [
                    ...job.languages,
                    ...job.tools,
                    job.level,
                    job.role,
                  ];
                  return filters.every((filter) =>
                    reducedDetails.some((detail) => detail === filter)
                  );
                })
                .map((job) => <JobItem addFilter={addFilter} job={job} />)
            : jobs.map((job) => <JobItem addFilter={addFilter} job={job} />)}
        </ul>
      </main>
      <div className='attribution'>
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
