import React from "react";
import { Button, IconButton } from "@material-tailwind/react";
import { ArrowRightIcon, ArrowLeftIcon } from "@heroicons/react/24/outline";

interface PagenationProps {
  totalPage: number;
  onPageChange: (page: number) => void;
}

function Pagenation({ totalPage, onPageChange }: PagenationProps) {
  const [active, setActive] = React.useState(1);

  const getItemProps = (index: number) =>
    ({
      style: {
        color: active === index ? "blue" : "black",
      },
      onClick: () => {
        setActive(index);
        onPageChange(index);
      },
    } as any);

  //next button
  const next = () => {
    if (active < totalPage) {
      const nextPage = active + 1;
      setActive(nextPage);
      onPageChange(nextPage);
    }
  };

  //previous button
  const prev = () => {
    if (active > 1) {
      const prevPage = active - 1;
      setActive(prevPage);
      onPageChange(prevPage);
    }
  };

  const pageButtons = [];
  if (totalPage <= 5) {
    for (let index = 1; index <= totalPage; index++) {
      pageButtons.push(
        <IconButton key={index} {...getItemProps(index)}>
          {index}
        </IconButton>
      );
    }
    //if active under the 3, it shows 5 by for
  } else if (active < 3) {
    for (let index = 1; index <= 5; index++) {
      pageButtons.push(
        <IconButton key={index} {...getItemProps(index)}>
          {index}
        </IconButton>
      );
    }
  } else {
    // If active over page 3, add ... -2 and +2
    if (active > 3) {
      pageButtons.push(<span key="startEllipsis">...</span>);
    }
    for (let index = active - 2; index <= active + 2; index++) {
      if (index > 0 && index <= totalPage) {
        pageButtons.push(
          <IconButton key={index} {...getItemProps(index)}>
            {index}
          </IconButton>
        );
      }
    }

    if (active < totalPage - 2) {
      pageButtons.push(<span key="endEllipsis">...</span>);
    }
  }

  return (
    <div className="flex items-center gap-4 w-full justify-center">
      <Button
        variant="text"
        className="flex items-center gap-2"
        onClick={prev}
        disabled={active === 1}
      >
        <ArrowLeftIcon strokeWidth={2} className="h-4 w-4" /> Previous
      </Button>
      <div className="flex items-center gap-2">{pageButtons}</div>
      <Button
        variant="text"
        className="flex items-center gap-2"
        onClick={next}
        disabled={active === totalPage}
      >
        Next
        <ArrowRightIcon strokeWidth={2} className="h-4 w-4" />
      </Button>
    </div>
  );
}

export default Pagenation;
