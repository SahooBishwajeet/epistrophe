import { motion } from 'framer-motion';

const CaretAnim = () => {
  return (
    <motion.div
      aria-hidden={true}
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      exit={{ opacity: 1 }}
      transition={{ duration: 1, ease: "easeInOut", repeat: Infinity }}
      className='inline-block bg-amber-400 w-0.5 h-7'
    />
  );
};

export default CaretAnim;
