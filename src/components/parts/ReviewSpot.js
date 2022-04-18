import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import Rating from "@mui/material/Rating";
import "../../styles/noticationCenter.css";

function ReviewSpot(props) {
  const [review, setReview] = useState({
    taste: null,
    texture: null,
    visual: null,
    text: "",
    spotid: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const Input = styled("input")({
    display: "none",
  });

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "80%",
    minWidth: "400px",
    maxWidth: "500px",
    bgcolor: "#f9f9f9",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

  const handleSetRatings = (int, key) => {
    let newReview = { ...review };
    newReview[key] = int;
    setReview(newReview);
  };
  const handleSetReviewText = (text) => {
    let newReview = { ...review };
    newReview.text = text;
    setReview(newReview);
  };
  const submitReview = () => {
    setSubmitted(true);
  };

  const Submitted = () => {
    return (
      <>
        <h3>Thanks for your review</h3>
        <p>It this version of Burger Fanatics we do not save the reviews yet</p>
      </>
    );
  };

  return (
    <>
      <Modal
        open={props.showReviewModal}
        onClose={() => props.setShowReviewModal(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          {submitted && <Submitted />}
          {!submitted && (
            <>
              <h3>Rate your experience </h3>

              <div className="ratingRow">
                <div>How was the taste : </div>
                <Rating
                  name="size-small"
                  onChange={(event) =>
                    handleSetRatings(event.currentTarget.value, "taste")
                  }
                  value={Number(review.taste)}
                />
              </div>
              <br />
              <div className="ratingRow">
                <div>How was the texture : </div>
                <Rating
                  name="size-small"
                  onChange={(event) =>
                    handleSetRatings(event.currentTarget.value, "texture")
                  }
                  value={Number(review.texture)}
                />
              </div>
              <br />
              <div className="ratingRow">
                <div>How was the visual experience : </div>
                <Rating
                  name="size-small"
                  onChange={(event) =>
                    handleSetRatings(event.currentTarget.value, "visual")
                  }
                  value={Number(review.visual)}
                />
              </div>
              {review.taste !== null &&
                review.texture !== null &&
                review.visual !== null && (
                  <>
                    <Box
                      sx={{
                        marginTop: "30px",
                        paddingTop: "10px",
                        borderTop: 1,
                        borderColor: "#0e6772",
                      }}
                    >
                      <h3>Type some text about your experience</h3>
                      <TextField
                        fullWidth
                        multiline
                        maxRows={4}
                        onChange={(event) =>
                          handleSetReviewText(event.currentTarget.value)
                        }
                        label="Describe the burger like it was your very last meal"
                      />

                      <label htmlFor="contained-button-file">
                        <Input
                          accept="image/*"
                          id="contained-button-file"
                          multiple
                          type="file"
                        />
                        <br />
                        <br />
                        <Button variant="outlined" component="span">
                          Attach image to review
                        </Button>
                      </label>
                    </Box>

                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        width: "100%",
                        marginTop: "20px",
                        paddingTop: "10px",
                      }}
                    >
                      <Button
                        variant="contained"
                        onClick={() => submitReview(review)}
                      >
                        Submit review
                      </Button>
                    </Box>
                  </>
                )}
              <br />
            </>
          )}
        </Box>
      </Modal>
    </>
  );
}

export default ReviewSpot;
