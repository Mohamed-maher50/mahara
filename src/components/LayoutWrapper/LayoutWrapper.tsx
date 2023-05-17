import React, { useId } from "react";
import { motion } from "framer-motion";
import { IoMdClose } from "react-icons/io";
interface Props {
  children: React.ReactNode;
  statusHandler?: React.Dispatch<React.SetStateAction<boolean>>;
  status?: boolean;
}
const LayoutWrapper: React.FC<Props> = ({
  children,
  statusHandler,
  status = false,
}) => {
  const id = useId();

  return (
    <>
      <motion.div
        initial={{
          scale: 0,
        }}
        animate={{ scale: 1 }}
        key={id}
        className=" flex fixed z-50 items-center justify-center top-0 left-0 right-0 bottom-0 bg-black"
        exit={{
          scale: 0,
        }}
      >
        {statusHandler && (
          <motion.div
            initial={{ scale: 1 }}
            whileHover={{
              scale: 0.7,
            }}
            className="text-white absolute right-10 top-10 text-4xl cursor-pointer"
            onClick={
              statusHandler != undefined ? () => statusHandler(false) : () => {}
            }
          >
            <IoMdClose />
          </motion.div>
        )}
        {children}
      </motion.div>
    </>
  );
};

export default LayoutWrapper;
