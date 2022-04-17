import React from "react";
import PropTypes from "prop-types";
import Button from "./Button";

const Header = ({ title, showAddTask, setShowAddTask }) => {
  const onClick = () => {
    setShowAddTask(!showAddTask);
  };
  const buttonParams = {
    color: "red",
    text: "Add",
    onClick,
  };

  return (
    <header className="header">
      <h1>{title}</h1>
      <Button params={buttonParams}></Button>
    </header>
  );
};

Header.defaultProps = {
  title: "Task Tracker",
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

// const headingStyles = {
//   color: "red",
//   backgroundColor: "yellow",
// };

export default Header;
