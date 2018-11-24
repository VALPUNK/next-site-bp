import * as React from "react"
import { createStyles, Theme, withStyles } from "@material-ui/core/styles"
import { IconButton, Toolbar, Tooltip, Typography } from "@material-ui/core"
import classNames from "classnames"
import DeleteIcon from "@material-ui/icons/Delete"
import FilterListIcon from "@material-ui/icons/FilterList"
import { lighten } from "@material-ui/core/styles/colorManipulator"

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

const TableToolbar = withStyles(toolbarStyles)(RegularToolbar)

export default TableToolbar
