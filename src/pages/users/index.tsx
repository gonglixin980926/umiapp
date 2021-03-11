import React, { useState, useEffect } from 'react';
import styles from './index.less';

export default function Page() {
  const [count, setCount] = useState(0);
  const [num, setNum] = useState(10);
  useEffect(() => {
    // 使用浏览器的 API 更新页面标题
    document.title = `You clicked ${num} times`;
  },[num]);
  return (
      <div>
        <button onClick={
          ()=>{setCount( count + 1)}
        }>+</button>
        <button onClick={
          ()=>{setNum( num + 1)}
        }>更改num</button>
        <div>{num}</div>
        <div>{count}</div>
        <h1 className={styles.title}>Page users</h1>
      </div>

  );
}




// Context
// const ThemContext = React.createContext('light')

// export default class users extends React.Component{
//   render(){
//     return (
//       <ThemContext.Provider value='dark'>
//         <div>
//           <h1 className={styles.title}>Page users</h1>
//         </div>
//         <ButtonComp></ButtonComp>
//       </ThemContext.Provider>
//     )
//   }
// }

// export class ButtonComp extends React.Component{
//     static contextType = ThemContext
//     componentDidMount(){
//       console.log(ButtonComp.contextType)
//     }
//     render(){
//       return (
//         <div >{JSON.stringify(this.context)}</div>
//       )
//     }
// }

