function CollectionsPreview() {
  function SingularCollection(props) {
    return (
      <tr>
        <td> {props.name} </td>
        <td> {props.numProduct} </td>
        <td> {props.normalStock} </td>
        <td> {props.lastUdpated} </td>
      </tr>
    );
  }

  return (
    <>
      <table className="table table-hover table-sm">
        <thead className="bg-light text-black">
          <tr>
            <th scope="col">Collection name</th>
            <th scope="col"># Products in Collection</th>
            <th scope="col"># Products with Normal Stock </th>
            <th scope="col">Last Updated</th>
          </tr>
        </thead>
        <tbody>
          <SingularCollection
            name="Shampoo"
            numProduct="10"
            normalStock="6"
            lastUdpated="April 1, 2022"
          />
          <SingularCollection
            name="Conditioner"
            numProduct="11"
            normalStock="4"
            lastUdpated="April 2, 2022"
          />
        </tbody>
      </table>
    </>
  );
}

export default CollectionsPreview;
