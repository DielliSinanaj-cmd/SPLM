import { useState } from "react";

function Patients() {

  const [patients, setPatients] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [editIndex, setEditIndex] = useState(null);

  const [formData, setFormData] = useState({
    name: "",
    surname: "",
    birthDate: "",
    gender: "",
    address: "",
    phone: "",
    email: "",
    personalNumber: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (editIndex !== null) {
      const updated = [...patients];
      updated[editIndex] = formData;
      setPatients(updated);
      setEditIndex(null);
    } else {
      setPatients([...patients, formData]);
    }

    setFormData({
      name: "",
      surname: "",
      birthDate: "",
      gender: "",
      address: "",
      phone: "",
      email: "",
      personalNumber: "",
    });

    setShowForm(false);
  };

  const handleDelete = (index) => {
    const updated = patients.filter((_, i) => i !== index);
    setPatients(updated);
  };

  const handleEdit = (index) => {
    setFormData(patients[index]);
    setEditIndex(index);
    setShowForm(true);
  };

  return (
    <div>

      {/* HEADER */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-green-800">Patients</h2>

        <button
          onClick={() => {
            setShowForm(true);
            setEditIndex(null);
          }}
          className="bg-green-700 hover:bg-green-800 text-white px-4 py-2 rounded"
        >
          + Add Patient
        </button>
      </div>

      {/* TABLE */}
      <div className="bg-white shadow-md rounded-lg p-4 overflow-x-auto">
        <table className="w-full text-left">
          <thead className="border-b text-gray-700">
            <tr>
              <th>Name</th>
              <th>Surname</th>
              <th>Gender</th>
              <th>Phone</th>
              <th>Email</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {patients.map((p, index) => (
              <tr key={index} className="border-b hover:bg-gray-50">
                <td>{p.name}</td>
                <td>{p.surname}</td>
                <td>{p.gender}</td>
                <td>{p.phone}</td>
                <td>{p.email}</td>

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

      {/* MODAL */}
      {showForm && (
        <div className="fixed inset-0 bg-black bg-opacity-30 flex justify-center items-center">

          <div className="bg-white p-6 rounded-lg w-[420px]">

            <h3 className="text-lg font-semibold mb-4 text-green-800">
              {editIndex !== null ? "Edit Patient" : "Add Patient"}
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
                  placeholder="Surname"
                  className="border p-2 rounded"
                  value={formData.surname}
                  onChange={(e) =>
                    setFormData({ ...formData, surname: e.target.value })
                  }
                />

                <input
                  type="date"
                  className="border p-2 rounded"
                  value={formData.birthDate}
                  onChange={(e) =>
                    setFormData({ ...formData, birthDate: e.target.value })
                  }
                />

                <select
                  className="border p-2 rounded"
                  value={formData.gender}
                  onChange={(e) =>
                    setFormData({ ...formData, gender: e.target.value })
                  }
                >
                  <option value="">Gender</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </select>

                <input
                  type="text"
                  placeholder="Phone"
                  className="border p-2 rounded"
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                />

                <input
                  type="email"
                  placeholder="Email"
                  className="border p-2 rounded"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                />

                <input
                  type="text"
                  placeholder="Address"
                  className="border p-2 rounded col-span-2"
                  value={formData.address}
                  onChange={(e) =>
                    setFormData({ ...formData, address: e.target.value })
                  }
                />

                <input
                  type="text"
                  placeholder="Personal Number"
                  className="border p-2 rounded col-span-2"
                  value={formData.personalNumber}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      personalNumber: e.target.value,
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

export default Patients;