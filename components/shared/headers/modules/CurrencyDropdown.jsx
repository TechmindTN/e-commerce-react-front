import React, { Component,useEffect, useState } from 'react';
//import { notification } from 'antd';
//import { connect } from 'react-redux';
import axios from 'axios';
//import { changeCurrency } from '../../../../store/setting/action';

function CurrencyDropdown() {
    const [currency, setCurrency] = useState(0);
  
    useEffect(async () => {
        const result = await axios(
          'https://ipapi.co/currency/',
        );
    
        setCurrency(result.data);
      });
  
    return (
      <div>
       {currency}
      </div>
    );
  }
// const Currencydropdown = () => {
//     const [ip, setIP] = useState('');
// //creating function to load currency from the API
// const getData = async () => {
//     const res = await axios.get('https://ipapi.co/currency/')
//     console.log(res.data);
//     setIP(res.data)
//   }
  
//   useEffect( () => {
//     //passing getData method to the lifecycle method
//     getData()
  
//   }, [])
//     return (
//         <div>
//             {ip}
//         </div>
//     );
// }

// export default Currencydropdown;

//class CurrencyDropdown extends Component {
//     constructor(props) {
//         super(props);
//     }

//     handleFeatureWillUpdate(e) {
//         e.preventDefault();
//         notification.open({
//             message: 'Opp! Something went wrong.',
//             description: 'This feature has been updated later!',
//             duration: 500,
//         });
//     }

//     handleChangeCurrency = (e, currency) => {
//         e.preventDefault();
//         this.props.dispatch(changeCurrency(currency));
//     };
//    const 
//     render() {
//         const { currency } = this.props;
   
//         return (
            
          
//             <div className="ps-dropdown">
//                  {currency ? (
//                      <a href="/" onClick={e => e.preventDefault()}>
//                          {currency.text}
//                      </a>
//                  ) : (
//                      ''
//                  )}

//                  <ul className="ps-dropdown-menu">
//                      <li>
//                          <a
//                              href="/"
//                              onClick={e =>
//                                  this.handleChangeCurrency(e, {
//                                      symbol: '$',
//                                      text: 'USD',
//                                  })
//                              }>
//                              USD
//                          </a>
//                      </li>
//                      <li>
//                          <a
//                              href="/"
//                              onClick={e =>
//                                  this.handleChangeCurrency(e, {
//                                      symbol: '€',
//                                      text: 'EURO',
//                                  })
//                              }>
//                              EURO
//                          </a>
//                      </li>
//                      <li>
//                          <a
//                              href="/"
//                              onClick={e =>
//                                  this.handleChangeCurrency(e, {
//                                      symbol: '£',
//                                      text: 'GBP',
//                                  })
//                              }>
//                             GBP
//                         </a>
//                      </li>
//                 </ul>
//              </div>
//         );
//     }
// }
// const mapStateToProps = state => {
//     return state.setting;
//};

//export default connect(mapStateToProps)(CurrencyDropdown);
export default CurrencyDropdown;
