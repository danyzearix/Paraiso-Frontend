// hoc/withScrollAnimation.js
import { motion } from "framer-motion";
import useOnScreen from "../../hooks/useOnScreen";

function withScrollAnimation(Component) {
  return function AnimatedComponent(props) {
    const [ref, isVisible] = useOnScreen({ threshold: 0.1 });

    return (
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 100 }}
        transition={{ duration: 0.5 }}
      >
        <Component {...props} />
      </motion.div>
    );
  };
}

export default withScrollAnimation;
