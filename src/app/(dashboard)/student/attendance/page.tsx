'use client';

import { useEffect } from 'react';

export default function Attendance() {
    useEffect(() => {
        const toggleDropdown = () => {
            const dropdown = document.getElementById('dropdownMenu');
            dropdown?.classList.toggle('hidden');
        };

        const dropdownButton = document.getElementById('dropdownButton');
        const dropdownMenu = document.getElementById('dropdownMenu');

        dropdownButton?.addEventListener('click', (event) => {
            event.stopPropagation();
            toggleDropdown();
        });

        document.addEventListener('click', (event) => {
            if (
                dropdownMenu &&
                !dropdownMenu.contains(event.target as Node) &&
                event.target !== dropdownButton
            ) {
                dropdownMenu.classList.add('hidden');
            }
        });

        return () => {
            dropdownButton?.removeEventListener('click', () => { });
        };
    }, []);

    return (
        <div>
            <div className="relative flex items-center justify-center mb-4">
                <h1 className="text-lg sm:text-2xl font-bold">Attendance</h1>

                {/* Advance Search Button */}
                <button
                    id="dropdownButton"
                    className="absolute right-0 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                >
                    Advance Search
                </button>
            </div>


            {/* Advance Search Dropdown */}
            <div
                id="dropdownMenu"
                className="hidden absolute right-0 mt-2 w-64 bg-white shadow-lg rounded-lg p-4 z-10"
            >
                <h3 className="text-lg font-bold mb-4">Advance Search</h3>
                <select className="w-full p-2 border border-gray-300 rounded mb-2">
                    <option>Select Semester</option>
                    <option>Semester 1</option>
                    <option>Semester 2</option>
                    <option>Semester 3</option>
                </select>
                <select className="w-full p-2 border border-gray-300 rounded mb-2">
                    <option>Select Course</option>
                    <option>DBMS</option>
                    <option>Operating System</option>
                </select>
                <label htmlFor="from">From</label>
                <input type="date" className="w-full p-2 border border-gray-300 rounded mb-4" />
                <label htmlFor="to">To</label>
                <input type="date" className="w-full p-2 border border-gray-300 rounded mb-4" />
                <button className="px-4 py-2 bg-blue-500 text-white rounded w-full">Apply</button>
            </div>

            {/* Subject Dropdown */}
            <div className="flex justify-center mb-3">
                <select className="p-2 border border-gray-300 rounded w-full max-w-[400px] text-sm">
                    <option>Select Subject</option>
                </select>
            </div>

            {/* Attendance Table */}
            <div className="w-full overflow-x-auto">
                <table className="w-full border-collapse min-w-[600px] text-sm">
                    <thead>
                        <tr className="bg-blue-500 text-white text-center">
                            <th className="p-3">Course Name</th>
                            <th className="p-3">Course Code</th>
                            <th className="p-3">Attended / Total Classes</th>
                            <th className="p-3">Attendance %</th>
                            <th className="p-3">Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="bg-white text-black border-b border-gray-300 text-center">
                            <td className="p-3">Example Course</td>
                            <td className="p-3">ABC123</td>
                            <td className="p-3">10 / 15</td>
                            <td className="p-3">66.7%</td>
                            <td className="p-3">2025-03-22</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}
