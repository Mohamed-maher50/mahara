import React, {
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
interface Props {
  children: React.ReactNode;
  label: string;
  open?: boolean;
}
interface DropDownSchema {
  status: boolean;
  setStatus: React.Dispatch<React.SetStateAction<boolean>>;
}
const DropDownContext = createContext<DropDownSchema>({
  status: false,
  setStatus: () => {},
});

const DropDown: React.FC<Props> = ({ children, open, label }) => {
  const [status, setStatus] = useState<boolean>(false);
  const DropDownRef = useRef<HTMLUListElement | null>(null);
  useEffect(() => {
    if (open != undefined) setStatus(open);
  }, [open, label]);
  useEffect(() => {
    document.addEventListener("click", function (e: any) {
      console.log(e.target.id == label);
      console.log(label);
      if (e.target.id == label && !status) return setStatus(true);
      setStatus(false);
    });
  }, []);

  return (
    <DropDownContext.Provider value={{ status, setStatus }}>
      {status && (
        <ul
          ref={DropDownRef}
          className="absolute left-2/4 -translate-x-2/4 overflow-x-hidden scroll-secondary  max-h-80 overflow-y-auto  last:border-transparent bg-white shadow-lg min-w-[200px] top-[120%] p-2  rounded-md   z-30 text-black"
        >
          {children}
        </ul>
      )}
    </DropDownContext.Provider>
  );
};
export let useDropDown = () => useContext(DropDownContext);
export default DropDown;
