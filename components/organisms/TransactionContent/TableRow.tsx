import Link from "next/link";

interface TableRowProps {
  image: string;
  title: string;
  category: string;
  item: number;
  price: number;
  status: string;
  id?: number;
}
export default function TableRow(props: TableRowProps) {
  const { image, title, category, item, price, status, id } = props;

  return (
    <tr data-category={status.toLowerCase()} className="align-middle">
      <th scope="row">
        <img
          className="float-start me-3 mb-lg-0 mb-3"
          src={`/img/${image}.png`}
          width="80"
          height="60"
          alt="img"
        />
        <div className="game-title-header">
          <p className="game-title fw-medium text-start color-palette-1 m-0">
            {title}
          </p>
          <p className="text-xs fw-normal text-start color-palette-2 m-0">
            {category}
          </p>
        </div>
      </th>
      <td>
        <p className="fw-medium color-palette-1 m-0">{item} Gold</p>
      </td>
      <td>
        <p className="fw-medium color-palette-1 m-0">{price}</p>
      </td>
      <td>
        <div>
          <span
            className={`float-start icon-status ${status.toLowerCase()}`}
          ></span>
          <p className="fw-medium text-start color-palette-1 m-0 position-relative">
            {status}
          </p>
        </div>
      </td>
      <td>
        <Link href={`/member/transactions-detail/${id}`}>
          <a className="btn btn-status rounded-pill text-sm">Details</a>
        </Link>
      </td>
    </tr>
  );
}
