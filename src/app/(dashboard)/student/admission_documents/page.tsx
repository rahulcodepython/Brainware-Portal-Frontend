'use client';

export default function AdmissionDocumentsPage() {
    const documents = [
        "University Rule Book",
        "Anti Ragging Rule Book",
        "Download Admission Form",
        "Download Admission Letter",
        "Download ID Card",
        "Download Fee Structure",
        "Hostel Fee Information",
        "Download Regd. Certificate"
    ];

    return (
            <div>
                <h1 className="text-2xl font-bold text-center mb-6">Admission Documents</h1>
                <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {documents.map((doc, idx) => (
                        <div key={idx} className="bg-white shadow rounded p-6 text-center text-gray-700">
                            <p className="font-bold">{doc}</p>
                            <a href="#" className="bg-blue-500 text-white px-4 py-2 mt-2 rounded hover:bg-blue-700 block">Download</a>
                        </div>
                    ))}
                </div>
        </div>
    );
};