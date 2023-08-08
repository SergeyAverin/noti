import React from "react";
import { useParams } from "react-router-dom";

import { withAuth } from "@hocs/withAuth";
import { Title } from "@molecules/Title";

const NotesPage: React.FC = () => {
  const params = useParams();
  const str  = params.slug as string
  return (
    <div>
      <Title title={str  } />
    </div>
  );
};

export default withAuth(NotesPage);
