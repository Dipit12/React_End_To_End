import UserGreeting from "./UserGreeting";
function App(){
  return(
    <>
    
      <UserGreeting isLoggedIn = {true} username = "dipit12"/>
      <UserGreeting isLoggedIn = {false} username = "tithi21"/>
      <UserGreeting />
    </>
  );
}

export default App;