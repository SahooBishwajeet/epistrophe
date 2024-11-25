import { motion } from 'framer-motion';
import { numberToPercent } from '../utils/helpers';

const Results = ({
  errors,
  accuracyPercent,
  total,
  className,
}: {
    errors: number,
    accuracyPercent: number,
    total: number,
    className?: string
  }) => {

  const initial = { opacity: 0 }
  const animate = { opacity: 1 }
  const transition = { duration: 1 }

  return (
    <motion.ul
      className="flex flex-col items-center text-amber-400 space-y-3"
    >
      <motion.li
        initial={initial}
        animate={animate}
        transition={{ ...transition, delay: 0 }}
        className="text-xl font-semibold">

        Results

      </motion.li>

      <motion.li
        initial={initial}
        animate={animate}
        transition={{ ...transition, delay: 0.5 }}
      >

        Accuracy : {numberToPercent(accuracyPercent)}

      </motion.li>

      <motion.li
        initial={initial}
        animate={animate}
        transition={{ ...transition, delay: 1 }}
        className="text-red-400">

        Errors : {errors}

      </motion.li>

      <motion.li
        initial={initial}
        animate={animate}
        transition={{ ...transition, delay: 1.5 }}
      >

        Total : {total}

      </motion.li>
    </motion.ul>
  );
}

export default Results;
