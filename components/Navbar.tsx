import { Button } from "./ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "./ui/dropdown-menu";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center p-4 ">
      <a href="/" className="flex items-center">
        <img src="/img/logo.png" alt="로고" className="h-8 mr-4" />
      </a>
      <div className="flex-grow text-center">
        <span className="mx-4"><a href="/company">회사소개</a> </span>
        <span className="mx-4"><a href="/business">비지니스</a></span>
        <span className="mx-4"><a href="/customer">고객문의</a></span>
      </div>
      <div className="bg-[#edf5ff] text-black overflow-hidden px-4 py-2 rounded-full">
        <DropdownMenu>
          <DropdownMenuTrigger>계열사</DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel></DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem><a href="http://www.trinity-eng.co.kr/">트리니티엔지니어링</a>  </DropdownMenuItem>            
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </nav>
  );
}

export default Navbar

