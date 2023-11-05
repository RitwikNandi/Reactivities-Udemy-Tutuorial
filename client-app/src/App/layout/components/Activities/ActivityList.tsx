import { Button, Item, Label, List, Segment } from "semantic-ui-react";
import { Activity } from "../../../models/activity";
import { SyntheticEvent, useState } from "react";

interface ActivitiesProp {
  activities: Activity[];
  selectActivity: (id: string) => void;
  deleteActivity: (id: string) => void;
  submitting: boolean;
}

const ActivityList = ({
  activities,
  selectActivity,
  deleteActivity,
  submitting,
}: ActivitiesProp) => {
  const [target, setTarget] = useState("");

  const handleDeleteButtonClick = (e: SyntheticEvent, id: string) => {
    setTarget(e.currentTarget.name);
    deleteActivity(id);
  };

  return (
    <Segment>
      <Item.Group divided>
        {activities.map((activity) => {
          return (
            <Item key={activity.id}>
              <Item.Content>
                <Item.Header as='a'>{activity.title}</Item.Header>
                <Item.Meta>{activity.date}</Item.Meta>
                <Item.Description>
                  <div>{activity.description}</div>
                  <div>
                    {activity.city}, {activity.venue}
                  </div>
                </Item.Description>
                <Item.Extra>
                  <Button
                    onClick={() => selectActivity(activity.id)}
                    floated='right'
                    content='view'
                    color='blue'
                  />
                  <Button
                    name={activity.id}
                    loading={submitting && target === activity.id}
                    onClick={(e) => handleDeleteButtonClick(e, activity.id)}
                    floated='right'
                    content='delete'
                    color='red'
                  />
                  <Label basic content={activity.category} />
                </Item.Extra>
              </Item.Content>
            </Item>
          );
        })}
      </Item.Group>
    </Segment>
  );
};

export default ActivityList;
