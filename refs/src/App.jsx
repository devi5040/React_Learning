import Player from "./components/Player.jsx";
import TimerChallenge from "./components/TimerChallenge.jsx";

function App() {
  return (
    <>
      <Player />
      <div id="challenges">
        <TimerChallenge title={"easy"} targetTime={1} />
        <TimerChallenge title={"not easy"} targetTime={2} />
        <TimerChallenge title={"tough"} targetTime={5} />
        <TimerChallenge title={"pro's only"} targetTime={10} />
      </div>
    </>
  );
}

export default App;
