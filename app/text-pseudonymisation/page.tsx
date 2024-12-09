"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

export default function TextPseudonymisation() {
  const [inputText, setInputText] = useState("");
  const [pseudonymizedText, setPseudonymizedText] = useState("");
  const { toast } = useToast();

  const handlePseudonymize = () => {
    const masked = inputText.replace(/\S+/g, "[Daten entfernt]");
    const pseudonymized = inputText.replace(
      /\b\w+\b/g,
      (match, index) =>
        `${match.charAt(0).toUpperCase() + match.slice(1)}_${String(
          index
        ).padStart(3, "0")}`
    );
    setPseudonymizedText(pseudonymized);
    toast({
      title: "Text pseudonymisiert",
      description: "Ihr Text wurde erfolgreich pseudonymisiert.",
      variant: "success",
    });
  };

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Text-Pseudonymisierung</h1>
      <Textarea
        placeholder="Geben Sie den Text zur Pseudonymisierung ein..."
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        className="min-h-[200px]"
      />
      <Button
        onClick={handlePseudonymize}
        className="w-full bg-orange-500 hover:bg-orange-600"
      >
        Text pseudonymisieren
      </Button>
      {pseudonymizedText && (
        <div className="grid grid-cols-2 gap-4 bg-white p-4 rounded shadow">
          <div>
            <h3 className="font-semibold mb-2">Originaltext (maskiert)</h3>
            <p className="whitespace-pre-wrap">
              {inputText.replace(/\S+/g, "[Daten entfernt]")}
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-2">Pseudonymisierter Text</h3>
            <p className="whitespace-pre-wrap">{pseudonymizedText}</p>
          </div>
        </div>
      )}
    </div>
  );
}
