import s from './Projects.module.scss';
import projects from '../../data/projects';
import BaseLayout from '../../layouts/BaseLayout/BaseLayout';
import ProjectCard from './ProjectCard/ProjectCard';

const Projects = () => {
  return (
    <BaseLayout>
      <div className={s.content}>
        <h1 className={s.title}>
          Mis trabajos <strong className={s.purple}>recientes</strong>
        </h1>
        <p className={s.subtitle}>
          Estos son los proyectos que estuve realizando recientemente.
        </p>

        <ul className={s.projects}>
          {projects.map((props) => (
            <ProjectCard key={props.id} {...props} />
          ))}
        </ul>
      </div>
    </BaseLayout>
  );
};

export default Projects;
