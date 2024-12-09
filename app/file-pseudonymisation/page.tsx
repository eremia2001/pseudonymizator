"use client";

import { useState } from "react";
import { Upload, File } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { useToast } from "@/hooks/use-toast";

export default function FilePseudonymisation() {
  const [files, setFiles] = useState<File[]>([]);
  const [progress, setProgress] = useState(0);
  const { toast } = useToast();

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      setFiles(Array.from(event.target.files));
    }
  };

  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    if (event.dataTransfer.files) {
      setFiles(Array.from(event.dataTransfer.files));
    }
  };

  const startPseudonymization = () => {
    let progress = 0;
    const interval = setInterval(() => {
      progress += 10;
      setProgress(progress);
      if (progress >= 100) {
        clearInterval(interval);
        toast({
          title: "Pseudonymisierung abgeschlossen",
          description: "Ihre Dateien wurden erfolgreich pseudonymisiert.",
          variant: "default",
        });
      }
    }, 500);
  };

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Datei-Pseudonymisierung</h1>
      <div
        className="border-2 border-dashed border-gray-300 rounded-lg p-12 text-center cursor-pointer hover:border-blue-500 transition-colors"
        onDrop={handleDrop}
        onDragOver={(e) => e.preventDefault()}
        onClick={() => document.getElementById("fileInput")?.click()}
      >
        <Upload className="mx-auto text-gray-400 mb-4" size={48} />
        <p className="text-xl mb-2">
          Laden Sie Ihre Dateien hier hoch oder klicken Sie, um Dateien
          auszuwählen
        </p>
        <p className="text-sm text-gray-500">Unterstützt alle Dateitypen</p>
        <input
          id="fileInput"
          type="file"
          multiple
          className="hidden"
          onChange={handleFileUpload}
        />
      </div>
      {files.length > 0 && (
        <div className="space-y-4">
          <h2 className="text-xl font-semibold">Hochgeladene Dateien</h2>
          <ul className="space-y-2">
            {files.map((file, index) => (
              <li
                key={index}
                className="flex items-center space-x-2 p-2 bg-white rounded shadow"
              >
                <File size={20} />
                <span>{file.name}</span>
                <span className="text-sm text-gray-500">
                  ({file.type || "Unbekannter Typ"},{" "}
                  {(file.size / 1024).toFixed(2)} KB)
                </span>
              </li>
            ))}
          </ul>
          <Button
            onClick={startPseudonymization}
            className="w-full bg-orange-500 hover:bg-orange-600"
          >
            Pseudonymisierung starten
          </Button>
          {progress > 0 && <Progress value={progress} className="w-full" />}
        </div>
      )}
    </div>
  );
}
