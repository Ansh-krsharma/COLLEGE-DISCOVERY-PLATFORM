import React from "react";
import { Heart } from "lucide-react";
import { cn } from "@/lib/utils";
import { useSavedColleges } from "../../hooks/useSavedColleges";

export default function SaveButton({ collegeId, className }) {
    const { isSaved, toggleSave } = useSavedColleges();
    const saved = isSaved(collegeId);

    return (
        <button
            onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                toggleSave(collegeId);
            }}
            aria-label={saved ? "Remove from saved" : "Save college"}
            className={cn(
                "w-9 h-9 rounded-full flex items-center justify-center transition-all duration-300 backdrop-blur-md",
                saved ? "bg-destructive/90 text-white scale-105" : "bg-white/80 text-foreground hover:bg-white",
                className
            )}
        >
            <Heart className={cn("w-4 h-4", saved && "fill-current")} />
        </button>
    );
}