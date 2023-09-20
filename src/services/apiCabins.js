import supabase from "./supabase";

export async function getCabins() {
  const { data, error } = await supabase.from("cabins").select("*");

  if (error) {
    console.error(error);
    throw new Error("Cabins could not be loaded");
  }

  return data;
}

export async function createEditCabin(newCabin, id) {
  // Look if image has changed or not, if cabin has to be updated
  const hasImagePath = newCabin.image?.startsWith?.(
    import.meta.env.VITE_SUPABASE_URL
  );

  // Create image name and replace '/' with '' to avoid path error in supabsae
  const imageName = `${Math.random()}-${newCabin.image.name}`.replace("/", "");

  // Create image path, if image already exists in supabase and is not changed while updating the cabin than set it to that path else create new path
  const imagePath = hasImagePath
    ? newCabin.image
    : `${
        import.meta.env.VITE_SUPABASE_URL
      }/storage/v1/object/public/cabin-images/${imageName}`;

  // Create query
  let query = supabase.from("cabins");

  // if no id exists than create new row
  if (!id) {
    query = query.insert([{ ...newCabin, image: imagePath }]).select();
  }

  // If id already exists than update that specified id row
  if (id) {
    query = query
      .update({ ...newCabin, image: imagePath })
      .eq("id", id)
      .select();
  }

  // Execute the query
  const { data, error } = await query.select().single();

  // if Error throw it
  if (error) {
    console.error(error);
    throw new Error("Cabins could not be Created");
  }

  if (hasImagePath) return data;

  // 2. Upload image

  const { error: storageError } = await supabase.storage
    .from("cabin-images")
    .upload(imageName, newCabin.image);

  // 3. Delete the cabin If there was an error while uploading an image
  if (storageError) {
    await supabase.from("cabins").delete().eq("id", data.id);
    console.error(storageError);
    throw new Error(
      "Cabin image could not be uploaded and the cabin was not created"
    );
  }

  // return the data
  return data;
}

export async function deleteCabin(id) {
  const { data, error } = await supabase.from("cabins").delete().eq("id", id);

  if (error) {
    console.error(error);
    throw new Error("Cabins could not be Deleted");
  }

  return data;
}
