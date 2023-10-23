import axios from "axios";
import { useEffect, useState } from "react";
import { Header, List } from "semantic-ui-react";

function App() {
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:9000/api/activities/").then((response) => {
      setActivities(response.data);
    });
    // console.log(
    //   activities.map((activity: any) => {
    //     return <h1 key={activity.id}>{activity.title}</h1>;
    //   })
    // );
  }, []);

  return (
    <>
      <Header as='h2' iicon='users' content='Reactivities' />
      <div>
        <List>
          {activities.map((activity: any) => {
            return <List.Item key={activity.id}>{activity.title}</List.Item>;
          })}
        </List>
      </div>
    </>
  );
}

export default App;
