import { Collection, Card, Heading, Text } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
const ActivityList = () => {

const visitNewZealand = [
    {
        title: 'Reviewed a Burger in Frankfurt',
        user:'Bob',
        datetime:'22.2.2022 14:02'
    },
    {
        title: 'Liked a post made by Bob',
        user:'Joe',
        datetime:'22.2.2022 13:02'
    },
    {
        title: 'Visited Burger World in Copenhagen',
        description:
        "This hopping town is an adventure capital and the burger sport is located right on Lake",
        user:'Cindy',
        datetime:'21.2.2022 12:52'
    },
  ];
  return (
  
      <Collection type="list" items={visitNewZealand} gap="1.5rem" width={'100%'}>
        {(item, index) => (
            <Card key={index} padding="1rem">
                <Heading level={6} fontWeight={'400'}>{item.title}</Heading>
                <Text>{item.description}</Text>
                <div className="flex-row space-between">
                   <small>{item.user}</small>
                   <small>{item.datetime}</small>
                </div>
            </Card>
        )}
      </Collection>
  )
  
}
export default ActivityList;