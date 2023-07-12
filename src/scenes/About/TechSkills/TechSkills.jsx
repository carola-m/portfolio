import s from './TechSkills.module.scss';
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiGit,
  DiSass,
  DiAngularSimple,
  DiPhp,
  DiSymfony,
  DiMysql,
} from 'react-icons/di';
import {
  SiTypescript,
  SiHtml5,
  SiCss3
 
} from 'react-icons/si';

const TechSkills = () => {
  return (
    <ul className={s.container}>
    <li className={s.techIcon}>
        <SiHtml5 />
      </li>
      <li className={s.techIcon}>
        <SiCss3/>
      </li>
      <li className={s.techIcon}>
        <DiSass />
      </li>
      <li className={s.techIcon}>
        <DiJavascript1 />
      </li>
      <li className={s.techIcon}>
        <DiMongodb />
      </li>
      <li className={s.techIcon}>
        <DiNodejs />
      </li>
      <li className={s.techIcon}>
        <SiTypescript />
      </li>
      <li className={s.techIcon}>
        <DiAngularSimple />
      </li>
      <li className={s.techIcon}>
        <DiReact />
      </li>
      <li className={s.techIcon}>
        <DiMysql/>
      </li>
      <li className={s.techIcon}>
        <DiPhp />
      </li>
      <li className={s.techIcon}>
        <DiSymfony />
      </li>
      <li className={s.techIcon}>
        <DiGit />
      </li>
    
    </ul>
  );
};

export default TechSkills;
