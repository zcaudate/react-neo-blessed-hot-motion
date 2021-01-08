import React, {Component} from 'react';
import ProgressBar from './ProgressBar';
import AnimatedBox from './AnimatedBox';

function App () {
  return (
    <box label='React Blessed Hot Motion'
         border={{type: 'line'}}
         style={{border: {fg: 'cyan'}}}>
       <box label="View One"
            width='48%'
            height="70%"
            top="3%"
            left="1%"
            border={{type: 'line'}}
            style={{border: {fg: 'green'}}}>
         <AnimatedBox />
       </box>
       <box label="View Two"
            width='48%'
            left="50%"
            height="70%"
            top="3%"
            border={{type: 'line'}}
            style={{border: {fg: 'red'}}}>
         hello
       </box>
      <ProgressBar />
    </box>
  );
}

export default App

// export default class App extends Component {
//   render() {
//     return (
//       <box label='React Blessed Hot Motion'
//            border={{type: 'line'}}
//            style={{border: {fg: 'cyan'}}}>
//         <InnerBox position="left">
//           <AnimatedBox />
//         </InnerBox>
//         <InnerBox position="right">
//           Lol.
//         </InnerBox>
//         <ProgressBar />
//         Random text here...
//       </box>
//     );
//   }
// }