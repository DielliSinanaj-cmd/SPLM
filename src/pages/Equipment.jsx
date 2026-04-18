import { useState } from "react";

function Equipment() {
  const [equipment, setEquipment] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [editIndex, setEditIndex] = useState(null);

  const [formData, setFormData] = useState({
    name: "",
    type: "",
    manufacturer: "",
    calibrationDate: "",
    status: "",
    location: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (editIndex !== null) {
      const updated = [...equipment];
      updated[editIndex] = formData;
      setEquipment(updated);
      setEditIndex(null);
    } else {
      setEquipment([...equipment, formData]);
    }

    setFormData({
      name: "",
      type: "",
      manufacturer: "",
      calibrationDate: "",
      status: "",
      location: "",
    });

    setShowForm(false);
  };

  const handleDelete = (index) => {
    const updated = equipment.filter((_, i) => i !== index);
    setEquipment(updated);
  };

  const handleEdit = (index) => {
    setFormData(equipment[index]);
    setEditIndex(index);
    setShowForm(true);
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-green-800">Equipment</h2>

        <button
          onClick={() => {
            setShowForm(true);
            setEditIndex(null);
          }}
          className="bg-green-700 hover:bg-green-800 text-white px-4 py-2 rounded"
        >
          + Add Equipment
        </button>
      </div>

      <div className="bg-white shadow-md rounded-lg p-4 overflow-x-auto">
        <table className="w-full text-left">
          <thead className="border-b text-gray-700">
            <tr>
              <th>Name</th>
              <th>Type</th>
              <th>Manufacturer</th>
              <th>Status</th>
              <th>Location</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {equipment.map((item, index) => (
              <tr key={index} className="border-b hover:bg-gray-50">
                <td>{item.name}</td>
                <td>{item.type}</td>
                <td>{item.manufacturer}</td>
                <td>{item.status}</td>
                <td>{item.location}</td>
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
              {editIndex !== null ? "Edit Equipment" : "Add Equipment"}
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
                  placeholder="Type"
                  className="border p-2 rounded"
                  value={formData.type}
                  onChange={(e) =>
                    setFormData({ ...formData, type: e.target.value })
                  }
                />

                <input
                  type="text"
                  placeholder="Manufacturer"
                  className="border p-2 rounded col-span-2"
                  value={formData.manufacturer}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      manufacturer: e.target.value,
                    })
                  }
                />

                <input
                  type="date"
                  className="border p-2 rounded"
                  value={formData.calibrationDate}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      calibrationDate: e.target.value,
                    })
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
                  <option value="Available">Available</option>
                  <option value="In Use">In Use</option>
                  <option value="Maintenance">Maintenance</option>
                </select>

                <input
                  type="text"
                  placeholder="Location"
                  className="border p-2 rounded col-span-2"
                  value={formData.location}
                  onChange={(e) =>
                    setFormData({ ...formData, location: e.target.value })
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

export default Equipment;
