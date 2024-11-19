import CourseComponent from "@/app/details/fetch-courses";
import { Suspense } from "react";
import AboutCoursesSkeleton from "@/app/ui/components/skeletons/AboutCoursesSkeleton";

export default function Page() {
  return (
    <>
      <Suspense fallback={<AboutCoursesSkeleton />}>
        <CourseComponent />
      </Suspense>
    </>
  );
}
