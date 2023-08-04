import React from "react";

import { withAuth } from "@hocs/withAuth";
import { Spinner, Center } from "@atoms/index";
import {InputLabel} from '@molecules/InputLabel/InputLabel'
import { ToggleMenu } from "@atoms/index";

const NotesPage: React.FC = () => {
  return <div>
    <ToggleMenu text="sd">
      <div>d</div>
      <div>d</div>
      <div>d</div>
      <div>d</div>
    </ToggleMenu>
  </div>;
};

export default withAuth(NotesPage);
