import { useRecoilState } from "recoil";
import { charCountState } from "../recoil_state";

const Count = () => {
  const count = useRecoilState(charCountState);

  return <div>Character Count: {count}</div>;
};

export default Count;
