import "./App.css";
import Video from "./pages/Video";

function App() {
  return (
    <div className="App">
      <div className="app__videos">
        <Video likes={543} messages={230} shares={186} name="Amanda" description="Gatinho pulando" music="Música muito épica" url="https://firebasestorage.googleapis.com/v0/b/jornada-b5e9d.appspot.com/o/brecker2.mp4?alt=media&token=9aa979e9-0907-4093-abd5-a71efe4fc946" />
        <Video likes={329} messages={120} shares={647} name="Rocha" description="Gatinho confuso" music="Música muito lendária" url="https://firebasestorage.googleapis.com/v0/b/jornada-dev.appspot.com/o/bird.mp4?alt=media&token=52abbeec-ff95-4acb-808e-5a4b4977d1da" />
       
      </div>
    </div>
  );
}

export default App;
