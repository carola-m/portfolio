import s from './Footer.module.scss';
import { AiFillGithub , AiFillMail } from 'react-icons/ai';
import {
  FaLinkedinIn,
  FaTelegramPlane,
} from 'react-icons/fa';

const Footer = () => {
  // let date = new Date();
  // let year = date.getFullYear();

  return (
    <div className={s.footer}>
      <div className={s.container}>
        <div className={s.copyright}>
          <h1>Made with ❤️ by Carola</h1>
        </div>

        <div className={s.body}>
          <ul className={s.socialIcons}>
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
            <li>
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
      </div>
    </div>
  );
};

export default Footer;
