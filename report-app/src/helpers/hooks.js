import { useEffect } from "react";
import { useRecoilState } from "recoil";

import { tableContentAtom } from "recoil/report";

export const reportUseEffect = (key, title, pageNumber) => {
  // eslint-disable-next-line no-unused-vars
  const [_, setTableContents] = useRecoilState(tableContentAtom);

  useEffect(() => {
    if (pageNumber) {
      setTableContents((oldList) => {
        // If key exists return back
        if (oldList.find((c) => c.key === key)) {
          return oldList;
        }

        return [
          ...oldList,
          {
            key,
            title,
            page: pageNumber,
          },
        ];
      });
    }
  }, []);
};
