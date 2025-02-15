import React, { useEffect, useState } from "react";
import { Html, useProgress } from "@react-three/drei";

const LoaderCanvas = () => {
    const { progress } = useProgress()

    return (

        <Html center>
                {progress}%
        </Html >
    )
}

export default LoaderCanvas