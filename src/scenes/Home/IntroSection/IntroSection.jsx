import s from './IntroSection.module.scss';
import { AiFillGithub, AiFillMail } from 'react-icons/ai';
import {
  FaLinkedinIn,

} from 'react-icons/fa';


const IntroSection = () => {
  return (
    <section className={s.content}>
      <div className={s.introSocial}>
        <h1>
          Contáctame<span className={s.purple}>. </span>
        </h1>
        <ul className={s.socialLinks}>
          <li className={s.socialLink}>
            <a
              href="https://github.com/carola-m"
              target="_blank"
              rel="noreferrer"
              className={s.socialIcon}
              aria-label="github"
            >
              <AiFillGithub />
            </a>
          </li>
          <li className={s.socialLink}>
            <a
              href="mailto:caromartinez7041@gmail.com"
              target="_blank"
              rel="noreferrer"
              className={s.socialIcon}
              aria-label="mail"
            >
              <AiFillMail />
            </a>
          </li>
          <li className={s.socialLink}>
            <a
              href="http://linkedin.com/in/carolina-martinez-2b74b1214"
              target="_blank"
              rel="noreferrer"
              className={s.socialIcon}
              aria-label="linkedin"
            >
              <FaLinkedinIn />
            </a>
          </li>
          
        </ul>
      </div>
    </section>
  );
};

export default IntroSection;
