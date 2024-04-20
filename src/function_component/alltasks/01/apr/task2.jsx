


//pagination...
// import Pagination from 'react-bootstrap/Pagination';

// function AdvancedExample() {
//   return (
//     <Pagination>
//       <Pagination.First />
//       <Pagination.Prev />
//       <Pagination.Item>{1}</Pagination.Item>
//       <Pagination.Ellipsis />

//       <Pagination.Item>{10}</Pagination.Item>
//       <Pagination.Item>{11}</Pagination.Item>
//       <Pagination.Item active>{12}</Pagination.Item>
//       <Pagination.Item>{13}</Pagination.Item>
//       <Pagination.Item disabled>{14}</Pagination.Item>

//       <Pagination.Ellipsis />
//       <Pagination.Item>{20}</Pagination.Item>
//       <Pagination.Next />
//       <Pagination.Last />
//     </Pagination>
//   );
// }

// export default AdvancedExample;

import Button from 'react-bootstrap/Button';
import Spinner from 'react-bootstrap/Spinner';

function ButtonExample() {
  return (
    <>
      <Button variant="primary" disabled>
        <Spinner
          as="span"
          animation="border"
          size="sm"
          role="status"
          aria-hidden="true"
        />
        <span className="visually-hidden">Loading...</span>
      </Button>{' '}
      <Button variant="primary" disabled>
        <Spinner
          as="span"
          animation="grow"
          size="sm"
          role="status"
          aria-hidden="true"
        />
        Loading...
      </Button>
    </>
  );
}

export default ButtonExample;

 

