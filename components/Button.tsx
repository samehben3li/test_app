import { Pressable, Image, Text } from "react-native";

const Button = ({
  fn,
  icon,
  style,
  route,
  image,
  name,
  variant,
  globalStyles,
}: {
  fn: () => void;
  icon?: any;
  style: any;
  variant: string;
  route?: any;
  image?: any;
  name?: string;
  globalStyles: any;
}) => {
  return variant === "home" ? (
    <Pressable style={globalStyles.btn} onPress={fn}>
      <Image style={style} source={icon} />
      <Text style={globalStyles.btnText}>NEW FLAG</Text>
    </Pressable>
  ) : (
    <Pressable style={style} onPress={fn}>
      <Image
        style={[
          globalStyles.image,
          route.name === name && globalStyles.selected,
        ]}
        source={image}
      />
    </Pressable>
  );
};

export default Button;
