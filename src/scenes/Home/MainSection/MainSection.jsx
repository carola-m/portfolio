import s from './MainSection.module.scss';
import dev from '../../../assets/hH5G05.gif';
import Typewriter from '../../../components/UIElements/Typewriter/Typewriter';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const MainSection = () => {
  return (
    <section className={s.content}>
      <div className={s.header}>
        <h2 style={{ paddingBottom: 15 }} className={s.title}>
          Hola! <span className={s.wave}>👋🏻</span> Soy 
        </h2>

        <h1 className={s.mainTitle}>
          <strong className={s.mainName}> Carolina Martinez</strong>
        </h1>

        <div style={{ paddingTop: 50 }}>
          <Typewriter
            strings={[
              'Full Stack Developer',
              'Full',
              'Stack',
              'Developer'
            ]}
            wrapperClassName={s.typewriterWrapper}
            cursorClassName={s.typewriterCursor}
          />
        </div>
      </div>

      <LazyLoadImage
        alt="dev"
        effect="blur"
        src={dev}
        wrapperClassName={s.homeMainIcon}
        width="600"
        height="200"
      />
    </section>
  );
};

export default MainSection;
