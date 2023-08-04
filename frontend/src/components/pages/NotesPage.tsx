import React from "react";

import { withAuth } from "@hocs/withAuth";
import { Spinner, Center } from "@atoms/index";
import {InputLabel} from '@molecules/InputLabel/InputLabel'
import { Trash } from "@molecules/Trash";

const NotesPage: React.FC = () => {
  return <div>
    <Trash />
  </div>;
};

export default withAuth(NotesPage);
