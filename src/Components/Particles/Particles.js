import { useCallback } from 'react';
import Particles from 'react-tsparticles';
import { loadSlim } from 'tsparticles-slim';
import starsOption from './starsOptions';

const ParticlesComponent = () => {
  const particlesInit = useCallback(engine => {
    loadSlim(engine);
  }, []);

  return (
    <Particles
      className='particles'
      init={particlesInit}
      options={starsOption}
    />
  );
};

export default ParticlesComponent;
