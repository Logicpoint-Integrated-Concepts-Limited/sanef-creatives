const DropDown = ({
  text,
  title,
  children,
  align = "center",
  classNames = "",
}) => {
  return (
    <div className={`dropdown ${classNames}`}>
      <div className="dropbtn flex items-center gap-7">
        <p>{text}</p>
        {title}
      </div>
      <div className={`dropdown-content ${align} sm:left-28 md:left-0`}>
        <ul>{children}</ul>
      </div>
    </div>
  );
};

export default DropDown;
