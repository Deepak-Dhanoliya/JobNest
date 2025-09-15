import { useEffect } from "react";

const useTitle = (title) => {
  useEffect(() => {
    document.title = `${title} - JobNest`;
  }, []);
};

export default useTitle;
