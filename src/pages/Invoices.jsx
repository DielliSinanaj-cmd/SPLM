import { useState } from "react";

function Invoices() {
  const [invoices, setInvoices] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [editIndex, setEditIndex] = useState(null);

  const [formData, setFormData] = useState({
    testOrder: "",
    patient: "",
    amount: "",
    discount: "",
    totalAmount: "",
    status: "",
    invoiceDate: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (editIndex !== null) {
      const updated = [...invoices];
      updated[editIndex] = formData;
      setInvoices(updated);
      setEditIndex(null);
    } else {
      setInvoices([...invoices, formData]);
    }

    setFormData({
      testOrder: "",
      patient: "",
      amount: "",
      discount: "",
      totalAmount: "",
      status: "",
      invoiceDate: "",
    });

    setShowForm(false);
  };

  const handleDelete = (index) => {
    const updated = invoices.filter((_, i) => i !== index);
    setInvoices(updated);
  };

  const handleEdit = (index) => {
    setFormData(invoices[index]);
    setEditIndex(index);
    setShowForm(true);
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-green-800">Invoices</h2>

        <button
          onClick={() => {
            setShowForm(true);
            setEditIndex(null);
          }}
          className="bg-green-700 hover:bg-green-800 text-white px-4 py-2 rounded"
        >
          + Add Invoice
        </button>
      </div>

      <div className="bg-white shadow-md rounded-lg p-4 overflow-x-auto">
        <table className="w-full text-left">
          <thead className="border-b text-gray-700">
            <tr>
              <th>Test Order</th>
              <th>Patient</th>
              <th>Total</th>
              <th>Status</th>
              <th>Invoice Date</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {invoices.map((invoice, index) => (
              <tr key={index} className="border-b hover:bg-gray-50">
                <td>{invoice.testOrder}</td>
                <td>{invoice.patient}</td>
                <td>{invoice.totalAmount} EUR</td>
                <td>{invoice.status}</td>
                <td>{invoice.invoiceDate}</td>
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
              {editIndex !== null ? "Edit Invoice" : "Add Invoice"}
            </h3>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-2 gap-3">
                <input
                  type="text"
                  placeholder="Test Order"
                  className="border p-2 rounded"
                  value={formData.testOrder}
                  onChange={(e) =>
                    setFormData({ ...formData, testOrder: e.target.value })
                  }
                />

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
                  type="number"
                  placeholder="Amount"
                  className="border p-2 rounded"
                  value={formData.amount}
                  onChange={(e) =>
                    setFormData({ ...formData, amount: e.target.value })
                  }
                />

                <input
                  type="number"
                  placeholder="Discount"
                  className="border p-2 rounded"
                  value={formData.discount}
                  onChange={(e) =>
                    setFormData({ ...formData, discount: e.target.value })
                  }
                />

                <input
                  type="number"
                  placeholder="Total Amount"
                  className="border p-2 rounded"
                  value={formData.totalAmount}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      totalAmount: e.target.value,
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
                  <option value="Paid">Paid</option>
                  <option value="Pending">Pending</option>
                  <option value="Cancelled">Cancelled</option>
                </select>

                <input
                  type="date"
                  className="border p-2 rounded col-span-2"
                  value={formData.invoiceDate}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      invoiceDate: e.target.value,
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

export default Invoices;
