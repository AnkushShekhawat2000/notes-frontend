import { auth } from "../firebase";
import { signOut } from "firebase/auth";

export default function Navbar() {
  return (
    <nav className="bg-gray-800 text-white p-4 flex justify-between">
      <h1 className="text-lg font-bold">Notes Dashboard</h1>
      <button
        onClick={() => signOut(auth)}
        className="bg-red-500 px-3 py-1 rounded"
      >
        Logout
      </button>
    </nav>
  );
}
