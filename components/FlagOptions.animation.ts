import { Keyframe } from "react-native-reanimated";

const keyframe = new Keyframe({
  0: {
    opacity: 0,
    transform: [{ translateY: 10 }],
  },
  100: {
    opacity: 1,
    transform: [{ translateY: 0 }],
  },
});
export default keyframe;
