import {
  ButtonGroup,
  Box,
  IconButton,
  RangeSlider,
  RangeSliderFilledTrack,
  RangeSliderTrack,
  RangeSliderThumb,
  Center,
  Flex,
  Text,
} from "@chakra-ui/react";

import ReactHowler from "react-howler";
import { useEffect, useRef, useState } from "react";
import {
  MdShuffle,
  MdSkipPrevious,
  MdSkipNext,
  MdOutlinePlayCircleFilled,
  MdOutlinePauseCircleFilled,
  MdOutlineRepeat,
} from "react-icons/md";
import { useStoreActions } from "easy-peasy";

const Player = ({ songs, activeSong }) => {
  const [playing, setPlaying] = useState(true);
  const [index, setIndex] = useState(0);
  const [seek, setSeek] = useState(0);
  const [repeat, setRepeat] = useState(false);
  const [shuffle, setShuffle] = useState(false);
  const [duration, setDuration] = useState(0.0);

  const setPlayState = (value) => setPlaying(value);

  return (
    <Box>
      <Box>
        <ReactHowler playing={playing} src={activeSong?.url} />
      </Box>
      <Center color="gray.600">
        <ButtonGroup>
          <IconButton
            icon={<MdShuffle />}
            variant="link"
            outline="none"
            aria-label="shuffle"
            fontSize="24px"
            color={shuffle ? "white" : "gray.600"}
            onClick={() => setShuffle((state) => !state)}
          />
          <IconButton
            icon={<MdSkipPrevious />}
            variant="link"
            outline="none"
            aria-label="previous"
            fontSize="24px"
          />
          {!playing ? (
            <IconButton
              icon={<MdOutlinePlayCircleFilled />}
              variant="link"
              outline="none"
              aria-label="play"
              fontSize="24px"
              color="white"
              onClick={() => setPlayState(true)}
            />
          ) : (
            <IconButton
              icon={<MdOutlinePauseCircleFilled />}
              variant="link"
              outline="none"
              aria-label="pause"
              fontSize="24px"
              color="white"
              onClick={() => setPlayState(false)}
            />
          )}

          <IconButton
            icon={<MdSkipNext />}
            variant="link"
            outline="none"
            aria-label="next"
            fontSize="24px"
          />
          <IconButton
            icon={<MdOutlineRepeat />}
            variant="link"
            outline="none"
            aria-label="repeat"
            fontSize="24px"
            color={repeat ? "white" : "gray.600"}
            onClick={() => setRepeat((state) => !state)}
          />
        </ButtonGroup>
      </Center>
      <Box color="gray.600">
        <Flex justify="center" align="center">
          <Box width="10%">
            <Text fontSize="x-small">
              <span>1/25{/* {formatTime(song.duration)} */}</span>
            </Text>
          </Box>
          <Box width="80%">
            <RangeSlider
              aria-label={["min", "max"]}
              step={0.1}
              min={0}
              max={300}
              id="player-range"
            >
              <RangeSliderTrack bg="gray.800" />
              <RangeSliderFilledTrack bg="gray.600" />
              <RangeSliderThumb index={0} bg="gray.600" />
            </RangeSlider>
          </Box>
          <Box width="10%" textAlign="right">
            <Text fontSize="x-small">321 </Text>
          </Box>
        </Flex>
      </Box>
    </Box>
  );
};

export default Player;
