import cls from "classnames";

function Select({ className, containerProps, icon: Icon, children, ...props }) {
  return (
    <div className={cls("group", className)} {...containerProps}>
      {Icon && <Icon className="icon" aria-hidden="true" viewBox="0 0 24 24" />}

      <select placeholder="Search" type="search" className="input" {...props}>
        {children}
      </select>
    </div>
  );
}

Select.Item = function Item({ children, ...props }) {
  return <option {...props}>{children}</option>;
};

export default Select;
