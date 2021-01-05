import React from 'react'

export class NumberList extends React.Component {
  

  numberList = () => {
    const numbers = this.props.numbers; // array
    
    const listItems = numbers.map((number) =>
     <li key={number.toString()}>
       {number}
      </li>
    );
    
    return listItems;
    
  }

  render() {
    const items = this.listItems()
    return (
      <ul>{items}</ul>
    );
  }

}

export default NumberList

// function NumberList(props) {
//     const numbers = props.numbers; // array
    
//     const listItems = numbers.map((number) =>
//      <li key={number.toString()}>
//        {number}
//       </li>
//     );
//     return (
//       <ul>{listItems}</ul>
//     );
//   }
//   const numbers = [1, 2, 3, 4, 5];
//   ReactDOM.render(
//     <NumberList numbers={numbers} />,
//     document.getElementById('root')
//   );