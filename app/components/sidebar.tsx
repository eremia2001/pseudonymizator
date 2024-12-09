import Link from "next/link";
import { FileText, Upload, Activity, Bell } from "lucide-react";

export function Sidebar() {
  return (
    <aside className="w-64 bg-white shadow-md">
      <nav className="p-4">
        <ul className="space-y-2">
          <li>
            <Link
              href="/file-pseudonymisation"
              className="flex items-center p-2 text-gray-700 hover:bg-blue-100 rounded"
            >
              <Upload className="mr-2" size={20} />
              Datei-Pseudonymisierung
            </Link>
          </li>

          <li>
            <Link
              href="/text-pseudonymisation"
              className="flex items-center p-2 text-gray-700 hover:bg-blue-100 rounded"
            >
              <FileText className="mr-2" size={20} />
              Text-Pseudonymisierung
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
}
