import cls from "classnames";

export default function Input({
  className,
  containerProps,
  icon: Icon,
  ...props
}) {
  return (
    <div className={cls("group", className)} {...containerProps}>
      <Icon className="icon" aria-hidden="true" viewBox="0 0 24 24" />
      <input placeholder="Search" type="search" className="input" {...props} />
    </div>
  );
}
