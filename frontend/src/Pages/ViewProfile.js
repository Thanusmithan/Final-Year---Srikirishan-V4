// //ViewProfile.js---------------------10.12.2024 -----------corrected
// import React, { useEffect, useState } from 'react';
// import './Css/ViewProfile.css';
// import Header from './Componets/Patientdashboard_Header';
// import Footer from './Componets/Footer';
// import { Alert } from 'react-bootstrap'; // Import Alert component from react-bootstrap

// const ViewProfile = () => {
//     const [isEditing, setIsEditing] = useState(false);
//     const [firstName, setFirstName] = useState('');
//     const [lastName, setLastName] = useState('');
//     const [email, setEmail] = useState('');
//     const [phone, setPhone] = useState('');
//     const [alertMessage, setAlertMessage] = useState('');
//     const [alertType, setAlertType] = useState(''); // 'success' or 'danger'
//     const [showAlert, setShowAlert] = useState(false); // to control the visibility of the alert

//     useEffect(() => {
//         // Fetch user data from localStorage
//         const storedUser = JSON.parse(localStorage.getItem('user'));
//         if (storedUser) {
//             setFirstName(storedUser.firstName || '');
//             setLastName(storedUser.lastName || '');
//             setEmail(storedUser.email || '');
//             setPhone(storedUser.phone || '');
//         }
//     }, []);

//     const handleSave = async () => {
//         // Validation checks
//         if (!/\S+@\S+\.\S+/.test(email)) {
//             setAlertMessage('Please enter a valid email address.');
//             setAlertType('danger');
//             setShowAlert(true);
//             return;
//         }
//         if (!/^\d{10}$/.test(phone)) {
//             setAlertMessage('Please enter a valid 10-digit phone number.');
//             setAlertType('danger');
//             setShowAlert(true);
//             return;
//         }

//         try {
//             // Assuming the backend update endpoint is `PUT /api/auth/update`
//             const token = localStorage.getItem("token");
//             const response = await fetch("http://localhost:5000/api/auth/update", {
//                 method: "PUT",
//                 headers: {
//                     "Content-Type": "application/json",
//                     Authorization: `Bearer ${token}`
//                 },
//                 body: JSON.stringify({ firstName, lastName, email, phone })
//             });

//             const data = await response.json();

//             if (response.ok) {
//                 // Update localStorage with the new user data
//                 localStorage.setItem("user", JSON.stringify(data.user));

//                 // Show success alert
//                 setAlertMessage("Profile updated successfully!");
//                 setAlertType("success");
//                 setShowAlert(true);
//                 setIsEditing(false);
//             } else {
//                 setAlertMessage(data.message || "Failed to update profile. Please try again.");
//                 setAlertType("danger");
//                 setShowAlert(true);
//             }
//         } catch (error) {
//             console.error("Error updating profile:", error);
//             setAlertMessage("Server error. Please try again later.");
//             setAlertType("danger");
//             setShowAlert(true);
//         }
//     };

//     const handleCancel = () => {
//         // Revert changes and exit edit mode
//         const storedUser = JSON.parse(localStorage.getItem('user'));
//         if (storedUser) {
//             setFirstName(storedUser.firstName);
//             setLastName(storedUser.lastName);
//             setEmail(storedUser.email);
//             setPhone(storedUser.phone);
//         }
//         setIsEditing(false);
//     };

//     return (
//         <>
//             <Header />
//             <div className="vp-page-wrapper">
//                 <div className="profile-wrapper">
//                     <div className="profile-content">
//                         <h1><span>{lastName}</span>'s Profile</h1>
//                         <p className="subtitle">View and manage your account details</p>

//                         {/* Display the alert */}
//                         {showAlert && (
//                             <Alert variant={alertType} onClose={() => setShowAlert(false)} dismissible>
//                                 {alertMessage}
//                             </Alert>
//                         )}

