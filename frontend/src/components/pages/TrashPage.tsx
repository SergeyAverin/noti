import React from "react";

import { LibraryTable } from "@molecules/LibraryTable";
import { withAuth } from "@hocs/withAuth";
import { useGetTrashQuery, useCleanTrashMutation } from "@redux/api/libraryApi";
import { Margin, Width, Button, Wrapper } from "@atoms/index";

const TrashPage: React.FC = () => {
  const { isLoading, data } = useGetTrashQuery();
  const [cleanTrash] = useCleanTrashMutation();

  return (
    <Wrapper>
      <h1>Trash</h1>
      {data && data.length != 0 &&
      <Button danger fill onClick={() => cleanTrash()}>
        Clean trash
      </Button>
      }
      <Margin mt={30}>
        {!isLoading && data && data.length != 0 && (
          <>
            <LibraryTable columns={["Title", "Delete"]}>
              {data.map((note) => (
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
        {data && data.length == 0 && <h2>Trash is empty</h2>}
      </Margin>
    </Wrapper>
  );
};

export default withAuth(TrashPage);
