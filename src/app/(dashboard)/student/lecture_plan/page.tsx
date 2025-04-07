'use client';

export default function LecturePlan() {

    return (
        <div>

            <h1 className="text-center text-2xl font-bold text-gray-800 mb-3">
                Lecture Plan
            </h1>

            <div className="flex flex-wrap justify-center gap-4 mb-4 w-full text-sm">
                <select className="p-2 bg-white border border-gray-300 rounded shadow-sm flex-1 min-w-[150px]">
                    <option>Semester</option>
                </select>
                <select className="p-2 bg-white border border-gray-300 rounded shadow-sm flex-1 min-w-[150px]">
                    <option>Course</option>
                </select>
            </div>

            <div className="overflow-x-auto">
                <table className="w-full border border-gray-300 shadow-md rounded-lg text-xs">
                    <thead>
                        <tr className="bg-blue-500 text-white">
                            <th className="px-4 py-2">Course</th>
                            <th className="px-4 py-2">Module No</th>
                            <th className="px-4 py-2">Lecture No</th>
                            <th className="px-4 py-2">Group</th>
                            <th className="px-4 py-2">Topic Covered</th>
                            <th className="px-4 py-2">Proposed Date</th>
                            <th className="px-4 py-2">Learning Methodology</th>
                            <th className="px-4 py-2">Reading Reference</th>
                            <th className="px-4 py-2">Focused CO</th>
                            <th className="px-4 py-2">Selected Faculty</th>
                            <th className="px-4 py-2">Lecture Taken</th>
                            <th className="px-4 py-2">Actual Date</th>
                            <th className="px-4 py-2">Methodology Used</th>
                            <th className="px-4 py-2">Actual Faculty</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="text-center bg-white border-b border-gray-200">
                            <td className="px-4 py-2">Course Name</td>
                            <td className="px-4 py-2">1</td>
                            <td className="px-4 py-2">1</td>
                            <td className="px-4 py-2">Group 2</td>
                            <td className="px-4 py-2">Topic 1</td>
                            <td className="px-4 py-2">2025-03-01</td>
                            <td className="px-4 py-2">Methodology A</td>
                            <td className="px-4 py-2">Reference XYZ</td>
                            <td className="px-4 py-2">CO1</td>
                            <td className="px-4 py-2">Dr. Jayanta Aich</td>
                            <td className="px-4 py-2">Yes</td>
                            <td className="px-4 py-2">2025-03-05</td>
                            <td className="px-4 py-2">Methodology B</td>
                            <td className="px-4 py-2">Dr. Jayanta Aich</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};