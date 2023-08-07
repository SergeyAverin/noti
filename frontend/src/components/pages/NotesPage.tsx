import React from "react";
import { useParams } from "react-router-dom";

import { withAuth } from "@hocs/withAuth";

const NotesPage: React.FC = () => {
  const params = useParams();
  
  return (
    <div>
      sdfW
    </div>
  );
};

export default withAuth(NotesPage);
