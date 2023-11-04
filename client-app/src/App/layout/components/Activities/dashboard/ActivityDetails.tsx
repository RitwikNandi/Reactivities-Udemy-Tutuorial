import { Button, Card, Icon, Image } from "semantic-ui-react";
import { Activity } from "../../../../models/activity";
import image from "../../../../../../public/assets/categoryImages/culture.jpg";

interface ActivityProp {
  activity: Activity;
  cancelSelectActivity: () => void;
  openForm: (id: string) => void;
}

const ActivityDetails = ({
  activity,
  cancelSelectActivity,
  openForm,
}: ActivityProp) => {
  return (
    <Card fluid>
      <Image src={image} wrapped ui={false} />
      <Card.Content>
        <Card.Header>{activity.title}</Card.Header>
        <Card.Meta>
          <span className='date'>{activity.date}</span>
        </Card.Meta>
        <Card.Description>{activity.description}</Card.Description>
      </Card.Content>
      <Card.Content extra>
        <Button.Group widths='2'>
          <Button
            onClick={() => openForm(activity.id)}
            basic
            color='blue'
            content='edit'
          />
          <Button
            onClick={cancelSelectActivity}
            basic
            color='grey'
            content='cancel'
          />
        </Button.Group>
      </Card.Content>
    </Card>
  );
};

export default ActivityDetails;
