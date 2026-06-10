import React from "react";
import { BookOpen, Clock } from "lucide-react";

export default function CoursesList({ courses = [] }) {
    if (!courses.length) return null;

    return (
        <div>
            <h2 className="font-display text-2xl text-foreground mb-5">Courses offered</h2>
            <div className="grid sm:grid-cols-2 gap-3">
                {courses.map((course, i) => (
                    <div key={i} className="flex items-center gap-4 bg-card border border-border rounded-2xl p-4 hover:border-foreground/20 transition-colors">
                        <div className="w-10 h-10 rounded-xl bg-accent flex items-center justify-center shrink-0">
                            <BookOpen className="w-5 h-5 text-accent-foreground" />
                        </div>
                        <div className="min-w-0">
                            <p className="font-medium text-sm text-foreground truncate">{course.name}</p>
                            <p className="flex items-center gap-1 text-xs text-muted-foreground mt-0.5">
                                <Clock className="w-3 h-3" /> {course.duration}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}