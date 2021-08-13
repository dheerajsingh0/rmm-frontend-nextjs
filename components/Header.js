import Image from "next/image";
import logo from "../public/logo.png";
function Header() {
  return (
    <div className="flex items-center text-center">
      <Image src={logo} width={150} height={50} placeholder="blur"/>
      <h1 className="ml-auto p-4 font-sans font-extrabold">Read Map Migrate</h1>
    </div>
  );
}

export default Header;
