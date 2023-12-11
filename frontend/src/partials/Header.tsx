import { BookPlus } from "lucide-react";

interface HeaderProps {}
export function Header(props: HeaderProps) {
  return (
    <>
      <>
        <header className="fixed left-0 top-0 h-screen p-8 bg-[#fafafa]">
          <ul className="">
            <li className="font-semibold flex items-center gap-2">
              <BookPlus /> Gerar novo orçamento
            </li>
          </ul>
        </header>
      </>
    </>
  );
}
