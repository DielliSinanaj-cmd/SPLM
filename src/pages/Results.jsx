import { useState } from "react";

function Results() {
  const [results, setResults] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [editIndex, setEditIndex] = useState(null);

  const [formData, setFormData] = useState({
    sample: "",
    value: "",
    unit: "",
    referenceMin: "",
    referenceMax: "",
    interpretation: "",
    resultDate: "",
    validatedBy: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (editIndex !== null) {
      const updated = [...results];
      updated[editIndex] = formData;
      setResults(updated);
      setEditIndex(null);
    } else {
      setResults([...results, formData]);
    }

    setFormData({
      sample: "",
      value: "",
      unit: "",
      referenceMin: "",
      referenceMax: "",
      interpretation: "",
      resultDate: "",
      validatedBy: "",
    });

    setShowForm(false);
  };

  const handleDelete = (index) => {
    const updated = results.filter((_, i) => i !== index);
    setResults(updated);
  };

  const handleEdit = (index) => {
    setFormData(results[index]);
    setEditIndex(index);
    setShowForm(true);
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-green-800">Results</h2>

        <button
          onClick={() => {
            setShowForm(true);
            setEditIndex(null);
          }}
          className="bg-green-700 hover:bg-green-800 text-white px-4 py-2 rounded"
        >
          + Add Result
        </button>
      </div>

      <div className="bg-white shadow-md rounded-lg p-4 overflow-x-auto">
        <table className="w-full text-left">
          <thead className="border-b text-gray-700">
            <tr>
              <th>Sample</th>
              <th>Value</th>
              <th>Reference Range</th>
              <th>Result Date</th>
              <th>Validated By</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {results.map((result, index) => (
              <tr key={index} className="border-b hover:bg-gray-50">
                <td>{result.sample}</td>
                <td>
                  {result.value} {result.unit}
                </td>
                <td>
                  {result.referenceMin} - {result.referenceMax}
                </td>
                <td>{result.resultDate}</td>
                <td>{result.validatedBy}</td>
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
              {editIndex !== null ? "Edit Result" : "Add Result"}
            </h3>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-2 gap-3">
                <input
                  type="text"
                  placeholder="Sample"
                  className="border p-2 rounded col-span-2"
                  value={formData.sample}
                  onChange={(e) =>
                    setFormData({ ...formData, sample: e.target.value })
                  }
                />

                <input
                  type="number"
                  placeholder="Value"
                  className="border p-2 rounded"
                  value={formData.value}
                  onChange={(e) =>
                    setFormData({ ...formData, value: e.target.value })
                  }
                />

                <input
                  type="text"
                  placeholder="Unit"
                  className="border p-2 rounded"
                  value={formData.unit}
                  onChange={(e) =>
                    setFormData({ ...formData, unit: e.target.value })
                  }
                />

                <input
                  type="number"
                  placeholder="Reference Min"
                  className="border p-2 rounded"
                  value={formData.referenceMin}
                  onChange={(e) =>
                    setFormData({ ...formData, referenceMin: e.target.value })
                  }
                />

                <input
                  type="number"
                  placeholder="Reference Max"
                  className="border p-2 rounded"
                  value={formData.referenceMax}
                  onChange={(e) =>
                    setFormData({ ...formData, referenceMax: e.target.value })
                  }
                />

                <input
                  type="date"
                  className="border p-2 rounded"
                  value={formData.resultDate}
                  onChange={(e) =>
                    setFormData({ ...formData, resultDate: e.target.value })
                  }
                />

                <input
                  type="text"
                  placeholder="Validated By"
                  className="border p-2 rounded"
                  value={formData.validatedBy}
                  onChange={(e) =>
                    setFormData({ ...formData, validatedBy: e.target.value })
                  }
                />

                <textarea
                  placeholder="Interpretation"
                  className="border p-2 rounded col-span-2"
                  value={formData.interpretation}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      interpretation: e.target.value,
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

export default Results;
