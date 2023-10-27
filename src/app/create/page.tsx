import CreateCourseForm from "@/components/CreateCourseForm";
import { getAuthSession } from "@/lib/auth";
import { InfoIcon } from "lucide-react";
import { redirect } from "next/navigation";
import React from "react";

type Props = {};

const CreatePage = async (props: Props) => {
  const session = await getAuthSession();
  if (!session?.user) {
    return redirect("/gallery");
  }
  return (
    <div className="flex flex-col items-start max-w-xl px-8 mx-auto my-16 sm:px-0 ">
      <h1 className="self-center text-3xl font-bold text-center sm:text-6xl">
        AI Course Forge
      </h1>
      <div className="flex p-4 mt-5 border-none bg-secondary">
        <InfoIcon className="w-12 h-12 mr-3 text-blue-400" />
        <div>
          Enter a course title or topic you wish to learn more about. Then,
          enter a list of units from the course which you want to focus on, and
          our AI-assisted course generator will do the rest.
        </div>
      </div>

      <CreateCourseForm />
    </div>
  );
};

export default CreatePage;
