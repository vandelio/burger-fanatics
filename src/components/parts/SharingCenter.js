import {useState} from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { savePost } from "../../hooks/apiFunctions";
import { Authenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";
import "../../styles/transitions.css";

const SharingCenter = (props) => {
  const [value, setValue] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [username, setUsername] = useState("");

  return (
    <>
      <Box
        sx={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Box className="sharingBar">
          <TextField
            sx={{ width: "100%" }}
            value={value}
            direction="column"
            inputMode="text"
            name="sharingexperience"
            label="How was you last Burger experience?"
            type="text"
            wrap="nowrap"
            onChange={(e) => {
              setValue(e.currentTarget.value);
            }}
          />
          {value !== "" && (
            <Button
              variant={"outlined"}
              onClick={() => {
                setShowModal(true);
              }}
            >
              Publish!
            </Button>
          )}
        </Box>
        {showModal && (
          <Modal
            open={showModal}
            onClose={() => setShowModal(false)}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box className="sharingModalWrap">
              <Box
                sx={{ width: "100%" }}
                ariaLabel="Send it to the moon!"
                role="button"
              >
                <Authenticator>
                  {({ signOut, user }) => {
                    return (
                      <main>
                        <Box
                          sx={{ display: "flex", flexDirection: "column" }}
                          ariaLabel="Send it to the moon!"
                          role="button"
                          
                        >
                          <TextField
                            label="Which name should we display ?"
                            onClick={(event) => {
                              setUsername(event.currentTarget.value);
                            }}
                          />
                          <br />
                          <Button variant="contained"
                          onClick={() => {
                            savePost(
                              value,
                              props.feed,
                              props.setFeed,
                              user.username ? user.username : username
                            );
                          }}>Publish!</Button>

                          <br/>
                          Click outside this box to cancel
                        </Box>
                      </main>
                    );
                  }}
                </Authenticator>
              </Box>
            </Box>
          </Modal>
        )}
      </Box>
    </>
  );
};
export default SharingCenter;
