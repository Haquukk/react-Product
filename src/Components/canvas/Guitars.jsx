import React, { Suspense, useEffect, useRef, useState, forwardRef } from "react"
import { Canvas, useFrame } from '@react-three/fiber'
import { Environment, Float, Preload, PresentationControls, QuadraticBezierLine, useGLTF, OrbitControls, Text } from "@react-three/drei";
import { Guitar } from "../Guitar";
import { easing } from "maath";
import * as THREE from 'three'

import LoaderCanvas from "./Loader";

function Env() {
    useFrame((state, delta) => {
        // Animate the environment as well as the camera

        easing.damp3(state.camera.position, [Math.sin(state.pointer.x / 4) * 9, 1.25 + state.pointer.y, Math.cos(state.pointer.x / 4) * 9], 0.5, delta)
        state.camera.lookAt(0, 0, 0)

    })
    // Runtime environments can be too slow on some systems, better safe than sorry with PerfMon
    return (
        <Environment preset="city" resolution={256} background blur={0.8}>

        </Environment>
    )
}

const Texts = () => {

    return (
        <mesh
            position={[0, -0.6, -4]}
            rotation={[-Math.PI / 2.2, 0.2, 1]}
            castShadow
            receiveShadow
        >
            <Text
                font="./FontFam_src/mytext.ttf"
                fontSize={3.5}
            >
                DO & MI
            </Text>
        </mesh>
    )
}

const Amp = forwardRef(({ ...props }, ref) => {
    const { nodes, materials } = useGLTF('./Amp_src/scene.gltf')

    return (
        <mesh>
            <group
                ref={ref}
                scale={6}
                position={[-3, 0.85, -3.2]}
                rotation={[-Math.PI / 2.2, 0.2, 1]} dispose={null}
            >
                <mesh {...props} castShadow geometry={nodes.PojacaloKutija001__0.geometry} material={materials['Scene_-_Root']} />
                <mesh castShadow geometry={nodes.PojacaloKutija001__0001.geometry} material={materials['Scene_-_Root']} />
            </group>
        </mesh>
    )
})


function Cable({ start, end, v1 = new THREE.Vector3(), v2 = new THREE.Vector3() }) {
    const ref = useRef()

    useFrame(() => ref.current.setPoints(start.current.getWorldPosition(v1), end.current.getWorldPosition(v2)), [])
    return <QuadraticBezierLine ref={ref} lineWidth={3} color="aqua" />
}

const GuitarsCanvas = () => {
    const [trigger, setTrigger] = useState(false)
    const [trigger2, setTrigger2] = useState(null)

    const guitars = useRef()
    const amp = useRef()


    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.pageYOffset > 700) {
                setTrigger(true)
                setTimeout(() => setTrigger2(true), 2200)
            }
        });

    }, []);

    return (
        <Canvas
            frameloop={trigger ? 'demand' : 'always'}
            shadows
            camera={{ position: [10, 1, 10], fov: 35 }}
            gl={{ preserveDrawingBuffer: true }}
        >

            <spotLight
                position={[10, 20, 40]}
                angle={0.2}
                penumbra={1}
                intensity={2}
                castShadow
                shadow-mapSize={1024} />

            <Suspense fallback={<LoaderCanvas />}>
                {/* <OrbitControls /> */}
                <Texts />
                <Cable start={guitars} end={amp} />
                <Amp >
                    <object3D position={[0.1, -0.06, 0.1]} ref={amp} />
                </Amp>

                <group
                    scale={trigger2 ? 0 : 0.8}
                    position={[1.8, 0.5, 0]}
                    rotation={[-0.5, 0.5, 1.45]}
                >
                    <PresentationControls
                        config={{ mass: 2, tension: 500 }}
                        snap={{ mass: 4, tension: 1500 }}
                        rotation={[0, -0.2, 0]}
                        polar={[-Math.PI / 3, Math.PI / 3]}
                        azimuth={[-Math.PI / 1.4, Math.PI / 2]}
                    >
                        <Float rotationIntensity={3} floatIntensity={2} speed={1.5}>
                            <Guitar  >
                                <object3D position={[0, -2, 0]} ref={guitars} />
                            </Guitar>
                        </Float>

                    </PresentationControls>
                </group>

            </Suspense>

            <mesh
                position={[-3, -0.01, -4.5]}
                rotation={[-Math.PI / 2.2, 0.2, 1.7]}
                receiveShadow
            >
                <planeGeometry args={[15, 15, 1, 1]} />
                <shadowMaterial transparent opacity={0.5} />
            </mesh>

            {/* <Env /> */}

            <Preload all />
        </Canvas >
    );
}

export default GuitarsCanvas;