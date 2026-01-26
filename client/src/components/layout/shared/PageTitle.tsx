// components/layout/shared/PageTitle.tsx
import { useEffect } from "react";

type PageTitleProps = {
  title: string;
};

export default function PageTitle({ title }: PageTitleProps) {
  useEffect(() => {
    document.title = title;
  }, [title]);

  return null;
}
