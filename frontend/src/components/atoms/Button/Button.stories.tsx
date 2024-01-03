import React from "react";

import { Button } from "./Button";

export default {
  title: 'atom/Button',
  component: Button
}

export const Default = () => <Button onClick={() => alert('test')}>Click me</Button>
