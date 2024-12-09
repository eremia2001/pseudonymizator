// Importiere benötigte Komponenten
import Link from "next/link";
import { FileText, Upload, Activity } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Datenpseudonymisierungsplattform</h1>
      <p className="text-xl">
        Willkommen auf unserer modernen und intuitiven
        Datenpseudonymisierungsplattform. Wählen Sie eine Funktion, um zu
        beginnen:
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Link href="/file-pseudonymisation" className="block">
          <Button
            variant="outline"
            className="w-full h-32 flex flex-col items-center justify-center"
          >
            <Upload className="mb-2" size={32} />
            <span>Datei-Pseudonymisierung</span>
          </Button>
        </Link>
        <Link href="/text-pseudonymisation" className="block">
          <Button
            variant="outline"
            className="w-full h-32 flex flex-col items-center justify-center"
          >
            <FileText className="mb-2" size={32} />
            <span>Text-Pseudonymisierung</span>
          </Button>
        </Link>
        <Link href="/real-time-processing" className="block">
          <Button
            variant="outline"
            className="w-full h-32 flex flex-col items-center justify-center"
          >
            <Activity className="mb-2" size={32} />
            <span>Echtzeit-Verarbeitung</span>
          </Button>
        </Link>
      </div>
    </div>
  );
}
