import { Collection, Card, Heading, Text } from '@aws-amplify/ui-react';
import Rating from '@mui/material/Rating';
import '@aws-amplify/ui-react/styles.css';
const List = (props) => {
  return (
  
      <Collection type="list" items={props.list} gap="1.5rem" width={'100%'}>
        {(item, index) => (
            <Card className={props.className}  key={index} padding="1rem">
                
                <div>
                  <Heading level={6} fontWeight={'400'}>{item.title}</Heading>
                  <Text>{item.description}</Text>
                  <div className="flex-row space-between">
                    <small>{item.user || item.place}</small>
                    <small>{item.datetime}</small>
                  </div>
                
                 <div className="flex-row align-center">
                  {item.rating && 
                      <Rating
                        readOnly  
                        name="simple-controlled"
                        value={item.rating}
                      />
                    }
                    {item.openinghours && <div className="openinghours">{item.openinghours}</div>}
                 </div>
                </div>
            </Card>
        )}
      </Collection>
  )
  
}
export default List;