import supabase, { supabaseUrl } from "./supabase";

export async function getCabins() {
  let { data, error } = await supabase.from("cabins").select("*");

  if (error) {
    console.error(error);
    throw new Error("Cabins could not be loaded");
  }

  return data;
}

// cabin - (004).jpg;

export async function createEditCabin(newCabin, id) {
  const hasImage = newCabin.image?.startsWith?.(supabaseUrl);
  const imageName = `${Math.random()}-${newCabin.image.name}`.replaceAll(
    "/",
    ""
  );
  const imagePath = hasImage
    ? newCabin.image
    : `${supabaseUrl}/storage/v1/object/public/cabin-images/${imageName}`;
  // 1.Create/Edit cabin
  let query = supabase.from("cabins");
  //a. create
  if (!id) query = query.insert([{ ...newCabin, image: imagePath }]);
  //b. edit
  if (id) query = query.update({ ...newCabin, image: imagePath }).eq("id", id);

  const { data, error } = await query.select().single();
  if (error) {
    console.error(error);
    throw new Error("Cabins could not be created");
  }
  // 2.upload image
  if (hasImage) return data;
  const { error: StorageError } = await supabase.storage
    .from("cabin-images")
    .upload(imageName, newCabin.image);

  // 3.delete for unsuccesful uploads
  if (StorageError) {
    await supabase.from("cabins").delete().eq("id", data.id);
    console.error(StorageError);
    throw new Error("Cabin image could not be uploaded");
  }

  return data;
}

export async function deleteCabin(id) {
  const { data, error } = await supabase.from("cabins").delete().eq("id", id);

  if (error) {
    console.error(error);
    throw new Error("Cabins could not be deleted");
  }
  console.log(data);
  return data;
}
