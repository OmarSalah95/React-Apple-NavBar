import React from "react";
import { NavLink } from "react-router-dom";

class NavHeader extends React.Component {
  render() {
    return (
      <div className="nav-header">
        <div className="nav-links">
            <i className="fab fa-apple" />
            {this.props.categories.map(category => (
            <NavLink key={category.id} to={`/${category.categoryName}`}>
                <span className="category">{category.categoryName}</span>
            </NavLink>
            ))}
            <a href='https://support.apple.com/'><span>Support</span></a>
            <a href='https://support.apple.com/kb/index?page=search&locale=en_US' ><i className="fa fa-search" /></a>
            <i className="fa fa-shopping-bag" />
        </div>
      </div>
    );
  }
}

export default NavHeader;