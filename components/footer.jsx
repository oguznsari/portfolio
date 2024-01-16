import { FaRegCopyright } from "react-icons/fa";

const thisYear = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="mb-10 px-4 text-center text-gray-500 font-mono font-bold">
      <small className="mb-2 text-xs flex items-center justify-center gap-2">
        <FaRegCopyright />
        {thisYear} Oğuzhan SARI
      </small>
    </footer>
  );
}
