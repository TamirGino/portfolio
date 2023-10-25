import { useCallback } from "react";
import Particles from "react-particles";
import { loadSlim } from "tsparticles-slim"; 
import {options} from './particlesOptions'

const ParticlesBg = () => {
    const particlesInit = useCallback(async engine => {
        await loadSlim(engine);
    }, []);

    return (
        <Particles
            id="tsparticles"
            init={particlesInit}
            options={
                options
            }
        />
    );
};

export default ParticlesBg 