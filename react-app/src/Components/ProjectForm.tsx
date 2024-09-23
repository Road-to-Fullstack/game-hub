import { FieldValues, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useState } from "react";

const schema = z.object({
  description: z.string().min(2),
  amount: z.number().positive(),
  category: z.string().min(2),
  id: z.number().optional(),
});

type FormData = z.infer<typeof schema>;
const ProjectForm = () => {
  const [itemList, setItemList] = useState<FormData[]>([]);
  const [id, setId] = useState(0);
  const [category, setCategory] = useState("All Categories");

  const onSubmit = (data: FormData) => {
    const newData = { ...data, id };
    setItemList([...itemList, newData]); // Corrected to push the `data` directly
    setId(id + 1);
    console.log(itemList);
  };

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb3">
          <label htmlFor="desc" className="form-label">
            Description
          </label>
          <input
            {...register("description")}
            id="desc"
            type="text"
            className="form-control"
          />
          {errors.description ? <p>{errors.description.message}</p> : null}
        </div>
        <div className="mb3">
          <label htmlFor="amount" className="form-label">
            Amount
          </label>
          <input
            {...register("amount", { valueAsNumber: true })}
            id="amount"
            type="number"
            className="form-control"
          />
          {errors.amount ? <p>{errors.amount.message}</p> : null}
        </div>
        <div className="mb3">
          <label htmlFor="catergory" className="form-label">
            Category
          </label>
          <select
            {...register("category")}
            id="catergory"
            className="form-control"
          >
            <option>Groceries</option>
            <option>Utilities</option>
            <option>Entertainment</option>
          </select>
          {errors.category ? <p>{errors.category.message}</p> : null}
        </div>
        <button type="submit" className="btn btn-primary mt-3 mb-2">
          Add Item
        </button>
        <div className="mb3" hidden={true}>
          <label htmlFor="amount" className="form-label">
            Amount
          </label>
        </div>
      </form>

      <select
        onChange={(event) => {
          setCategory(event.target.value);
        }}
        className="form-control"
      >
        <option>All Categories</option>
        <option>Groceries</option>
        <option>Utilities</option>
        <option>Entertainment</option>
      </select>

      <table className="table table-light table-striped-columns table-bordered">
        <thead>
          <tr>
            <th scope="col">Description</th>
            <th scope="col">Category</th>
            <th scope="col">Amount</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          {itemList.map(
            (item) =>
              (item.category === category || category === "All Categories") && (
                <tr>
                  <th scope="row">{item.description}</th>
                  <td>{item.category}</td>
                  <td>{item.amount}</td>
                  <td>
                    <button
                      onClick={() => {
                        setItemList(itemList.filter((i) => i.id !== item.id));
                      }}
                      className="btn btn-outline-danger"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              )
          )}
        </tbody>
      </table>
    </>
  );
};

export default ProjectForm;
