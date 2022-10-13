
$(".nosel.d-flex.room.r180b31492f9x922d0131xn7fcg1 .u-topic.dots").after('<div id="like_R_button"><img class="r_like" src="https://c.top4top.io/p_243088vji1.gif"><span class="r_count">0</span></div>');

$(`<style>
#like_R_button {
  width: 58px;
  padding: 0px;
  border-radius: 2px;
  background-color: #000;
  float: right;
  margin-right: 0px;
  height: 25px;
  cursor: pointer;
}

.r_like {
  width: 19px;
  margin: 0px 6px 5px 4px;
}

.r_count {
  font-size: 18px !important;
  color: aliceblue;
  margin: 0 0 0 -3px;
}</style>`).insertBefore('body');

var config = {
  apiKey: "AIzaSyCmPI4ru55XGnnZPXpbMCQ1HcdlNI2jv0A",
  authDomain: "reactlikes.firebaseapp.com",
  databaseURL: "https://reactlikes.firebaseio.com",
  projectId: "reactlikes",
  storageBucket: "reactlikes.appspot.com",
  messagingSenderId: "868005245222"
};

firebase.initializeApp(config);

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      r_count: '-'
    };
  }

  componentDidMount() {
    const rootRef = firebase.database().ref();
    const r_countRef = rootRef.child('r_count');
    r_countRef.on('value', snap => {
      this.setState({
        r_count: snap.val()
      })
    })
  }

  handleChange(e) {
    e.preventDefault();
    const rootRef = firebase.database().ref();
    const r_countRef = rootRef.child('r_count').transaction(val => val + 1);
    rootRef.push(r_countRef);
  }

  render() {
    return (
      <main>
			<div class="card" onClick={this.handleChange}>
				<svg title="SVG Heart Icon" viewBox="-11 -11 122 111" width="100" height="100">
					<path d="
						 M 50 0,
						 A 1 1 0 1 0 0 50, 
						 L50,100, 
						 L100,50,
						 A 1 1 0 1 0 50 0"
						/>
					</svg>
        <h1>{this.state.r_count}</h1>
				</div>
      </main>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('like_R_button'));