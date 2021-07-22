import React from "react";
import ReactDom from "react-dom";
import * as THREE from "three";
import { View, TouchableOpacity, Text, Dimensions } from "react-native";
import { GLView } from "expo-gl";
import { Renderer } from "expo-three";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader";
import { Asset } from "expo-asset";
import { GraphicsView } from "expo-graphics";

const mobileWidth = Dimensions.get("window").width;
const mobileHeight = Dimensions.get("window").height;
const ViewProductARScreen = () => {
  return (
    <GLView
      style={{ flex: 1 }}
      // style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
      onContextCreate={async (gl: ExpoWebGLRenderingContext) => {
        console.log("run");
        const asset = Asset.fromModule(
          require("../../assets/objects/chair1.obj")
        );

        try {
          await asset.downloadAsync();
          console.log("Downloaded");
        } catch (error) {
          console.log("Not downloaded");
        }
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(
          120,
          gl.drawingBufferWidth / gl.drawingBufferHeight,
          0.1,
          2800
        );
        const renderer = new Renderer({ gl });
        renderer.setSize(gl.drawingBufferWidth, gl.drawingBufferHeight);

        const ambientLight = new THREE.AmbientLight(0x101010);
        scene.add(ambientLight);

        // const pointLight = new THREE.PointLight(0xffffff, 2, 1000, 1);
        // pointLight.position.set(0, 200, 200);
        // scene.add(pointLight);

        // const spotLight = new THREE.SpotLight(0xffffff, 0.5);
        // spotLight.position.set(0, 500, 100);
        // spotLight.lookAt(scene.position);
        // // scene.add(spotLight);

        const light = new THREE.AmbientLight(0x404040); // soft white light
        scene.add(light);
        const pointLight = new THREE.PointLight(0xff0000, 1, 100);
        pointLight.position.set(50, 50, 50);
        scene.add(pointLight);

        const spotLight = new THREE.SpotLight(0xffffff);
        spotLight.position.set(100, 1000, 100);

        spotLight.castShadow = true;

        spotLight.shadow.mapSize.width = 1024;
        spotLight.shadow.mapSize.height = 1024;

        spotLight.shadow.camera.near = 200;
        spotLight.shadow.camera.far = 4000;
        spotLight.shadow.camera.fov = 30;

        camera.position.z = 3;
        camera.position.y = 1;
        camera.position.x = 1;

        scene.add(spotLight);

        const loader = new OBJLoader();
        loader.load(
          asset.uri,
          (object) => {
            scene.add(object);
          },
          (xhr) => {},
          (err) => {
            console.log(err);
          }
        );
        const animate = () => {
          requestAnimationFrame(animate);
          renderer.render(scene, camera);
          gl.endFrameEXP();
        };
        animate();
      }}
    />
  );
};

// const styles = StyleSheet.create({});
export default ViewProductARScreen;

//------ Object Example --------------------------------

// try {
//   const scene = new THREE.Scene();
//   const camera = new THREE.PerspectiveCamera(
//     75,
//     gl.drawingBufferWidth / gl.drawingBufferHeight,
//     0.1,
//     1000
//   );
//   const renderer = new Renderer({ gl });
//   renderer.setSize(gl.drawingBufferWidth, gl.drawingBufferHeight);
//   const geometry = new THREE.BoxGeometry();
//   const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
//   const cube = new THREE.Mesh(geometry, material);
//   scene.add(cube);
//   camera.position.z = 5;
//   const animate = () => {
//     requestAnimationFrame(animate);
//     renderer.render(scene, camera);
//     gl.endFrameEXP();
//   };
//   animate();
// } catch (error) {
//   console.log(error);
// }

//------ Object Example --------------------------------

// import React, { useState, useEffect } from "react";
// import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
// import { Camera } from "expo-camera";
// import { ExpoWebGLRenderingContext, GLView } from "expo-gl";
// import { Renderer } from "expo-three";
// import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader";
// import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
// import { Asset } from "expo-asset";
// import {
//   AmbientLight,
//   PerspectiveCamera,
//   PointLight,
//   Scene,
//   SpotLight,
// } from "three";

// const ViewProductARScreen = () => {
//   // const [hasPermission, setHasPermission] = useState(null);
//   // const [type, setType] = useState(Camera.Constants.Type.back);

//   // useEffect(() => {
//   //   (async () => {
//   //     const { status } = await Camera.requestPermissionsAsync();
//   //     setHasPermission(status === "granted");
//   //   })();
//   // }, []);

//   // if (hasPermission === null) {
//   //   return <View />;
//   // }
//   // if (hasPermission === false) {
//   //   return <Text>No access to camera</Text>;
//   // // }

