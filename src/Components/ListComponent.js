import Card from "./Card";

const ListComponent = (props) => {
  return (
    <Card>
      <ul> 
        {props.users.map((user) => (
          <li key="{user.id}">
          {user.name} ({user.age} years old)
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default ListComponent;
