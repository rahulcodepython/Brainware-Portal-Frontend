import React from "react";

const Marks = () => {
    const marksData = [
        {
            courseName: "Mathematics",
            courseCode: "MTH101",
            assignment1: "18/20",
            assignment2: "18/20",
            classTest1: "15/20",
            classTest2: "15/20",
            ppt: "8/10",
            additional: "-",
        },
        {
            courseName: "Physics",
            courseCode: "PHY102",
            assignment1: "16/20",
            assignment2: "16/20",
            classTest1: "17/20",
            classTest2: "17/20",
            ppt: "9/10",
            additional: "-",
        },
    ];

    return (
        <div>
            <h1 className="text-center text-2xl font-bold mb-4">Marks</h1>

            <div className="mb-4 flex flex-wrap gap-2 justify-center">
                <select className="p-2 border border-gray-300 rounded w-full max-w-[400px] text-sm">
                    <option>Select Semester</option>
                    <option>Semester 1</option>
                    <option>Semester 2</option>
                    <option>Semester 3</option>
                </select>
            </div>

            <div className="overflow-x-auto">
                <table className="w-full bg-white border border-gray-300 sm:text-base">
                    <thead>
                        <tr className="bg-blue-500 text-white text-sm">
                            <th className="px-4 py-2">Course Name</th>
                            <th className="px-4 py-2">Course Code</th>
                            <th className="px-4 py-2">Assignment 1</th>
                            <th className="px-4 py-2">Assignment 2</th>
                            <th className="px-4 py-2">Class Test 1</th>
                            <th className="px-4 py-2">Class Test 2</th>
                            <th className="px-4 py-2">PPT</th>
                            <th className="px-4 py-2">Additional</th>
                        </tr>
                    </thead>
                    <tbody className="text-gray-800">
                        {marksData.map((item, index) => (
                            <tr key={index} className="text-center text-sm">
                                <td className="px-4 py-2">{item.courseName}</td>
                                <td className="px-4 py-2">{item.courseCode}</td>
                                <td className="px-4 py-2">{item.assignment1}</td>
                                <td className="px-4 py-2">{item.assignment2}</td>
                                <td className="px-4 py-2">{item.classTest1}</td>
                                <td className="px-4 py-2">{item.classTest2}</td>
                                <td className="px-4 py-2">{item.ppt}</td>
                                <td className="px-4 py-2">{item.additional}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Marks;