//   // useEffect(async () => {
//   //   // Create an Asset from a resource
//   //   const loader = new OBJLoader();
//   //   const asset = Asset.fromModule(
//   //     require("./assets/Bed_Classic_LH_N050521.obj")
//   //   );
//   //   try {
//   //     await asset.downloadAsync();
//   //     loader.load(asset.uri, (group) => {
//   //       console.log("Moddel Loaded");
//   //     });
//   //   } catch (error) {}
//   // }, []);
//   return (
//     <View style={styles.container}>
//       {/* <Camera style={styles.camera} type={type}> */}
//       <GLView
//         style={{ flex: 1 }}
//         onContextCreate={async (gl: ExpoWebGLRenderingContext) => {
//           // Create a WebGLRenderer without a DOM element
//           console.log("run");

//           const { drawingBufferWidth: width, drawingBufferHeight: height } = gl;

//           const renderer = new Renderer({ gl });
//           renderer.setSize(width, height);
//           const asset = Asset.fromModule(
//             require("./assets/Bed_Classic_LH_N050521.obj")
//           );

//           try {åå
//             await asset.downloadAsync();
//             console.log("downloaded");
//             const scene = new Scene();
//             const ambientLight = new AmbientLight(0x101010);//
//             scene.add(ambientLight);

//             const camera = new PerspectiveCamera(
//               120,
//               width / height,
//               0.01,
//               1000
//             );
//             camera.position.z = 5;
//             camera.position.y = 1.5;

//             const pointLight = new PointLight(0xffffff, 2, 1000, 1);
//             pointLight.position.set(0, 200, 200);
//             scene.add(pointLight);

//             const spotLight = new SpotLight(0xffffff, 0.5);
//             spotLight.position.set(0, 500, 100);
//             spotLight.lookAt(scene.position);
//             scene.add(spotLight);

//             const loader = new OBJLoader();
//             console.log("running");
//             console.log(asset.uri);
//             loader.load(
//               asset.uri,
//               (model) => {
//                 scene.add(model);
//                 console.log("Model Loaded");
//                 renderer.render(scene, camera);
//                 console.log("renderer finished");
//               },
//               (xhr) => {},
//               (err) => {
//                 console.log("error" + err);
//               }
//             );
//             // return asset.localUri;
//           } catch (error) {
//             console.log(error);
//           }

//           // try {
//           //   const asset = Asset.fromModule(
//           //     "../../assets/objects/bed 1/Bed Classic LH N050521/Bed Classic LH N050521.obj"
//           //   );
//           //   await asset.downloadAsync();
//           //   console.log("asset added 1");
//           // const scene = new Scene();

//           // const ambientLight = new AmbientLight(0x101010);
//           // scene.add(ambientLight);
//           // console.log("asset added 2");

//           // const pointLight = new PointLight(0xffffff, 2, 1000, 1);
//           // pointLight.position.set(0, 200, 200);
//           // scene.add(pointLight);
//           // console.log("asset added 3");

//           // const spotLight = new SpotLight(0xffffff, 0.5);
//           // spotLight.position.set(0, 500, 100);
//           // spotLight.lookAt(scene.position);
//           // scene.add(spotLight);

//           // const loader = new OBJLoader();

//           // loader.load(
//           //   asset.uri || "",
//           //   (group) => {
//           //     model = group.scene;
//           //     scene.add(model);
//           //   },
//           //   (xhr) => {
//           //     console.log(`${(xhr.loaded / xhr.total) * 100}% loaded`);
//           //   },
//           //   (error) => {
//           //     console.error("An error happened", error);
//           //   }
//           // );

//           // renderer.render(scene, camera);
//           // } catch (error) {
//           //   console.log("error" + error);
//           // }

//           // try {
//           //   await assetGlbModel.downloadAsync();
//           //   const glbLoader = new GLTFLoader();
//           //   glbLoader.load(assetGlbModel.localUri, (gltf) => {
//           //     scene.add(gltf.scene);
//           //     console.log("Model Loaded!");
//           //   });
//           // } catch (error) {
//           //   const loader = new OBJLoader();
//           //   loader.load(asset.localUri, (group) => {
//           //     // Model loaded...
//           //     console.log(group);
//           //     const renderer = new Renderer({ gl });
//           //     renderer.setSize(gl.drawingBufferWidth, gl.drawingBufferHeight);
//           //   });
//           // }
//         }}
//       />
//       {/* </Camera> */}
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
//   camera: {
//     flex: 1,
//   },
//   buttonContainer: {
//     flex: 1,
//     backgroundColor: "transparent",
//     flexDirection: "row",
//     margin: 20,
//   },
//   button: {
//     flex: 0.1,
//     alignSelf: "flex-end",
//     alignItems: "center",
//   },
//   text: {
//     fontSize: 18,
//     color: "white",
//   },
// });

// export default ViewProductARScreen;

// export default ViewProductARScreen;
