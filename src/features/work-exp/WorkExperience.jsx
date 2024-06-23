import Project from './Project';
import Heading from '../../ui/Heading';
import Container from '../../ui/Container';

function WorkExperience({ company, position, project, description }) {
  return (
    <section>
      <div>
        <h1>{company}</h1>
        <h2>{position}</h2>
        <p>{description}</p>
      </div>
      <div className='grid grid--3-cols'>
        {project.map((project, index) => (
          <Project key={index} project={project} />
        ))}
      </div>
    </section>
  );
}

export default WorkExperience;
