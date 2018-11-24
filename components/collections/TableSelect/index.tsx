import { IconButton, Toolbar, Tooltip, Typography } from "@material-ui/core"
import Paper from "@material-ui/core/Paper"
import { createStyles, Theme, withStyles } from "@material-ui/core/styles"
import { lighten } from "@material-ui/core/styles/colorManipulator"
import Table from "@material-ui/core/Table"
import TableCell from "@material-ui/core/TableCell"
import TableHead from "@material-ui/core/TableHead"
import TableRow from "@material-ui/core/TableRow"
import DeleteIcon from "@material-ui/icons/Delete"
import FilterListIcon from "@material-ui/icons/FilterList"
import classNames from "classnames"
import * as React from "react"
import ReactTable from "react-table"
import "react-table/react-table.css"

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
const toolbarStyles = (theme: Theme) =>
  createStyles({
    root: {
      paddingRight: theme.spacing.unit,
    },
    highlight:
      theme.palette.type === "light"
        ? {
            color: theme.palette.secondary.main,
            backgroundColor: lighten(theme.palette.secondary.light, 0.85),
          }
        : {
            color: theme.palette.text.primary,
            backgroundColor: theme.palette.secondary.dark,
          },
    spacer: {
      flex: "1 1 100%",
    },
    actions: {
      color: theme.palette.text.secondary,
    },
    title: {
      flex: "0 0 auto",
    },
  })

interface TableHeaderProps {
  classes?: {
    root: string
    highlight: string
    spacer: string
    actions: string
    title: string
  }
  numSelected?: number
}

const RegularToolbar = ({ numSelected, classes }: TableHeaderProps) => {
  return (
    <Toolbar
      className={classNames(classes.root, {
        [classes.highlight]: numSelected > 0,
      })}
    >
      <div className={classes.title}>
        {numSelected > 0 ? (
          <Typography color="inherit" variant="subtitle1">
            {numSelected} selected
          </Typography>
        ) : (
          <Typography variant="h6" id="tableTitle">
            Nutrition
          </Typography>
        )}
      </div>
      <div className={classes.spacer} />
      <div className={classes.actions}>
        {numSelected > 0 ? (
          <Tooltip title="Delete">
            <IconButton aria-label="Delete">
              <DeleteIcon />
            </IconButton>
          </Tooltip>
        ) : (
          <Tooltip title="Filter list">
            <IconButton aria-label="Filter list">
              <FilterListIcon />
            </IconButton>
          </Tooltip>
        )}
      </div>
    </Toolbar>
  )
}

const EnhancedTableToolbar = withStyles(toolbarStyles)(RegularToolbar)

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
            {
              firstName: "Babaa",
              lastName: "heyyoyoy",
              age: 51,
              visits: 12,
              progress: 0.42,
              status: "124123123",
            },
            {
              firstName: "right on bruh",
              lastName: "pants my man",
              age: 555,
              visits: 51,
              progress: 2.3,
              status: "123",
            },
            {
              firstName: "War everywere",
              lastName: "Penny",
              age: 555,
              visits: 51,
              progress: 2.3,
              status: "123",
            },
          ]}
          PadRowComponent={() => <Cellio>{""}</Cellio>}
          columns={[
            {
              Header: () => <EnhancedTableToolbar />,
              columns: [
                {
                  Header: () => <Cellio>First Name</Cellio>,
                  accessor: "firstName",
                  Cell: row => <Cellio>{row.value}</Cellio>,
                },
                {
                  Header: <Cellio>Last Name</Cellio>,
                  id: "lastName",
                  accessor: d => d.lastName,
                  Cell: row => <Cellio>{row.value}</Cellio>,
                },
                {
                  Header: <Cellio>Profile Progress</Cellio>,
                  accessor: "progress",

                  Cell: row => <Cellio>{row.value}</Cellio>,
                },
                {
                  Header: <Cellio>Status</Cellio>,
                  accessor: "status",

                  Cell: row => <Cellio>{row.value}</Cellio>,
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

const Cellio = ({ children }: { children: React.ReactNode }) => {
  return (
    <TableRow>
      <TableCell component="th" scope="row" style={{ borderBottomWidth: 0 }}>
        {children}
      </TableCell>
    </TableRow>
  )
}

export default withStyles(styles)(SimpleTable)
