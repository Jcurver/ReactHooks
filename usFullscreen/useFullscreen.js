
export const useFullscreen = (callback) => {
  const element = useRef();
  const runCb = isFull => {
    if (callback && typeof callback ==="function"){
      callback(isFull);
  }
}
  const triggerFull = () => {
    if(element.current){
      element.current.requestFullscreen();
    } else if (element.current.mozRequestFullscreen){
      element.current.mozRequestFullscreen();
    } else if (element.current.webkitRequestFullscreen){
      element.current.webkitRequestFullscreen();
    } else if (element.current.msRequestFullscreen){
      element.current.msRequestFullscreen();
    }
    runCb(true);
  };

  const exitFull = () => {
    document.exitFullscreen();
    if(element.current){
      element.current.requestFullscreen();
    } else if (element.current.mozCancelFullscreen){
      element.current.mozRequestFullscreen();
    } else if (element.current.webkitExitFullscreen){
      element.current.webkitRequestFullscreen();
    } else if (element.current.msExitFullscreen){
      element.current.msRequestFullscreen();
    }
    runCb(false);
   };
   return { element, triggerFull, exitFull };
};

// export default function App() {
//   const onFullS = isFull => {
//     console.log(isFull ? "We are full" : "We are small");
//   }
//   const {element, triggerFull, exitFull} = useFullscreen(onFullS);
//   return (
//     <div className="App" >
//       <div ref={element} >
//       <img ref = {element} src="https://i.ibb.co/R6RwNxx/grape.jpg" alt="grape" width="250"/>
//       <button onClick={exitFull}>Exit fullscreen</button>
//       </div>
//       <button onClick={triggerFull}>Make fullscreen</button>
//     </div>
//   );
// };
