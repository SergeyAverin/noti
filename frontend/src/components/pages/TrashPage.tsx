import React from "react";

import { LibraryTable } from "@molecules/LibraryTable";
import { withAuth } from "@hocs/withAuth";
import { useGetTrashQuery } from "@redux/api/libraryApi";
import { Margin, Width, Button, Wrapper } from "@atoms/index";

const TrashPage: React.FC = () => {
  const { isLoading, data } = useGetTrashQuery();

  return (
    <Wrapper>
      <Button
        danger
        fill
        onClick={() => {
          alert(2);
        }}
      >
        Clean trash
      </Button>
      <Margin mt={50}>
      {!isLoading && (
        <>
          <LibraryTable columns={["Title", "Delete"]}>
            {data &&
              data.map((note) => (
                <tr>
                    <td>{note.title}</td>
                  <td>
                    <Button
                      danger
                      fill
                      onClick={() => {
                        alert(2);
                      }}
                    >
                      Delete
                    </Button>
                  </td>
                </tr>
              ))}
          </LibraryTable>
        </>
      )}
      </Margin>
    </Wrapper>
  );
};

export default withAuth(TrashPage);
