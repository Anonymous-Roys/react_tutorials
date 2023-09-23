// const message = () => {
//   const name = "Jesse";
//   const age = 40;
//   return name + ' is ' + age + 'years old.';
// };

// export default message;
// // ---------named exportss------
// const name = "dave";
// const age = 30;

// export { name, age}

import { toBeEnabled } from '@testing-library/jest-dom/matchers';
import React from 'react';
import ReactDOM from 'react-dom/client';


const element = (
  <div>
    <table>
        <tr>
          <td>FirstName</td>
          <td>LastName</td>
        </tr>
        <tr>
          <td><input type="text" name = "firstname" placeholder='Daves'/></td>
          <td><input type="text" name = "lastname" placeholder='Arhin' /></td>
    
        </tr>
      </table>
    <h1>React is {5 + 5} times better with JSX</h1>
    <input type="text" />
  </div>
)
// const container = document.getElementById('root');
// const root = ReactDOM.createRoot(container);
// root.render(element);
