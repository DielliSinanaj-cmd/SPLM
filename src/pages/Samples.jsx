import { useState } from "react";

function Samples() {
  const [samples, setSamples] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [editIndex, setEditIndex] = useState(null);

  const [formData, setFormData] = useState({
    testOrderItem: "",
    sampleType: "",
    sampleCode: "",
    collectionDate: "",
    status: "",
    storage: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (editIndex !== null) {
      const updated = [...samples];
      updated[editIndex] = formData;
      setSamples(updated);
      setEditIndex(null);
    } else {
      setSamples([...samples, formData]);
    }

    setFormData({
      testOrderItem: "",
      sampleType: "",
      sampleCode: "",
      collectionDate: "",
      status: "",
      storage: "",
    });

    setShowForm(false);
  };

  const handleDelete = (index) => {
    const updated = samples.filter((_, i) => i !== index);
    setSamples(updated);
  };

  const handleEdit = (index) => {
    setFormData(samples[index]);
    setEditIndex(index);
    setShowForm(true);
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-green-800">Samples</h2>

        <button
          onClick={() => {
            setShowForm(true);
            setEditIndex(null);
          }}
          className="bg-green-700 hover:bg-green-800 text-white px-4 py-2 rounded"
        >
          + Add Sample
        </button>
      </div>

      <div className="bg-white shadow-md rounded-lg p-4 overflow-x-auto">
        <table className="w-full text-left">
          <thead className="border-b text-gray-700">
            <tr>
              <th>Order Item</th>
              <th>Sample Type</th>
              <th>Sample Code</th>
              <th>Status</th>
              <th>Storage</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {samples.map((sample, index) => (
              <tr key={index} className="border-b hover:bg-gray-50">
                <td>{sample.testOrderItem}</td>
                <td>{sample.sampleType}</td>
                <td>{sample.sampleCode}</td>
                <td>{sample.status}</td>
                <td>{sample.storage}</td>
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
              {editIndex !== null ? "Edit Sample" : "Add Sample"}
            </h3>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-2 gap-3">
                <input
                  type="text"
                  placeholder="Test Order Item"
                  className="border p-2 rounded col-span-2"
                  value={formData.testOrderItem}
                  onChange={(e) =>
                    setFormData({ ...formData, testOrderItem: e.target.value })
                  }
                />

                <input
                  type="text"
                  placeholder="Sample Type"
                  className="border p-2 rounded"
                  value={formData.sampleType}
                  onChange={(e) =>
                    setFormData({ ...formData, sampleType: e.target.value })
                  }
                />

                <input
                  type="text"
                  placeholder="Sample Code"
                  className="border p-2 rounded"
                  value={formData.sampleCode}
                  onChange={(e) =>
                    setFormData({ ...formData, sampleCode: e.target.value })
                  }
                />

                <input
                  type="date"
                  className="border p-2 rounded"
                  value={formData.collectionDate}
                  onChange={(e) =>
                    setFormData({ ...formData, collectionDate: e.target.value })
                  }
                />

                <select
                  className="border p-2 rounded"
                  value={formData.status}
                  onChange={(e) =>
                    setFormData({ ...formData, status: e.target.value })
                  }
                >
                  <option value="">Status</option>
                  <option value="Collected">Collected</option>
                  <option value="In Analysis">In Analysis</option>
                  <option value="Stored">Stored</option>
                  <option value="Rejected">Rejected</option>
                </select>

                <input
                  type="text"
                  placeholder="Storage"
                  className="border p-2 rounded col-span-2"
                  value={formData.storage}
                  onChange={(e) =>
                    setFormData({ ...formData, storage: e.target.value })
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

export default Samples;
