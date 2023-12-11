interface TitleProps {
  children: React.ReactNode;
  className?: string;
}
export function Title(props: TitleProps) {
  return <h1 className={props.className}>{props.children}</h1>;
}
