import React from 'react';

const Header = (props) => {
     return (
          <div>
               <nav>
                    <div className="nav-wrapper light-blue darken-2">
                         <a href="#" class="brand-logo center">{props.titulo}</a>
                    </div>
               </nav>
          </div>
     );
};

export default Header;