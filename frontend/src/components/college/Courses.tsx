import type { Course } from "../../types/college";

interface Props {
  courses?: Course[];
}

export default function Courses({ courses = [] }: Props) {
  return (
    <section className="mt-10">
      <h2 className="mb-3 text-2xl font-semibold text-slate-950 dark:text-white">
        Courses
      </h2>

      <div className="grid gap-3 md:grid-cols-2">
        {courses.map((course) => (
          <div key={course.id || course.name} className="surface rounded-2xl p-5">
            <h4 className="font-semibold text-slate-950 dark:text-white">
              {course.name}
            </h4>

            <p className="mt-1 text-sm text-muted">Duration: {course.duration}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
