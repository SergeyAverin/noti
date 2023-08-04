import React from "react";

import { withAuth } from "@hocs/withAuth";
import { Spinner, Center } from "@atoms/index";
import {InputLabel} from '@molecules/InputLabel/InputLabel'
import { SideBar } from "@organisms/SideBar";

const NotesPage: React.FC = () => {
  return <div>
    <SideBar />
  </div>;
};

export default withAuth(NotesPage);
