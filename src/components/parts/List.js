import { Collection, Card, Heading, Text } from "@aws-amplify/ui-react";
import Rating from "@mui/material/Rating";
import "@aws-amplify/ui-react/styles.css";

const List = (props) => {
  const RenderRating = (props) => {
    if (!props.rating) return null;
    if (props.rating.length === 1) {
      //only once rating - for calculated
      return <Rating readOnly name="simple-controlled" value={props.rating} />;
    } else {
      //show the range of stars
      return props.rating.map((v,i) => {
        return (
          <>
            <Rating key={i} readOnly name="simple-controlled" />
          </>
        );
      });
    }
  };
  return ( 
    <Collection type="list" items={props.list} gap="1.5rem" width={"100%"}>
      {(item, index) => (
        <Card className={props.className} key={index} padding="1rem">
          <div>
            <Heading level={6} fontWeight={"400"}>
              {item.title && item.title}
            </Heading>
            <Text>{item.description || item.text}</Text>
            <small>{item.place}</small>
            <div className="flex-row space-between">
              <small>{item.user || item.place}</small>
              <small>{item.datetime}</small>
            </div>

            <div className="flex-row align-center space-between">
              <div className="flex-column align-center">
                <RenderRating rating={item.rating} />
              </div>
              {item.imagePath && (
                <img src={item.imagePath} className="spotReviewImage" />
              )}
            </div>
          </div>
        </Card>
      )}
    </Collection>
  );
};
export default List;
