import { CellValue, RowBoard } from "../utils/gameTypes";

export const BoardRow = ({
  row,
  play,
}: {
  row: RowBoard;
  play: (columnIndex: number) => void;
}) => {
  return (
    <tr>
      {row.map((cell: number | null, i: number) => (
        <Cell key={i} value={cell} columnIndex={i} play={play} />
      ))}
    </tr>
  );
};

const Cell = ({
  value,
  columnIndex,
  play,
}: {
  value: CellValue;
  columnIndex: number;
  play: (columnIndex: number) => void;
}) => {
  let color = "whiteCircle";

  if (value === 1) {
    color = "redCircle";
  } else if (value === 2) {
    color = "yellowCircle";
  }

  const flexCss = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  return (
    <td>
      <div
        style={flexCss}
        className='gameCell'
        onClick={() => {
          play(columnIndex);
        }}
      >
        <div className={color}></div>
      </div>
    </td>
  );
};
