export default function Header() {
  return (
    <header className="flex justify-between mx-[250px] p-[22px] bg: #7FB929;">
      <a href="" className="flex items-center gap-1">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8 -rotate-90">
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"
          />
        </svg>
        <span className="font-bold text-xl">Organisation Name</span>
      </a>
      <div className="flex header-list font-light" >

        <div className="p-1">Home</div>
        <div className="p-1">About us</div>
        <div className="p-1">Causes</div>
        <div className="p-1">Gallery</div>
        <div className="p-1">News</div>
        <div className="p-1">Contact</div>
      </div>


    </header>
  );
}
