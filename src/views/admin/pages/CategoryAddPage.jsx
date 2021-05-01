import axios from "axios";
import React from "react";
import { Button } from "reactstrap";

function CategoryAddPage() {
  return (
    <div>
      <form
        className="mt-5"
        onSubmit={(e) => {
          e.preventDefault();
          axios.post("http://localhost:3100/admin/categories", {
            title: e.target[0].value,
          });
        }}
      >
        <input></input>
        <Button type="submit">Add</Button>
      </form>
    </div>
  );
}

export default CategoryAddPage;
