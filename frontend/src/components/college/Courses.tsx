interface Course {
  id: string;

  name: string;

  duration: string;
}

interface Props {
  courses: Course[];
}

export default function Courses({
  courses,
}: Props) {
  return (
    <section className="mt-10">
      <h2 className="text-2xl font-bold mb-3">
        Courses
      </h2>

      <div className="bg-white rounded-xl shadow p-6">
        {courses?.map(
          (course) => (
            <div
              key={course.id}
              className="border-b py-3"
            >
              <h4 className="font-semibold">
                {course.name}
              </h4>

              <p>
                Duration:
                {course.duration}
              </p>
            </div>
          )
        )}
      </div>
    </section>
  );
}