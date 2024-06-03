import { createRoot } from 'react-dom/client';
import React, { ReactElement } from 'react';
async function main() {
  const App: ReactElement = (
    <div>
      1
    </div>
  )

  console.log('render app')
  const container = document.createElement("div");
  const root = createRoot(container); // createRoot(container!) if you use TypeScript
  root.render(<App />);
} 

main()