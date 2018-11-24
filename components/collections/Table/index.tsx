import Paper from "@material-ui/core/Paper"
import { createStyles, Theme, withStyles } from "@material-ui/core/styles"
import Table from "@material-ui/core/Table"
import * as React from "react"
import ReactTable from "react-table"
import "react-table/react-table.css"
import Cell from "./components/Cell"
import HeaderCell from "./components/HederCell"
import Pagination from "./components/Pagination"
import TableToolbar from "./components/TableToolbar"

const styles = (theme: Theme) =>
  createStyles({
    root: {
      width: "100%",
      marginTop: theme.spacing.unit * 3,
      overflowX: "auto",
    },
    table: {
      minWidth: 700,
    },
  })

export interface SimpleTableProps {
  classes?: {
    root?: string
    table?: string
  }
  data?: any[]
}

const SimpleTable = ({ classes, data }: SimpleTableProps) => {
  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <ReactTable
          data={data}
          PadRowComponent={() => <Cell>{""}</Cell>}
          columns={[
            {
              Header: () => <TableToolbar />,
              columns: [
                {
                  Header: () => <HeaderCell>First Name</HeaderCell>,
                  accessor: "firstName",
                  Cell: row => <Cell>{row.value}</Cell>,
                },
                {
                  Header: <HeaderCell>Last Name</HeaderCell>,
                  id: "lastName",
                  accessor: d => d.lastName,
                  Cell: row => <Cell>{row.value}</Cell>,
                },
                {
                  Header: <HeaderCell>Profile Progress</HeaderCell>,
                  accessor: "progress",

                  Cell: row => <Cell>{row.value}</Cell>,
                },
                {
                  Header: <HeaderCell>Status</HeaderCell>,
                  accessor: "status",
                  Cell: row => <Cell>{row.value}</Cell>,
                },
              ],
            },
          ]}
          PaginationComponent={Pagination}
          defaultPageSize={10}
          className="-striped -highlight"
        />
      </Table>
    </Paper>
  )
}

export default withStyles(styles)(SimpleTable)
