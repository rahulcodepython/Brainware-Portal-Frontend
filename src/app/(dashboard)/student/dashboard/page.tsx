import Section from "@/components/section";

export default function Dashboard() {
    return (
        <Section>
            <div className="text-left text-xs xl:text-sm font-semibold">
                <p>Welcome,</p>
                <p className="">Soujash Chowdhury</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-1 mt-2">
                    <p className="text-gray-600">2and Year / 4rth Sem</p>
                    <p className="text-gray-600">Student Code: BWU/BCA/23/408</p>
                    <p className="text-gray-600">Roll Number: 47856985412</p>
                    <p className="text-gray-600">Student ABC ID: 38437489482</p>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
                <div className="bg-green-500 text-white p-4 rounded-md shadow-md cursor-pointer hover:bg-green-600">
                    <h2 className="text-xl font-bold">63%</h2>
                    <p className="text-xs">Attendance</p>
                </div>
                <div className="bg-blue-500 text-white p-4 rounded-md shadow-md cursor-pointer hover:bg-blue-600">
                    <h2 className="text-l font-bold">UPCOMING FEE</h2>
                    <p className="text-xs">Payment (Rs.: 47400) [31-Jul-2025]</p>
                </div>
                <div className="bg-yellow-500 text-white p-4 rounded-md shadow-md cursor-pointer hover:bg-yellow-600">
                    <h2 className="text-xl font-bold">1</h2>
                    <p className="text-xs">Number of Activities</p>
                </div>
                <div className="bg-red-500 text-white p-4 rounded-md shadow-md cursor-pointer hover:bg-red-600">
                    <h2 className="text-xl font-bold">9.65</h2>
                    <p className="text-xs">SGPA - 3rd Semester</p>
                </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
                <button
                    className="text-sm bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-md shadow-md transition">Examination
                    Form Fill-up</button>
                <button
                    className="bg-orange-600 hover:bg-orange-700 text-white px-4 py-2 rounded-md shadow-md transition text-sm">Admit
                    Card
                    Download</button>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded-md shadow-md text-xs">
                    <h2 className="text-md font-semibold mb-2">Today{`'`}s Attendance</h2>
                    <table className="w-full border-collapse border border-gray-300">
                        <thead>
                            <tr className="bg-blue-500">
                                <th className="border border-gray-300 p-2 text-white">Course Name</th>
                                <th className="border border-gray-300 p-2 text-white">P/A</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="border border-gray-300 p-2 ">Aptitude-IV</td>
                                <td className="border border-gray-300 p-2">P</td>
                            </tr>
                            <tr>
                                <td className="border border-gray-300 p-2 ">Preparatory Paper</td>
                                <td className="border border-gray-300 p-2">P</td>
                            </tr>
                            <tr>
                                <td className="border border-gray-300 p-2">Practice Lab</td>
                                <td className="border border-gray-300 p-2">A</td>
                            </tr>
                            <tr>
                                <td className="border border-gray-300 p-2">Soft Skill Boot Camp</td>
                                <td className="border border-gray-300 p-2">P</td>
                            </tr>
                            <tr>
                                <td className="border border-gray-300 p-2">Alternative English</td>
                                <td className="border border-gray-300 p-2">A</td>
                            </tr>
                            <tr>
                                <td className="border border-gray-300 p-2">Design and Analysis of Algorithm</td>
                                <td className="border border-gray-300 p-2">P</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div className="bg-white p-4 rounded-md shadow-md text-xs">
                    <h2 className="font-semibold mb-2">Overall Attendance</h2>
                    <table className="w-full border-collapse border border-gray-300">
                        <thead>
                            <tr className="bg-blue-500 text-white">
                                <th className="border border-gray-300 p-2">Course Name</th>
                                <th className="border border-gray-300 p-2">Attendance</th>
                                <th className="border border-gray-300 p-2">Percentage</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="border border-gray-300 p-2">Aptitude-IV</td>
                                <td className="border border-gray-300 p-2">5/8</td>
                                <td className="border border-gray-300 p-2">63%</td>
                            </tr>
                            <tr>
                                <td className="border border-gray-300 p-2">Preparatory Paper</td>
                                <td className="border border-gray-300 p-2">1/1</td>
                                <td className="border border-gray-300 p-2">100%</td>
                            </tr>
                            <tr>
                                <td className="border border-gray-300 p-2">Practice Lab</td>
                                <td className="border border-gray-300 p-2">0/0</td>
                                <td className="border border-gray-300 p-2">0%</td>
                            </tr>
                            <tr>
                                <td className="border border-gray-300 p-2">Soft Skill Boot Camp</td>
                                <td className="border border-gray-300 p-2">8/14</td>
                                <td className="border border-gray-300 p-2">57%</td>
                            </tr>
                            <tr>
                                <td className="border border-gray-300 p-2">Alternative English</td>
                                <td className="border border-gray-300 p-2">0/0</td>
                                <td className="border border-gray-300 p-2">0%</td>
                            </tr>
                            <tr>
                                <td className="border border-gray-300 p-2">Design and Analysis of Algorithm</td>
                                <td className="border border-gray-300 p-2">30/47</td>
                                <td className="border border-gray-300 p-2">64%</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div className="bg-white p-4 rounded-md shadow-md text-xs">
                <h2 className="font-semibold mb-2">Latest Updates</h2>
                <table className="w-full border-collapse border border-gray-300">
                    <thead>
                        <tr className="bg-blue-500 text-white">
                            <th className="border border-gray-300 p-2">Topic</th>
                            <th className="border border-gray-300 p-2">Department</th>
                            <th className="border border-gray-300 p-2">Post By</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="text-xs">
                            <td className="border border-gray-300 p-2">Aptitude-IV</td>
                            <td className="border border-gray-300 p-2">General Announcement</td>
                            <td className="border border-gray-300 p-2">
                                HOD Dept. of Computational Sciences Head of the Department
                            </td>
                        </tr>
                        <tr className="text-xs">
                            <td className="border border-gray-300 p-2">Preparatory Paper</td>
                            <td className="border border-gray-300 p-2">General Announcement</td>
                            <td className="border border-gray-300 p-2">
                                HOD Dept. of Computational Sciences Head of the Department
                            </td>
                        </tr>
                        <tr className="text-xs">
                            <td className="border border-gray-300 p-2">Practice Lab</td>
                            <td className="border border-gray-300 p-2">General Announcement</td>
                            <td className="border border-gray-300 p-2">
                                HOD Dept. of Computational Sciences Head of the Department
                            </td>
                        </tr>
                        <tr className="text-xs">
                            <td className="border border-gray-300 p-2">Soft Skill Boot Camp</td>
                            <td className="border border-gray-300 p-2">General Announcement</td>
                            <td className="border border-gray-300 p-2">
                                HOD Dept. of Computational Sciences Head of the Department
                            </td>
                        </tr>
                        <tr className="text-xs">
                            <td className="border border-gray-300 p-2">Alternative English</td>
                            <td className="border border-gray-300 p-2">General Announcement</td>
                            <td className="border border-gray-300 p-2">
                                HOD Dept. of Computational Sciences Head of the Department
                            </td>
                        </tr>
                        <tr className="text-xs">
                            <td className="border border-gray-300 p-2">Design and Analysis of Algorithm</td>
                            <td className="border border-gray-300 p-2">General Announcement</td>
                            <td className="border border-gray-300 p-2">
                                HOD Dept. of Computational Sciences Head of the Department
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </Section>
    )
}
