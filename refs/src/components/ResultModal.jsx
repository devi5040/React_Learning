function ResultModal({ result, targetTime }) {
  return (
    <dialog className="result-modal">
      <h2>You {result}</h2>
      <p>
        The target time was <strong>{targetTime} seconds</strong>
      </p>
      <p>
        You stopped the timer at <strong>X seconds left</strong>
      </p>
      <form action="dialog">
        <button>Close</button>
      </form>
    </dialog>
  );
}

export default ResultModal;
