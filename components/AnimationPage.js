
import { LazyMotion, domAnimation,m } from "framer-motion";

const pageMotionProps = {
    initial: {opacity:0},
    animate:{
        opacity:1,
        transition: {
            duration: 0.6,
            ease:[0.83,0,0.17,1]
        }
    },
    exit:{
        opacity:0,
        transition:{
            duration:0.6,
            delay:0.6,
            ease:[0.83,0,0.17,1]
        }
    }
}
export default function AnimationPage({children}) {
    return(
        <LazyMotion features={domAnimation}>
            <m.div

                    {...pageMotionProps}
                    >
                        {children}

            </m.div>
        </LazyMotion>
    )

};
