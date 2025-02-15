import React, { useEffect, useRef, useState } from "react";


function LineStuffCanvas() {
    const [path, setPath] = useState({ x: 720, y: 80 });

    const [pathOver, setPathOver] = useState(false)
    const svgRef = useRef()


    const getPath = (event) => {
        const svgRect = svgRef.current.getBoundingClientRect();
        const y = event.clientY - svgRect.top;
        const x = event.clientX - svgRect.left;
        handleMouseMove({ clientX: x, clientY: y })
    }

    const handleMouseMove = (event) => {
        const y = event.clientY;
        const x = event.clientX;
        setPath({ x: x, y: y })
    };

    const resetPath = () => {
        setPath({ x: 720, y: 80 })
        setPathOver(!pathOver)
    }

    const [trigger, setTrigger] = useState(false)

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.pageYOffset > 250) {
                setTrigger(!trigger)
            }
        });

    }, []);


    return (
        <div className="absolute w-full z-20 bottom-0  " >
            <svg ref={svgRef} viewBox="0 0 1440 160" className="" >

                <path stroke="white" fill="none" d={`M 0 80 Q 720 ${path.y}, 1440 80`}
                    className={pathOver ? 'animate-path' : ''}
                />
                <path stroke="white" fill="none" d={`M 0 60 Q 720 ${path.y - 20}, 1440 60`}
                    className={pathOver ? 'animate-path2' : ''}
                />
            </svg>
            <svg viewBox="0 0 1440 700" className="absolute top-0" >
                <path stroke="white" fill="none" d={`M 0 100 Q 720 ${path.y + 20}, 1440 100`}
                    className={trigger ? 'animate-path4' : ''}
                />
                <rect x="0" y="0" width="1440" height="160" fillOpacity="0"
                    onMouseMove={getPath}
                    onMouseLeave={resetPath} />
            </svg>

        </div>

    );
}

export default LineStuffCanvas;