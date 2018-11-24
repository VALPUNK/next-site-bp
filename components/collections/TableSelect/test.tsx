import React from "react"
import ReactTable from "react-table"
import "react-table/react-table.css"
import Paper from "@material-ui/core/Paper"
import { createStyles, Theme, withStyles } from "@material-ui/core/styles"
import Table from "@material-ui/core/Table"
import TableBody from "@material-ui/core/TableBody"
import TableCell from "@material-ui/core/TableCell"
import TableHead from "@material-ui/core/TableHead"
import TableRow from "@material-ui/core/TableRow"

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

// interface person {
//   firstName?: string
//   lastName?: string
//   age?: number
//   visits?: number
//   progress?: number
//   status?: any
// }

export interface SimpleTableProps {
  classes?: {
    root?: string
    table?: string
  }
}

const SimpleTable = ({ classes }: SimpleTableProps) => {
  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <ReactTable
          data={[
            {
              firstName: "Enrico",
              lastName: "Valbuena",
              age: 14,
              visits: 5,
              progress: 0.3,
              status: "Complicated",
            },
          ]}
          columns={[
            {
              columns: [
                {
                  Header: "First Name",
                  accessor: "firstName",
                },
                {
                  Header: "Last Name",
                  id: "lastName",
                  accessor: d => d.lastName,
                },
                {
                  Header: "Profile Progress",
                  accessor: "progress",
                  Cell: row => (
                    <div
                      style={{
                        width: "100%",
                        height: "100%",
                        backgroundColor: "#dadada",
                        borderRadius: "2px",
                      }}
                    >
                      <div
                        style={{
                          width: `${row.value}%`,
                          height: "100%",
                          backgroundColor:
                            row.value > 66
                              ? "#85cc00"
                              : row.value > 33
                              ? "#ffbf00"
                              : "#ff2e00",
                          borderRadius: "2px",
                          transition: "all .2s ease-out",
                        }}
                      />
                    </div>
                  ),
                },
                {
                  Header: "Status",
                  accessor: "status",
                  Cell: row => (
                    <span>
                      <span
                        style={{
                          color:
                            row.value === "relationship"
                              ? "#ff2e00"
                              : row.value === "complicated"
                              ? "#ffbf00"
                              : "#57d500",
                          transition: "all .3s ease",
                        }}
                      >
                        &#x25cf;
                      </span>{" "}
                      {row.value === "relationship"
                        ? "In a relationship"
                        : row.value === "complicated"
                        ? `It's complicated`
                        : "Single"}
                    </span>
                  ),
                },
              ],
            },
          ]}
          defaultPageSize={10}
          className="-striped -highlight"
        />
      </Table>
    </Paper>
  )
}

export default withStyles(styles)(SimpleTable)
