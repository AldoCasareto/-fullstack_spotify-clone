import prisma from "../../lib/prisma";
import { validateToken } from "../../lib/auth";
import GradientLayout from "../../components/gradientLayout";
import SongsTable from "../../components/songsTable";

const getBGColor = (id) => {
  const colors = [
    "red",
    "orange",
    "yellow",
    "green",
    "blue",
    "indigo",
    "purple",
    "teal",
  ];
  return colors[id - 1] || colors[Math.floor(Math.random() * colors.length)];
};

const PlayList = ({ playlist }) => {
  const color = getBGColor(playlist.id);
  return (
    <GradientLayout
      title={playlist.name}
      roundImage={false}
      subtitle="playlist"
      description={`${playlist.songs.length} songs`}
      color={color}
      image={`http://picsum.photos/400/400?random=${playlist.id}`}
    >
      <SongsTable songs={playlist.songs} />
    </GradientLayout>
  );
};

export const getServerSideProps = async ({ query, req }) => {
  const { id } = validateToken(req.cookies.TRAX_ACCESS_TOKEN);
  const [playlist] = await prisma.playlist.findMany({
    where: {
      id: +query.id,
      userId: id,
    },
    include: {
      songs: {
        include: {
          artist: {
            select: {
              name: true,
              id: true,
            },
          },
        },
      },
    },
  });
  return {
    props: {
      playlist,
    },
  };
};

export default PlayList;
