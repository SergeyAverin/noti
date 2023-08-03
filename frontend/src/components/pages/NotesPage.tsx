import React from "react";

import { withAuth } from "@hocs/withAuth";
import { Spinner, Center } from "@atoms/index";
import {InputLabel} from '@molecules/InputLabel/InputLabel'
import { AccountManager } from "@molecules/AccountManager/AccountManager";

const NotesPage: React.FC = () => {
  return <div>
    <AccountManager />
  </div>;
};

export default withAuth(NotesPage);
