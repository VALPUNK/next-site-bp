import Grid from "@material-ui/core/Grid"
import Paper from "@material-ui/core/Paper"
import Typography from "@material-ui/core/Typography"
import { withInfo } from "@storybook/addon-info"
import { storiesOf } from "@storybook/react"
import * as React from "react"
import { RowRenderProps, TableCellRenderer } from "react-table"
import TableCell from "./components/TableCell"
import TableHeaderCell from "./components/TableHeaderCell"
import TableToolbar from "./components/TableToolbar"
import { data } from "./mock"
import TableWithModal from "./TableWithModal"

const columns = [
  {
    Header: <TableHeaderCell>First Name</TableHeaderCell>,
    accessor: "firstName",
    Cell: (row: RowRenderProps) => <TableCell>{row.value}</TableCell>,
  },
  {
    Header: <TableHeaderCell>Last Name</TableHeaderCell>,
    accessor: "lastName",
    Cell: (row: RowRenderProps) => <TableCell>{row.value}</TableCell>,
  },
  {
    Header: <TableHeaderCell>Profile Progress</TableHeaderCell>,
    accessor: "progress",
    Cell: (row: RowRenderProps) => <TableCell>{row.value}</TableCell>,
  },
  {
    Header: <TableHeaderCell>Status</TableHeaderCell>,
    accessor: "status",
    Cell: (row: RowRenderProps) => <TableCell>{row.value}</TableCell>,
  },
]

const Header: TableCellRenderer = () => <TableToolbar tableName="The Title" />

const Example = () => (
  <Grid container={true} justify="center" style={{ padding: 50 }}>
    <Grid item={true} xs={10} style={{ padding: 20 }}>
      <TableWithModal columns={columns} Header={Header} data={data}>
        {({ clickedData }) => {
          if (!clickedData.data || !clickedData.data.original) {
            return <div>Loading...</div>
          }
          return (
            <Paper
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: `translate(-50%, -50%)`,
                maxWidth: "80%",
                width: 600,
                padding: 16,
              }}
            >
              <Typography variant="h6" id="modal-title">
                The id is {clickedData.data.original.id}
              </Typography>
              <Typography variant="subtitle1" id="simple-modal-description">
                Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
              </Typography>
            </Paper>
          )
        }}
      </TableWithModal>
    </Grid>
  </Grid>
)
;(storiesOf("Table", module) as any)
  .addDecorator(withInfo({ text: `Description!`, inline: true }))
  .add("Table with Modal", () => <Example />)
