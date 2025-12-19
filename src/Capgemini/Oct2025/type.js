const data = [
  {
    name: "John Doe",
    email: "john.doe@example.com",
    phones: ["123-45-678", "212-00-546", "9128918298"],
  },
];

function Type() {
  return (
    <table border="1" cellPadding="6">
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Phone</th>
        </tr>
      </thead>
      <tbody>
        {data.map((user) =>
          user.phones.map((phone, index) => (
            <tr key={phone}>
              {index === 0 && (
                <>
                  <td rowSpan={user.phones.length}>{user.name}</td>
                  <td rowSpan={user.phones.length}>{user.email}</td>
                </>
              )}
              <td>{phone}</td>
            </tr>
          ))
        )}
      </tbody>
    </table>
  );
}

export default Type