const UserData = async () => {
  const url =
    "https://fe-take-home-assignment.s3.us-east-2.amazonaws.com/Data.json";
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Failed to fetch users");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching users:", error);
    throw error;
  }
};

export default UserData;
