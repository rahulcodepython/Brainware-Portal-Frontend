'use client';

export default function AcademicResource() {
    return (
        <div>
            {/* Page Title */}
            <div className="relative flex items-center justify-center mb-4">
                <h1 className="text-lg sm:text-2xl font-bold">Academic Resources</h1>
            </div>

            {/* Filter Section */}
            <div className="flex flex-wrap justify-center gap-2 mb-4 w-full text-xs">
                <select className="p-2 bg-white border border-gray-300 rounded shadow-sm flex-1 min-w-[100px]">
                    <option>Subject</option>
                </select>
                <select className="p-2 bg-white border border-gray-300 rounded shadow-sm flex-1 min-w-[100px]">
                    <option>Semester</option>
                </select>
                <select className="p-2 bg-white border border-gray-300 rounded shadow-sm flex-1 min-w-[100px]">
                    <option>Resource Type</option>
                </select>
            </div>

            {/* Table Section */}
            <div className="overflow-x-auto">
                <table className="w-full border border-gray-400 text-xs sm:text-sm">
                    <thead>
                        <tr className="bg-blue-500 text-white">
                            <th className="px-2 py-1 border">Resource Type</th>
                            <th className="px-2 py-1 border">Teacher</th>
                            <th className="px-2 py-1 border">Course Code</th>
                            <th className="px-2 py-1 border">Module</th>
                            <th className="px-2 py-1 border">Upload Date</th>
                            <th className="px-2 py-1 border">Attachment-1</th>
                            <th className="px-2 py-1 border">Attachment-2</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="text-center bg-white border-b border-gray-200">
                            <td className="px-2 py-1 border">Example Type</td>
                            <td className="px-2 py-1 border">John Doe</td>
                            <td className="px-2 py-1 border">CS101</td>
                            <td className="px-2 py-1 border">Module 1</td>
                            <td className="px-2 py-1 border">2025-03-22</td>
                            <td className="px-2 py-1 border text-blue-500 hover:underline cursor-pointer">Download</td>
                            <td className="px-2 py-1 border text-blue-500 hover:underline cursor-pointer">Download</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}
