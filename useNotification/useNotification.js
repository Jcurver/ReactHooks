
export const useNotification = (title, options) => {
    if(!("Notification" in window)){
      return;
    }
    const fireNotif = () => {
      if(Notification.permission !== "granted"){
        Notification.requestPermission().then(permission =>  {
          if(permission === "granted"){
            new Notification(title, options);
          } else {
            return;
          }
        });
      } else {
        new Notification(title,options);
      }
    }
  };
  
//   export default function App() {
//     const triggerNotif = useNotification("happy", {body:"kimchi"});
//     return (
//       <div className="App" >
//         <button onClick ={triggerNotif}>hello</button >
//       </div>
//     );
//   };
  