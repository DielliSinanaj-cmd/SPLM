import { useState } from "react";
import { Link } from "react-router-dom";

function TestTypes({ testTypes, setTestTypes }) {
  const [showForm, setShowForm] = useState(false);
  const [editIndex, setEditIndex] = useState(null);

  const [formData, setFormData] = useState({
    name: "",
    description: "",
    category: "",
    price: "",
    resultTime: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (editIndex !== null) {
      const updated = [...testTypes];
      updated[editIndex] = formData;
      setTestTypes(updated);
      setEditIndex(null);
    } else {
      setTestTypes([...testTypes, formData]);
    }

    setFormData({
      name: "",
      description: "",
      category: "",
      price: "",
      resultTime: "",
    });

    setShowForm(false);
  };

  const handleDelete = (index) => {
    const updated = testTypes.filter((_, i) => i !== index);
    setTestTypes(updated);
  };

  const handleEdit = (index) => {
    setFormData(testTypes[index]);
    setEditIndex(index);
    setShowForm(true);
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-green-800">Test Types</h2>

        <div className="flex gap-2">
          <Link
            to="/test-orders"
            className="border border-green-700 text-green-800 px-4 py-2 rounded hover:bg-green-100"
          >
            View Orders
          </Link>
          <button
            onClick={() => {
              setShowForm(true);
              setEditIndex(null);
            }}
            className="bg-green-700 hover:bg-green-800 text-white px-4 py-2 rounded"
          >
            + Add Test
          </button>
        </div>
      </div>

      <div className="bg-white shadow-md rounded-lg p-4 overflow-x-auto">
        <table className="w-full text-left">
          <thead className="border-b text-gray-700">
            <tr>
              <th>Name</th>
              <th>Category</th>
              <th>Price</th>
              <th>Result Time</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {testTypes.map((testType, index) => (
              <tr key={index} className="border-b hover:bg-gray-50">
                <td>{testType.name}</td>
                <td>{testType.category}</td>
                <td>{testType.price} EUR</td>
                <td>{testType.resultTime}</td>

                <td className="flex gap-2">
                  <button
                    onClick={() => handleEdit(index)}
                    className="bg-blue-500 text-white px-2 py-1 rounded"
                  >
                    Edit
                  </button>

                  <button
                    onClick={() => handleDelete(index)}
                    className="bg-red-500 text-white px-2 py-1 rounded"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {showForm && (
        <div className="fixed inset-0 bg-black bg-opacity-30 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg w-[420px]">
            <h3 className="text-lg font-semibold mb-4 text-green-800">
              {editIndex !== null ? "Edit Test" : "Add Test"}
            </h3>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-2 gap-3">
                <input
                  type="text"
                  placeholder="Name"
                  className="border p-2 rounded"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                />

                <input
                  type="text"
                  placeholder="Category"
                  className="border p-2 rounded"
                  value={formData.category}
                  onChange={(e) =>
                    setFormData({ ...formData, category: e.target.value })
                  }
                />

                <input
                  type="number"
                  placeholder="Price (EUR)"
                  className="border p-2 rounded"
                  value={formData.price}
                  onChange={(e) =>
                    setFormData({ ...formData, price: e.target.value })
                  }
                />

                <input
                  type="text"
                  placeholder="Result Time (e.g. 24h)"
                  className="border p-2 rounded"
                  value={formData.resultTime}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      resultTime: e.target.value,
                    })
                  }
                />

                <textarea
                  placeholder="Description"
                  className="border p-2 rounded col-span-2"
                  value={formData.description}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      description: e.target.value,
                    })
                  }
                />
              </div>

              <div className="flex justify-end gap-2 pt-2">
                <button
                  type="button"
                  onClick={() => setShowForm(false)}
                  className="border px-3 py-1 rounded"
                >
                  Cancel
                </button>

                <button
                  type="submit"
                  className="bg-green-700 hover:bg-green-800 text-white px-3 py-1 rounded"
                >
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default TestTypes;
