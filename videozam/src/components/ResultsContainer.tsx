import { useSearchParams } from "react-router-dom";

const ResultsContainer = () => {
  const [searchParams] = useSearchParams();
  const searchQuery = searchParams.get("search_query");
  console.log(searchQuery);
  return <div className="flex-[5] p-5 h-[90vh] border-2"></div>;
};

export default ResultsContainer;
