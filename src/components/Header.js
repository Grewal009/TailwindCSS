import SearchOrder from "./SearchOrder";
import Username from "./Username";

const Header = () => {
  return (
    <header className="bg-yellow-500 p-3 uppercase">
      <a href="/" className="tracking-widest">
        Fast React Pizza Co.
      </a>
      <SearchOrder />
      <Username />
    </header>
  );
};

export default Header;
