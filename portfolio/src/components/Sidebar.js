import React from "react"
import clsx from "clsx"
import { makeStyles } from "@material-ui/core/styles"
import Drawer from "@material-ui/core/Drawer"
// import Button from "@material-ui/core/Button"
import List from "@material-ui/core/List"
// import Divider from "@material-ui/core/Divider"
import ListItem from "@material-ui/core/ListItem"
import ListItemIcon from "@material-ui/core/ListItemIcon"
import ListItemText from "@material-ui/core/ListItemText"
import InboxIcon from "@material-ui/icons/MoveToInbox"
import MailIcon from "@material-ui/icons/Mail"
import { ScrollTo } from "react-scroll-to"

const useStyles = makeStyles({
  list: {
    width: "400px",
  },
  fullList: {
    width: "50vw",
  },
})

export default function TemporaryDrawer(props) {
  const classes = useStyles()

  const list = anchor => (
    <div
      //   className={clsx(classes.list, {
      //     [classes.fullList]: anchor === "top" || anchor === "bottom",
      //   })}
      role="presentation"
      onClick={() => props.toggleDrawer(false)}
      onKeyDown={() => props.toggleDrawer(false)}
    >
      <List>
        {["Inbox"].map((text, index) => (
          <ListItem button key={text}>
            <ul>
              <li>
                <ScrollTo>
                  {({ scroll }) => (
                    <a onClick={() => scroll({ x: 20, y: 10 })}>Home</a>
                  )}
                </ScrollTo>
              </li>
              <li>
                <ScrollTo>
                  {({ scroll }) => (
                    <a onClick={() => scroll({ x: 20, y: 600 })}>Works</a>
                  )}
                </ScrollTo>
              </li>
              <li>
                <ScrollTo>
                  {({ scroll }) => (
                    <a onClick={() => scroll({ x: 20, y: 1600 })}>Articles</a>
                  )}
                </ScrollTo>
              </li>
              <li>
                <ScrollTo>
                  {({ scroll }) => (
                    <a onClick={() => scroll({ x: 20, y: 2400 })}>About</a>
                  )}
                </ScrollTo>
              </li>
            </ul>
            {/* <ListItemIcon>
              {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
            </ListItemIcon>
            <ListItemText primary={text} /> */}
          </ListItem>
        ))}
      </List>
    </div>
  )

  return (
    <div>
      <React.Fragment>
        <Drawer
          anchor={"right"}
          open={props.open}
          onClose={() => props.toggleDrawer(false)}
          transitionDuration={600}
        >
          {list("right")}
        </Drawer>
      </React.Fragment>
    </div>
  )
}