//                         <div className="profile-details">
//                             <div className="profile-item">
//                                 <label>First Name:</label>
//                                 {isEditing ? (
//                                     <input
//                                         type="text"
//                                         value={firstName}
//                                         onChange={(e) => setFirstName(e.target.value)}
//                                         className="input-field"
//                                     />
//                                 ) : (
//                                     <span>{firstName}</span>
//                                 )}
//                             </div>
//                             <div className="profile-item">
//                                 <label>Last Name:</label>
//                                 {isEditing ? (
//                                     <input
//                                         type="text"
//                                         value={lastName}
//                                         onChange={(e) => setLastName(e.target.value)}
//                                         className="input-field"
//                                     />
//                                 ) : (
//                                     <span>{lastName}</span>
//                                 )}
//                             </div>
//                             <div className="profile-item">
//                                 <label>Email:</label>
//                                 {isEditing ? (
//                                     <input
//                                         type="email"
//                                         value={email}
//                                         onChange={(e) => setEmail(e.target.value)}
//                                         className="input-field"
//                                     />
//                                 ) : (
//                                     <span>{email}</span>
//                                 )}
//                             </div>
//                             <div className="profile-item">
//                                 <label>Phone:</label>
//                                 {isEditing ? (
//                                     <input
//                                         type="tel"
//                                         value={phone}
//                                         onChange={(e) => setPhone(e.target.value)}
//                                         className="input-field"
//                                     />
//                                 ) : (
//                                     <span>{phone}</span>
//                                 )}
//                             </div>
//                         </div>
//                         <div className="profile-actions">
//                             {isEditing ? (
//                                 <>
//                                     <button className="btn-save" onClick={handleSave}>Save</button>
//                                     <button className="btn-cancel" onClick={handleCancel}>Cancel</button>
//                                 </>
//                             ) : (
//                                 <button className="btn-edit" onClick={() => setIsEditing(true)}>Edit Profile</button>
//                             )}
//                         </div>
//                     </div>
//                 </div>
//             </div>
//             <Footer />
//         </>
//     );
// };

// export default ViewProfile;


import React, { useEffect, useState } from 'react';
import './Css/ViewProfile.css';
import Header from './Componets/Patientdashboard_Header';
import Footer from './Componets/Footer';
import { Alert } from 'react-bootstrap'; // Import Alert component from react-bootstrap

