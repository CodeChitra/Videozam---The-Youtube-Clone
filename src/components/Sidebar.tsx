import { Link } from "react-router-dom";
const MENU = [
  { title: "", values: ["Home", "Shorts", "Subscription"] },
  {
    title: "You",
    values: ["Your Channel", "History", "Your Videos", "Watch Later"],
  },
  {
    title: "Subscriptions",
    values: [
      "FreeCodeCamp",
      "Tanay Pratap",
      "CodeWithHarry",
      "Akshay Saini",
      "Academind",
      "RJ Raunak",
    ],
  },
];
const Sidebar = () => {
  return (
    <aside className="bg-black p-5 text-white border-2 flex-1 max-h-[90vh] min-h-[90vh] overflow-y-scroll overflow-x-hidden border-none rounded-sm">
      {MENU.map((menu) => {
        return (
          <ul className="flex flex-col gap-3 border-b-2 mt-3">
            {menu.title && <h3 className="text-xl font-bold">{menu.title}</h3>}
            {menu.values.map((item) => {
              return <li>{item}</li>;
            })}
          </ul>
        );
      })}
    </aside>
  );
};

export default Sidebar;
