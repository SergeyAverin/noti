import React from "react";

import { withAuth } from "@hocs/withAuth";
import { useGetTrashQuery } from "@redux/api/libraryApi";
import { TrashPageTemplate } from "@templates/TrashPageTemplate";

const TrashPage: React.FC = () => {
  const { isLoading, data } = useGetTrashQuery();

  return <>{!isLoading && data && <TrashPageTemplate notes={data} />}</>;
};

export default withAuth(TrashPage);
