import { useApp } from "../context/AppContext";
import Navbar from "../components/Navbar";

function Profile() {
  const { user, loading } = useApp();

  if (loading) {
    return (
      <div className="h-screen flex items-center justify-center">
        <p className="text-lg font-semibold">Loading profile...</p>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="h-screen flex items-center justify-center">
        <p className="text-lg text-red-500">User not found</p>
      </div>
    );
  }

  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-gray-100 py-10">
        <div className="max-w-3xl mx-auto bg-white rounded-lg shadow p-8">
          {/* Header */}
          <div className="flex items-center gap-4 mb-6">
            <div className="w-14 h-14 rounded-full bg-blue-600 text-white flex items-center justify-center text-2xl font-bold">
              {user.name?.charAt(0).toUpperCase()}
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-800">{user.name}</h1>
              <p className="text-sm text-gray-500">{user.email}</p>
            </div>
          </div>

          {/* Info Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <ProfileField label="Full Name" value={user.name} />
            <ProfileField label="Email Address" value={user.email} />
            <ProfileField label="Phone Number" value={user.phone || "—"} />
            <ProfileField label="Role" value={user.role} />
            <ProfileField
              label="Address"
              value={user.address || "No address added"}
              full
            />
          </div>

          {/* Action Buttons */}
          <div className="mt-8 flex gap-4">
            <button className="px-5 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition">
              Edit Profile
            </button>

            <button className="px-5 py-2 border border-gray-300 rounded hover:bg-gray-100 transition">
              Change Password
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Profile;

// Reusable field component
function ProfileField({ label, value, full = false }) {
  return (
    <div className={full ? "md:col-span-2" : ""}>
      <p className="text-sm text-gray-500 mb-1">{label}</p>
      <p className="font-medium text-gray-800 border rounded px-3 py-2 bg-gray-50">
        {value}
      </p>
    </div>
  );
}
