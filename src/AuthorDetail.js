import React from "react";

const AuthorDetail = props => {
  const author = props.author;
  return (
    <div className="author col-xs-10">
      <div>
        <h3>
          {author.first_name} {author.last_name}
        </h3>
        <img
          src={author.imageUrl}
          className="img-thumbnail"
          alt={`${author.first_name} ${author.last_name}`}
        />
      </div>
      <table className="mt-3 table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Authors</th>
            <th>Color</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>I SHOULD BE A BOOK NAME</td>
            <td>I SHOULD BE THE AUTHOR OF THIS BOOK</td>
            <td>
              <button className="btn" style={{ backgroundColor: "blue" }} />
            </td>
          </tr>
          <tr>
            <td>I SHOULD BE ANOTHER BOOK NAME</td>
            <td>I SHOULD BE A STRING OF THIS OTHER BOOK'S AUTHORS</td>
            <td>
              <button className="btn" style={{ backgroundColor: "red" }} />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default AuthorDetail;
