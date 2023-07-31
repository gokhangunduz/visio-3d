import { ReactElement } from "react";

interface IMainLayout {
  children: ReactElement | ReactElement[];
}

export default function MainLayout({ children }: IMainLayout): ReactElement {
  return (
    <html lang="en">
      <body>
        <main>{children}</main>
      </body>
    </html>
  );
}
