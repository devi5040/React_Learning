import NoProjectImage from "../assets/no-projects.png";
import Button from "./Button";
function NoProjectSelected({ onStartAddProject }) {
  return (
    <div className="mt-24 w-2/3 text-center">
      <img
        src={NoProjectImage}
        alt="/no projects"
        className="w-16 h-16 mx-auto object-contain"
      />
      <h2 className="text-xl font-bold text-stone-500 my-4">
        No Project Selected
      </h2>
      <p className="text-stone-400 mb-4">
        Select an existing project or create new
      </p>
      <p className="mt-8">
        <Button onClick={onStartAddProject}>Create New Project</Button>
      </p>
    </div>
  );
}

export default NoProjectSelected;
