import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://esxrfpvfqdkvcvriwwzp.supabase.co";

const supabaseKey =
  "sb_publishable_DwHaM8YCLzcsz68zNvqslw_zkyq5-J9";

export const supabase = createClient(
  supabaseUrl,
  supabaseKey
);