const ViewProfile = () => {
    const [isEditing, setIsEditing] = useState(false);
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState(''); // New state for password
    const [alertMessage, setAlertMessage] = useState('');
    const [alertType, setAlertType] = useState(''); // 'success' or 'danger'
    const [showAlert, setShowAlert] = useState(false); // to control the visibility of the alert

    useEffect(() => {
        // Fetch user data from localStorage
        const storedUser = JSON.parse(localStorage.getItem('user'));
        if (storedUser) {
            setFirstName(storedUser.firstName || '');
            setLastName(storedUser.lastName || '');
            setEmail(storedUser.email || '');
            setPhone(storedUser.phone || '');
            setPassword(''); // Do not show the existing password for security
        }
    }, []);

    const handleSave = async () => {
        // Validation checks
        if (!/\S+@\S+\.\S+/.test(email)) {
            setAlertMessage('Please enter a valid email address.');
            setAlertType('danger');
            setShowAlert(true);
            return;
        }
        if (!/^\d{10}$/.test(phone)) {
            setAlertMessage('Please enter a valid 10-digit phone number.');
            setAlertType('danger');
            setShowAlert(true);
            return;
        }
        if (password && password.length < 6) {
            setAlertMessage('Password must be at least 6 characters long.');
            setAlertType('danger');
            setShowAlert(true);
            return;
        }

        try {
            // Backend update request
            const token = localStorage.getItem("token");
            const payload = { firstName, lastName, email, phone };

            // Include the password only if it's provided
            if (password) payload.password = password;

            const response = await fetch("http://localhost:5000/api/auth/update", {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`
                },
                body: JSON.stringify(payload)
            });

            const data = await response.json();

            if (response.ok) {
                // Clear localStorage and log out the user if the password was updated
                if (password) {
                    localStorage.removeItem("token");
                    localStorage.removeItem("user");
                    setAlertMessage("Profile updated successfully! Please log in again with your new password.");
                    setAlertType("success");
                    setShowAlert(true);

                    setTimeout(() => {
                        window.location.href = "/login"; // Redirect to login page
                    }, 2000);
                } else {
                    // If only other fields were updated, show success alert
                    localStorage.setItem("user", JSON.stringify(data.user));
                    setAlertMessage("Profile updated successfully!");
                    setAlertType("success");
                    setShowAlert(true);
                    setIsEditing(false);
                }
            } else {
                setAlertMessage(data.message || "Failed to update profile. Please try again.");
                setAlertType("danger");
                setShowAlert(true);
            }
        } catch (error) {
            console.error("Error updating profile:", error);
            setAlertMessage("Server error. Please try again later.");
            setAlertType("danger");
            setShowAlert(true);
        }
    };

    const handleCancel = () => {
        // Revert changes and exit edit mode
        const storedUser = JSON.parse(localStorage.getItem('user'));
        if (storedUser) {
            setFirstName(storedUser.firstName);
            setLastName(storedUser.lastName);
            setEmail(storedUser.email);
            setPhone(storedUser.phone);
            setPassword('');
        }
        setIsEditing(false);
    };

    return (
        <>
            <Header />
            <div className="vp-page-wrapper">
                <div className="profile-wrapper">
                    <div className="profile-content">
                        <h1><span>{lastName}</span>'s Profile</h1>
                        <p className="subtitle">View and manage your account details</p>

                        {/* Display the alert */}
                        {showAlert && (
                            <Alert variant={alertType} onClose={() => setShowAlert(false)} dismissible>
                                {alertMessage}
                            </Alert>
                        )}

                        <div className="profile-details">
                            <div className="profile-item">
                                <label>First Name:</label>
                                {isEditing ? (
                                    <input
                                        type="text"
                                        value={firstName}
                                        onChange={(e) => setFirstName(e.target.value)}
                                        className="input-field"
                                    />
                                ) : (
                                    <span>{firstName}</span>
                                )}
                            </div>
                            <div className="profile-item">
                                <label>Last Name:</label>
                                {isEditing ? (
                                    <input
                                        type="text"
                                        value={lastName}
                                        onChange={(e) => setLastName(e.target.value)}
                                        className="input-field"
                                    />
                                ) : (
                                    <span>{lastName}</span>
                                )}
                            </div>
                            <div className="profile-item">
                                <label>Email:</label>
                                {isEditing ? (
                                    <input
                                        type="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        className="input-field"
                                    />
                                ) : (
                                    <span>{email}</span>
                                )}
                            </div>
                            <div className="profile-item">
                                <label>Phone:</label>
                                {isEditing ? (
                                    <input
                                        type="tel"
                                        value={phone}
                                        onChange={(e) => setPhone(e.target.value)}
                                        className="input-field"
                                    />
                                ) : (
                                    <span>{phone}</span>
                                )}
                            </div>
                            <div className="profile-item">
                                <label>Password:</label>
                                {isEditing ? (
                                    <input
                                        type="password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        className="input-field"
                                        placeholder="Enter new password (optional)"
                                    />
                                ) : (
                                    <span>********</span>
                                )}
                            </div>
                        </div>
                        <div className="profile-actions">
                            {isEditing ? (
                                <>
                                    <button className="btn-save" onClick={handleSave}>Save</button>
                                    <button className="btn-cancel" onClick={handleCancel}>Cancel</button>
                                </>
                            ) : (
                                <button className="btn-edit" onClick={() => setIsEditing(true)}>Edit Profile</button>
                            )}
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default ViewProfile;
