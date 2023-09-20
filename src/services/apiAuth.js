import supabase from "./supabase";

export async function signup({ fullName, email, password }) {
  let { data: users } = await supabase
    .from("users")
    .select("*")
    .eq("email", email);

  const isUserExist = users.length > 0;

  if (isUserExist)
    throw new Error("Email already exists! Please use another one");

  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        fullName,
        avatar: "",
      },
    },
  });

  if (error) throw new Error(error.message);

  await supabase.from("users").insert({ email });
  return data;
}

export async function login({ email, password }) {
  let { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) throw new Error(error.message);
  return data;
}

export async function getCurrentUser() {
  const { data: session } = await supabase.auth.getSession();
  if (!session.session) return null;

  const { data, error } = await supabase.auth.getUser();

  if (error) throw new Error(error.message);

  return data?.user;
}

export async function logout() {
  const { error } = await supabase.auth.signOut();
  if (error) throw new Error(error.message);
}

export async function updateCurrentUser({ password, fullName, avatar }) {
  // 1. Update password OR fullName
  let updateData;

  // if (password) updateData = { password };
  if (password) throw new Error("Your are not allowed to update the password!");
  if (fullName) updateData = { data: { fullName } };

  const { data, error } = await supabase.auth.updateUser(updateData);

  if (error) throw new Error(error.message);

  if (!avatar) return data;

  // 2. Delete old Img
  const oldImg = data?.user?.user_metadata?.avatar?.split("/").at(-1);
  if (oldImg) {
    console.log(oldImg);
    const { error } = await supabase.storage.from("avatars").remove(oldImg);
    console.log(error);
    if (error) throw new Error("There was an error while updating user data");
  }

  // 3. Upload the new avatar image
  const fileName = `avatar-${data.user.id}-${Math.random()}`;
  const { error: storageError } = await supabase.storage
    .from("avatars")
    .upload(fileName, avatar);

  if (storageError) throw new Error(storageError.message);

  // 4. Update avatar in the user
  const { data: updatedUser, error: error2 } = await supabase.auth.updateUser({
    data: {
      avatar: `${
        import.meta.env.VITE_SUPABASE_URL
      }/storage/v1/object/public/avatars/${fileName}`,
    },
  });

  if (error2) throw new Error(error2.message);
  return updatedUser;
}
