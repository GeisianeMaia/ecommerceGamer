import Cart from "./Cart";
import Logo from "./Logo";

export default function Header(){
  return(
    <header className="flex justify-between items-center border border-gray-300 h-20 px-4 md:px-8 lg:px-16 xl:32 2xl:px-64">
      <Logo/>
      <Cart/>
    </header>
  ) 
  
}