import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { Lightformer, Preload } from '@react-three/drei'
import { Suspense, useRef, useState, useEffect } from 'react'
import { Physics, RigidBody, CuboidCollider } from '@react-three/rapier'
import { Vector3 } from 'three'
import { Guitar } from '../Guitar'



const MovingSpot = ({ vec = new Vector3(), ...props }) => {
    const ref = useRef()
    const viewport = useThree((state) => state.viewport)

    useFrame((state) => {
        ref.current.target.position.lerp(vec.set((state.mouse.x * viewport.width) / 2, (state.mouse.y * viewport.height) / 2, 0), 0.02)
        ref.current.target.updateMatrixWorld()
    })

    return (
        <>
            <spotLight
                position={[5, 10, 5]}
                ref={ref}
                angle={0.2}
                penumbra={1}
                intensity={5}
                castShadow
                shadow-mapSize={1024}
                {...props}
            />
        </>
    )
}


const Guitar2Canvas = () => {
    const [trigger, setTrigger] = useState(false)

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.pageYOffset > 750) {
                setTimeout(() => setTrigger(true), 2200)
            } else if (window.pageYOffset > 770) {
                setTrigger(false)
            }
        });

    }, []);


    return (
        <>
            <Canvas
                frameloop={trigger ? 'always' : 'never'}
                shadows
                camera={{ position: [10, 4, 5], fov: 30 }}
                gl={{ preserveDrawingBuffer: true }}
            >
                {/* <color attach="background" args={['#052222']} /> */}
                <fog attach="fog" args={['#052222', 5, 80]} />

                <ambientLight intensity={0.011} />
                <MovingSpot
                />

                <Suspense fallback={null}>
                    {/* <OrbitControls /> */}
                    <Physics gravity={[0, -7, 0.8]}>
                        <group
                            position={[0, 5, 0]}
                            rotation={[-0.5, 0.5, 1.45]}
                        >
                            <RigidBody>
                                <Guitar />
                            </RigidBody>
                        </group>

                        <CuboidCollider
                            position={[0, -2, 0]}
                            rotation={[0, 0, 0]}

                            restitution={0.3} args={[1000, 0, 1000]} />
                    </Physics>

                </Suspense>
                <mesh
                    position={[-0.5, -2.2, 0]}
                    rotation={[-1.55, 0, 0]}
                    receiveShadow
                >
                    <planeGeometry args={[105, 90, 1, 1]} />
                    <meshPhongMaterial />
                </mesh>
                <Preload all />

            </Canvas>

        </>
    )
}

export default Guitar2Canvas