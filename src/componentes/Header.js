import React from 'react';
import PropTypes from 'prop-types';

const Header = (props) => {
     return (
          <div>
               <nav>
                    <div className="nav-wrapper light-blue darken-2">
                         <h1>{props.titulo}</h1>
                    </div>
               </nav>
          </div>
     );
};
Header.propTypes = {
     titulo: PropTypes.string.isRequired
}

export default Header;
