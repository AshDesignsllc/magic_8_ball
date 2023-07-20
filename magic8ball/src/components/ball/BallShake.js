import magic8ball from '../images/magic8ball.png';
import { Shake } from 'reshake';

// class App extends Component {
//   render () {
//     return (
//       <Shake 
//         h={74}
//         v={5}
//         r={3}
//         dur={30}
//         int={10}
//         max={100}
//         fixed={true}
//         fixedStop={false}
//         freez={false}>
//         <h1>&lt;Shake /&gt;</h1>
//       </Shake>
//     )
//   }
// }

const BallShake = () => {
    return (
        <img className="ball" src={magic8ball} alt="magic8ball" />
    );
}

export default BallShake;