import { useState } from "react";
import { Link } from "react-router-dom";

function TestOrders({ testTypes }) {
  const [orders, setOrders] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [editIndex, setEditIndex] = useState(null);

  const [formData, setFormData] = useState({
    testType: "",
    patient: "",
    doctor: "",
    date: "",
    status: "",
    notes: "",
    urgency: "Normal",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (editIndex !== null) {
      const updated = [...orders];
      updated[editIndex] = formData;
      setOrders(updated);
      setEditIndex(null);
    } else {
      setOrders([...orders, formData]);
    }

    setFormData({
      testType: "",
      patient: "",
      doctor: "",
      date: "",
      status: "",
      notes: "",
      urgency: "Normal",
    });

    setShowForm(false);
  };

  const handleDelete = (index) => {
    const updated = orders.filter((_, i) => i !== index);
    setOrders(updated);
  };

  const handleEdit = (index) => {
    setFormData(orders[index]);
    setEditIndex(index);
    setShowForm(true);
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-green-800">Test Orders</h2>

        <div className="flex gap-2">
          <Link
            to="/test-types"
            className="border border-green-700 text-green-800 px-4 py-2 rounded hover:bg-green-100"
          >
            Manage Test Types
          </Link>
          <button
            onClick={() => {
              setShowForm(true);
              setEditIndex(null);
            }}
            className="bg-green-700 hover:bg-green-800 text-white px-4 py-2 rounded"
          >
            + Add Order
          </button>
        </div>
      </div>

      <div className="bg-white shadow-md rounded-lg p-4 overflow-x-auto">
        <table className="w-full text-left">
          <thead className="border-b text-gray-700">
            <tr>
              <th>Test Type</th>
              <th>Patient</th>
              <th>Doctor</th>
              <th>Date</th>
              <th>Status</th>
              <th>Urgency</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {orders.map((order, index) => (
              <tr key={index} className="border-b hover:bg-gray-50">
                <td>{order.testType}</td>
                <td>{order.patient}</td>
                <td>{order.doctor}</td>
                <td>{order.date}</td>
                <td>{order.status}</td>
                <td>{order.urgency}</td>

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
              {editIndex !== null ? "Edit Order" : "Add Order"}
            </h3>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-2 gap-3">
                <select
                  className="border p-2 rounded col-span-2"
                  value={formData.testType}
                  onChange={(e) =>
                    setFormData({ ...formData, testType: e.target.value })
                  }
                >
                  <option value="">Select Test Type</option>
                  {testTypes.map((testType, index) => (
                    <option key={`${testType.name}-${index}`} value={testType.name}>
                      {testType.name}
                    </option>
                  ))}
                </select>

                <input
                  type="text"
                  placeholder="Patient"
                  className="border p-2 rounded"
                  value={formData.patient}
                  onChange={(e) =>
                    setFormData({ ...formData, patient: e.target.value })
                  }
                />

                <input
                  type="text"
                  placeholder="Doctor"
                  className="border p-2 rounded"
                  value={formData.doctor}
                  onChange={(e) =>
                    setFormData({ ...formData, doctor: e.target.value })
                  }
                />

                <input
                  type="date"
                  className="border p-2 rounded"
                  value={formData.date}
                  onChange={(e) =>
                    setFormData({ ...formData, date: e.target.value })
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
                  <option>Pending</option>
                  <option>Completed</option>
                  <option>Cancelled</option>
                </select>

                <select
                  className="border p-2 rounded"
                  value={formData.urgency}
                  onChange={(e) =>
                    setFormData({ ...formData, urgency: e.target.value })
                  }
                >
                  <option>Normal</option>
                  <option>Urgent</option>
                </select>

                <textarea
                  placeholder="Notes"
                  className="border p-2 rounded col-span-2"
                  value={formData.notes}
                  onChange={(e) =>
                    setFormData({ ...formData, notes: e.target.value })
                  }
                />
              </div>

              {testTypes.length === 0 && (
                <p className="text-sm text-amber-700">
                  No test types available yet. Add one from{" "}
                  <Link to="/test-types" className="underline">
                    Test Types
                  </Link>
                  .
                </p>
              )}

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

export default TestOrders;
