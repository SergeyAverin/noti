import React from "react";

import { Center, Spinner } from "@atoms/index";

export function withSpinner(WrappedComponent: React.FC, isLoading: boolean) {
  return function WithSpinner() {
    return (
      <>
        {!isLoading ? (
          <WrappedComponent />
        ) : (
          <Center>
            <Spinner />
          </Center>
        )}
      </>
    );
  };
}
