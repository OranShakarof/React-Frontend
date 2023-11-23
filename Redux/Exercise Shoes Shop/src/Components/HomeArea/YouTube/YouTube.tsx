import "./YouTube.css";

function YouTube(): JSX.Element {
  return (
    <div className="YouTube">
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/_h6aWfAhiis"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
}

export default YouTube;
