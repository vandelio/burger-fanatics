import React, {useState} from "react";
import Chip from "@mui/material/Chip";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import "../../styles/noticationCenter.css";
function NotificationCenter() {
  const [showNotificationMainCentral, setShowNotificationMainCentral] = useState(false);
  const Notification = (props) => {
    return (
      <Box
        sx={{
          width: "100%",
          padding: "5px 0",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Box>
          <Box sx={{ width: "auto", display: "flex", flexDirection: "column" }}>
            <Chip label={props.text} />
          </Box>
        </Box>
      </Box>
    );
  };
  return (
    <>
      <div
        onClick={() => {
          setShowNotificationMainCentral(true);
        }}
        className="notificationBadge"
      >
        <Chip color="primary" label="0" />
      </div>

      <Drawer
        anchor={"top"}
        open={showNotificationMainCentral}
        onClose={() => setShowNotificationMainCentral(false)}
        className="notificationDrawer"
      >
        <h2>
          Hi (Username) <br />
          <small>This is your Notification Central</small>
        </h2>
        <p>Here you can see your messages and notifications</p>
        <br />

        <div class="notificationsArea">
          <h4>You got 2 new notifications</h4>
          {[
            { text: "Chris liked your post" },
            { text: "Bobby just review a new place near you" },
          ].map((v, i) => {
            return <Notification key={i} {...v} />;
          })}
          <h4>You got 1 new messages</h4>
          {[
            {
              text: "You got a message from Burger Fanatics Introduction Team",
            },
          ].map((v, i) => {
            return <Notification key={i} {...v} />;
          })}
        </div>
      </Drawer>
    </>
  );
}

export default NotificationCenter;
