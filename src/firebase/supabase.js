import { createClient } from "@supabase/supabase-js";

const supabaseUrl =
  "https://nqnhzerejszxyrmxuwfg.supabase.co";

const supabaseKey =
  "sb_publishable_R6Wreovl3wJtDQuAE0Sc9g_8jH0kDOC";

export const supabase = createClient(
  supabaseUrl,
  supabaseKey
);