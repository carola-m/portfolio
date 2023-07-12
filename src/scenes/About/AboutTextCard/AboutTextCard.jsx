import s from './AboutTextCard.module.scss';

const AboutTextCard = () => {
  return (
    <div className={s.card}>
      <p style={{ textAlign: 'justify' }}>
        Bienvenid@, soy{' '}Carolina Martinez y vivo en Mallorca, España.
        <br />
        Me encuentro cursando el último año de la carrera Analista {' '}
        <br />
        Programador y recientemente finalicé el bootcamp de Full  
        <br />
        Stack Developer en la Escuela Upgrade Hub.
      </p>
    </div>
  );
};

export default AboutTextCard;
