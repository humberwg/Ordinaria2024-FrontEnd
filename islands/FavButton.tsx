import { FunctionalComponent } from "preact";
import { Video } from "../types.ts";
import { useState } from "preact/hooks";

const FavButton: FunctionalComponent<{ video: Video; userid: string }> = (
  { video, userid },
) => {
  const [fav, setFav] = useState<boolean>(video.fav);

  const doPost = async (video: Video) => {
    await fetch(
      `https://videoapp-api.deno.dev/fav/${userid}/${video.id}`,
      {
        method: "post",
      },
    );
  };
  return (
    <button
      class="fav-button"
      onClick={() => {
        doPost(video);
        if (fav) {
          setFav(false);
        } else {
          setFav(true);
        }
      }}
    >
      {fav ? "🤍 Add to Favorites" : "❤️ Remove from Favorites"}
    </button>
  );
};

export default FavButton;
