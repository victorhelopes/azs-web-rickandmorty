import { Button } from "../../atoms/button";
import { Icon } from "../../atoms/icon";
import { Container, PageButton, Ellipsis } from "./styles";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export const Pagination = ({
  currentPage,
  totalPages,
  onPageChange,
}: PaginationProps) => {
  const renderPages = () => {
    const pages: (number | string)[] = [];

    const firstPages = [1, 2, 3];
    const lastPages = [totalPages - 2, totalPages - 1, totalPages];
    const middlePages = [currentPage - 1, currentPage, currentPage + 1];

    const uniquePages = new Set<number>();

    firstPages.forEach((p) => p >= 1 && p <= totalPages && uniquePages.add(p));
    lastPages.forEach((p) => p >= 1 && p <= totalPages && uniquePages.add(p));
    middlePages.forEach((p) => p >= 1 && p <= totalPages && uniquePages.add(p));

    const sorted = Array.from(uniquePages).sort((a, b) => a - b);

    let last = 0;

    for (const page of sorted) {
      if (page - last > 1) {
        pages.push("ellipsis");
      }
      pages.push(page);
      last = page;
    }

    return pages;
  };

  return (
    <Container>
      <Button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        <Icon name="ChevronLeft" size="large" />
      </Button>

      {renderPages().map((page, index) =>
        page === "ellipsis" ? (
          <Ellipsis key={`ellipsis-${index}`}>…</Ellipsis>
        ) : (
          <PageButton
            key={page}
            active={page === currentPage}
            onClick={() => onPageChange(page as number)}
          >
            {page}
          </PageButton>
        )
      )}

      <Button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        <Icon name="ChevronRight" size="large" />
      </Button>
    </Container>
  );
};
