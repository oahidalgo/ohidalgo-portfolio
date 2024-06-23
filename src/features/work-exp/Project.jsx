//import TechTag from './TechTag';

function Project({ project }) {
  const { code, name, techStack, summary, imgName } = project;
  const imagePath = `/img/${imgName}`;

  return (
    <div className='project'>
      <img src={imagePath} alt={name} className='project-img' />
      <div className='project-content'>
        <div className='project-tags'>
          {/* {techStack.map((tech, index) => (
            <TechTag key={index} tech={tech} />
          ))} */}
        </div>
        <p className='project-title'>{name}</p>
        <p className='project-attr'>{summary}</p>
        <a href='#' className='btn btn--full'>
          Learn more &rarr;
        </a>
      </div>
    </div>
  );
}

export default Project;
