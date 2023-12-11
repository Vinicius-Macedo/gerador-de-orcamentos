interface TextProps {
  children: React.ReactNode;
  className?: string;
}
export function Text(props: TextProps) {
  return (
    <>
      <p className={props.className}>{props.children}</p>
    </>
  );
}
