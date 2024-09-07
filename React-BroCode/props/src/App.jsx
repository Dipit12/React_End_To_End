import Student from "./Student";
function App(){
  return(
    <>
      <Student name = "Dipit" age = {18} isStudent = {false}/>
      <Student name = "Tithi" age = {19} isStudent = {true}/>
      <Student name = "Aarav" age = {19} isStudent = {true}/>
      <Student name = "Arnav" age = {19} isStudent = {false}/>
      <Student />
      <Student name = "Larry" />
    </>
  );
}

export default App;