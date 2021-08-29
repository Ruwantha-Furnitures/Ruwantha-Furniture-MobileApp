import React, { useMemo, useState, useReducer } from "react";
import { StyleSheet, Text, View, StatusBar, LogBox } from "react-native";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import BottomNavigator from "./src/config/BottomNavigator";
import DeliveryDriverBottomNavigator from "./src/config/DeliveryDriverBottomNavigator";
import LoggedInNavigator from "./src/config/LoggedInNavigator";
import {
  loginReducer,
  LoginContext,
} from "./src/Components/Reducers/loginReducer";
import {
  cartReducer,
  CartContext,
} from "./src/Components/Reducers/cartReducer";

const initialState = { userLevel: 1, userToken: null };
const initialCartState = {
  cartProductID: [],
  quantity: 0,
  totalAmount: 0,
  totalDiscountAmount: 0,
};
const loginContext = LoginContext;
const cartContext = CartContext;

export default function App() {
  const [userToken, setUserToken] = useState(null);
  const [userDetails, dispatch] = useReducer(loginReducer, initialState);
  const [cartDetails, dispatchCart] = useReducer(cartReducer, initialCartState);
  const value = {
    userToken,
    setUserToken,
  };

  LogBox.ignoreAllLogs();

  return (
    <loginContext.Provider value={{ userDetails, loginDispatch: dispatch }}>
      <NavigationContainer>
        {userDetails.userLevel === 1 ? (
          userDetails.userToken === null ? (
            <cartContext.Provider value={{ cartDetails, dispatchCart }}>
              <BottomNavigator />
            </cartContext.Provider>
          ) : (
            <cartContext.Provider value={{ cartDetails, dispatchCart }}>
              <LoggedInNavigator />
            </cartContext.Provider>
          )
        ) : (
          <DeliveryDriverBottomNavigator />
        )}
      </NavigationContainer>
    </loginContext.Provider>
  );
}

const styles = StyleSheet.create({});

// import React from "react";
// import * as THREE from "three";
// import ExpoTHREE from "expo-three";
// import { GLView } from "expo-gl";
// import {
//   NativeModulesProxy,
//   UnavailabilityError,
//   requireNativeViewManager,
//   CodedError,
// } from "@unimodules/core";
// const { ExponentGLObjectManager, ExponentGLViewManager } = NativeModulesProxy;
// console.disableYellowBox = true;

// export default class App extends React.Component {
//   state = {
//     loaded: false,
//     // type: Camera.Constants.Type.back,
//   };

//   render() {
//     return (
//       <GLView
//         style={{ flex: 1 }}
//         onContextCreate={this._onGLContextCreate}
//         ref={(ref) => (this._glView = ref)}
//       />
//     );
//   }

//   _onGLContextCreate = async (gl) => {
//     console.log(ExponentGLViewManager);
//     console.log(this._glView.startARSessionAsync());
//     // const arSession = await this._glView.startARSessionAsync();
//     const arSession = {
//       _U: 20,
//       _V: 20,
//       _W: 20,
//       _X: 20,
//     };
//     const scene = new THREE.Scene();
//     const camera = new THREE.PerspectiveCamera(
//       75,
//       gl.drawingBufferWidth / gl.drawingBufferHeight,
//       0.1,
//       1000
//     );

//     const renderer = new ExpoTHREE.Renderer({ gl });
//     renderer.setSize(gl.drawingBufferWidth, gl.drawingBufferHeight);

//     const geometry = new THREE.BoxGeometry(1, 1, 1);
//     const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
//     const cube = new THREE.Mesh(geometry, material);
//     scene.add(cube);
//     scene.background = ExpoTHREE.createARBackgroundTexture(arSession, renderer);
//     camera.position.z = 5;

//     const animate = () => {
//       requestAnimationFrame(animate);
//       cube.rotation.x += 0.07;
//       cube.rotation.y += 0.04;
//       renderer.render(scene, camera);
//       gl.endFrameEXP();
//     };
//     animate();
//   };
// }
