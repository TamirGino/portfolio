import { motion } from "framer-motion";
import { HashLink } from "react-router-hash-link";

const Scroller = () => {
  return (
    <div
      id="scroller"
      style={{position:"absolute", display:"flex",justifyContent:"center",
           justifyItems:"center"}}>
       <HashLink  smooth to={"/#about"} >
        <div 
          style={{width:"10px", height:"40px", borderRadius:"25px",
           border:"4px solid #EFEDFF", display:"flex",justifyContent:"center",
           padding:"10px", opacity:"0.8",cursor:"pointer"  }}>
          <motion.div
            animate={{
              y: [0, 30, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: "loop",
            }}
            style={{width:"10px", height:"10px", borderRadius:"50px",
                    backgroundColor:"#EFEDFF", }}
          />
        </div>
      </HashLink>
    </div>
  );
};

export default Scroller;
