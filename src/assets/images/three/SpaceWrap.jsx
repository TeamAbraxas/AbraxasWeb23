import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import '../styles/starwrap.css'
import { Suspense, useRef } from 'react';
import { OrbitControls, PerspectiveCamera } from '@react-three/drei';

const SpaceWrap = () => {
  /**
  * Settings 
  */
  const LINE_WRAP = 5000;

  const OrbitControlsRef = useRef(null)
  useFrame((state) => {
    if(!!OrbitControlsRef.current) {
      console.log(OrbitControlsRef.current);
    }
  }, [OrbitControlsRef.current])
  
  return (
    <Canvas className='webgl'>
      <Suspense fallback={null}> {/** FOR LAZY LOADING THE THREE JS AS IT MAY BE BIG */}
        {/** ALL THREE JS GOES HERE */}
        <>
          {/** Camera */}
          <PerspectiveCamera makeDefault position={[0, 1, 5]} />
          <OrbitControls ref={OrbitControlsRef} />

          {/**Ball */}
          <mesh position={[0, 0.5, 0]}>
            <sphereGeometry args={[0.5, 32, 32]} />
            <meshStandardMaterial color="skyblue" />
          </mesh>

          {/** Floor */}
          <mesh rotation={[(Math.PI/2), 0, 0]}>
            <planeGeometry args={[7, 7]} />
            <meshStandardMaterial color="red" side={THREE.DoubleSide} />
          </mesh>

          {/** Ambient light */}
          <ambientLight args={['#ffffff', 1]} />
        </>
      </Suspense>
    </Canvas>
  )
}

export default SpaceWrap