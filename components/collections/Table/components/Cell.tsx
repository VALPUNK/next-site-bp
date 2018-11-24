import TableCell from "@material-ui/core/TableCell"
import TableRow from "@material-ui/core/TableRow"
import * as React from "react"

interface CellProps {
  children: React.ReactNode
}
const Cell = ({ children }: CellProps) => {
  return (
    <TableRow>
      <TableCell style={{ borderBottomWidth: 0 }}>{children}</TableCell>
    </TableRow>
  )
}
export default Cell
