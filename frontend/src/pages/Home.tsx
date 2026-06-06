import Navbar from "../components/layout/Navbar";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <Navbar />

      <section className="h-[80vh] flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-5xl font-bold">
            Discover Your Dream College
          </h1>

          <p className="mt-4 text-gray-600">
            Search, Compare and Save
            Colleges
          </p>

          <Link
            to="/colleges"
            className="bg-blue-600 text-white px-6 py-3 rounded mt-5 inline-block"
          >
            Explore Colleges
          </Link>
        </div>
      </section>
    </>
  );
}