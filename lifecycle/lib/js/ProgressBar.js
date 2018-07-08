class ProgressBar extends React.Component {
  constructor(props) {
    super(props);
    this.canvas = null;
  }

  updateCanvas(progress) {
    const ctx = this.canvas.getContext('2d');
    const width = this.canvas.clientWidth;
    const height = this.canvas.clientHeight;
    ctx.clearRect(0, 0, width, height);

    ctx.beginPath();
    ctx.strokeStyle = "#4ca89a";
    ctx.lineWidth = 7;
    ctx.arc(width / 2, height / 2, 52, 0, 2 * Math.PI, true);
    ctx.stroke();
    ctx.closePath();

    const degree = 360 * progress / 100;
    const radius = degree * Math.PI / 180;

    ctx.beginPath();
    ctx.strokeStyle = "#96d6f4";
    ctx.arc(width / 2, height / 2, 45, 0, radius, false);
    ctx.stroke();
    ctx.closePath();

    ctx.font = "25px sans-serif";
    ctx.textBaseline = "middle";
    ctx.textAlign = "center";
    ctx.fillText(`${progress}%`, width / 2, height / 2);

  }

  componentDidMount() {
    this.updateCanvas(0);
  }

  componentWillReceiveProps({completed, total}) {
    let progress = (total === 0 || completed === 1) ? 0 : Math.round(completed * 100 / total);
    this.updateCanvas(progress);
  }

  render() {
    return (
      <canvas id="progressCanvas" className="progress" ref={canvas => this.canvas = canvas} style={{height: 'auto'}} width="150" height="120" />
    );
  }
}