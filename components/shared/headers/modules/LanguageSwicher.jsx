import React, { Component, useEffect, useState } from 'react';
import axios from 'axios';
import { notification } from 'antd';
// class LanguageSwicher extends Component {
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

//     render() {
//         return (
//             <div className="ps-dropdown language">
//                 <a href="#" onClick={this.handleFeatureWillUpdate.bind(this)}>
//                     <img src="/static/img/flag/en.png" alt="martfury" />
//                     English
//                 </a>
//                 <ul className="ps-dropdown-menu">
//                     <li>
//                         <a
//                             href="#"
//                             onClick={this.handleFeatureWillUpdate.bind(this)}>
//                             <img src="/static/img/flag/germany.png" alt="martfury" />
//                             Germany
//                         </a>
//                     </li>
//                     <li>
//                         <a
//                             href="#"
//                             onClick={this.handleFeatureWillUpdate.bind(this)}>
//                             <img src="/static/img/flag/fr.png" alt="martfury" />
//                             France
//                         </a>
//                     </li>
//                 </ul>
//             </div>
//         );
//     }
// }
function LanguageSwicher() {
    const [languages, setlanguage] = useState(0);
  
    useEffect(async () => {
        const result = await axios(
          'https://ipapi.co/languages/',
        );
    
        setlanguage(result.data);
      });
  
    return (
      <div>
       {languages}
      </div>
    );
  }
export default LanguageSwicher;
