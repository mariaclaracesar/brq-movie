import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Auth } from "@screens/Auth";
import { Home } from "@screens/Home";
import { MovieSinopse } from "@screens/MovieSinopse";
import { RoutesName } from "@utils/routesName";

const { Navigator, Screen } = createNativeStackNavigator<IStackRoutes>();

export type IStackRoutes = {
  auth: undefined;
  home: undefined;
  movie: {
    movieId: number;
  };
};

export function AppRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name={RoutesName.AUTH} component={Auth} />
      <Screen name={RoutesName.HOME} component={Home} />
      <Screen name={RoutesName.MOVIE} component={MovieSinopse} />
    </Navigator>
  );
}
