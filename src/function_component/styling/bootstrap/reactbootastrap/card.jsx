


import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CustomSpinner from '../../spinner/fstspinner';
import Spiner from '../../spinner/secspinner';
import Spinner2 from '../../spinner/thrspinner';

function CustomCard({name,description,ImageUrl,spinner}) {
  return (
    <Card style={{ width: "100%"}}>
      <Card.Img variant="top" src={ImageUrl} width={100} height={200} />
      <Card.Body>
      {/* <CustomSpinner/>
      <Spiner/>
      <Spinner2/> */}
        {spinner}
        <Card.Title>{name}</Card.Title>
        <Card.Text>
          {description}
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}

export default CustomCard;