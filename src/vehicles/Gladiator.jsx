/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 public/models/Gladiator.glb 
*/
import React, { useRef } from 'react'
import { useSnapshot } from "valtio"

import { useGLTF } from '@react-three/drei'
import { useCustomization } from '../context/Customization';
import { state } from '../components/ColorPicker';


export function Gladiator(props) {
  const { nodes, materials } = useGLTF('models/Gladiator.glb')
  const { overlay } = useCustomization()
  const snap1 = useSnapshot(state)

  const canvasRef = useRef(document.createElement("canvas"));
  const textureRef = useRef();
  const context = useRef(canvasRef.current.getContext("2d"));
console.log()

  canvasRef.current.width = 1600;
  canvasRef.current.height = 1600;

  let ctx = context.current;

  ctx.globalCompositeOperation = "hue";

  const img = document.getElementById(`overlay${overlay}`);

  if (img.complete) {
    ctx.drawImage(img, 0, 0);
    if (snap1.base.BaseMtl !== "none") {
      if(overlay!==1){
      ctx.fillStyle = snap1.base.BaseMtl;
      ctx.fillRect(0, 0, 1600, 1600);
      }
    }


    if (textureRef.current) {
      textureRef.current.needsUpdate = true;
    }
  }

  else {
    img.onload = function () {
      ctx.drawImage(img, 0, 0);
      if (snap1.base.BaseMtl !== "none") {
        if(overlay!==1){
        ctx.fillStyle = snap1.base.BaseMtl;
        ctx.fillRect(0, 0, 1600, 1600);
        }
      }
      


      if (textureRef.current) {
        textureRef.current.needsUpdate = true;
      }
    }
  }



  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Body.geometry}>
        <meshStandardMaterial {...materials.BaseMtl} color={overlay==1 || overlay==13 ? (snap1.base.BaseMtl!=="none" ? snap1.base.BaseMtl : 0xffffff) : 0xffffff}>
          <canvasTexture
            flipY={false}
            wrapS={1000}
            wrapT={1000}
            colorSpace='srgb'
            ref={textureRef}
            attach="map"
            image={canvasRef.current}
          />
        </meshStandardMaterial>
      </mesh>
      <mesh geometry={nodes.badge_01_badge_0.geometry} material={materials.badge} />
      <mesh geometry={nodes.badge_02_badge_0.geometry} material={materials.badge} />
      <mesh geometry={nodes.black_01_black_0.geometry} material={materials.black} />
      <mesh geometry={nodes.black_02_black_0.geometry} material={materials.black} />
      <mesh geometry={nodes.black_03_black_0.geometry} material={materials['black.001']} />
      <mesh geometry={nodes.black_04_black_0.geometry} material={materials.black} />
      <mesh geometry={nodes.black_05_black_0.geometry} material={materials.black} />
      <mesh geometry={nodes.black_06_black_0.geometry} material={materials.black} />
      <mesh geometry={nodes.black_07_black_0.geometry} material={materials.black} />
      <mesh geometry={nodes.black_08_black_0.geometry} material={materials.black} />
      <mesh geometry={nodes.black_09_black_0.geometry} material={materials.black} />
      <mesh geometry={nodes.black_10_black_0.geometry} material={materials.black} />
      <mesh geometry={nodes.black_11_black_0.geometry} material={materials.black} />
      <mesh geometry={nodes.black_12_black_0.geometry} material={materials.black} />
      <mesh geometry={nodes.black_m_01_black_m_0.geometry} material={materials.black_m} />
      <mesh geometry={nodes.black_m_02_black_m_0.geometry} material={materials.black_m} />
      <mesh geometry={nodes.black_m_03_black_m_0.geometry} material={materials.black_m} />
      <mesh geometry={nodes.black_m_04_black_m_0.geometry} material={materials.black_m} />
      <mesh geometry={nodes.black_m_05_black_m_0.geometry} material={materials.black_m} />
      <mesh geometry={nodes.black_m_06_black_m_0.geometry} material={materials.black_m} />
      <mesh geometry={nodes.black_m_07_black_m_0.geometry} material={materials.black_m} />
      <mesh geometry={nodes.black_m_08_black_m_0.geometry} material={materials['black_m.001']} />
      <mesh geometry={nodes.black_m_09_black_m_0.geometry} material={materials.black_m} />
      <mesh geometry={nodes.black_m_10_black_m_0.geometry} material={materials.black_m} />
      <mesh geometry={nodes.black_m_11_black_m_0.geometry} material={materials.black_m} />
      <mesh geometry={nodes.black_m_12_black_m_0.geometry} material={materials.black_m} />
      <mesh geometry={nodes.black_m_13_black_m_0.geometry} material={materials.black_m} />
      <mesh geometry={nodes.black_m_14_black_m_0.geometry} material={materials.black_m} />
      <mesh geometry={nodes.black_m_15_black_m_0.geometry} material={materials.black_m} />
      <mesh geometry={nodes.black_m_16_black_m_0.geometry} material={materials.black_m} />
      <mesh geometry={nodes.black_m_17_black_m_0.geometry} material={materials.black_m} />
      <mesh geometry={nodes.black_m_18_black_m_0.geometry} material={materials.black_m} />
      <mesh geometry={nodes.black_m_19_black_m_0.geometry} material={materials.black_m} />
      <mesh geometry={nodes.black_m_20_black_m_0.geometry} material={materials.black_m} />
      <mesh geometry={nodes.black_m_21_black_m_0.geometry} material={materials.black_m} />
      <mesh geometry={nodes.black_m_22_black_m_0.geometry} material={materials.black_m} />
      <mesh geometry={nodes.black_m_23_black_m_0.geometry} material={materials.black_m} />
      <mesh geometry={nodes.black_m_24_black_m_0.geometry} material={materials.black_m} />
      <mesh geometry={nodes.black_m_25_black_m_0.geometry} material={materials.black_m} />
      <mesh geometry={nodes.black_m_26_black_m_0.geometry} material={materials.black_m} />
      <mesh geometry={nodes.black_m_27_black_m_0.geometry} material={materials.black_m} />
      <mesh geometry={nodes.black_m_28_black_m_0.geometry} material={materials.black_m} />
      <mesh geometry={nodes.black_m_29_black_m_0.geometry} material={materials.black_m} />
      <mesh geometry={nodes.black_m_30_black_m_0.geometry} material={materials.black_m} />
      <mesh geometry={nodes.black_m_31_black_m_0.geometry} material={materials.black_m} />
      <mesh geometry={nodes.black_m_32_black_m_0.geometry} material={materials.black_m} />
      <mesh geometry={nodes.black_m_33_black_m_0.geometry} material={materials.black_m} />
      
      <mesh geometry={nodes.body_04_body_0001.geometry} material={materials.body} />
      <mesh geometry={nodes.body_05_body_0.geometry} material={materials['body.001']} />
      <mesh geometry={nodes.body_06_body_0.geometry} material={materials['body.001']} />
      <mesh geometry={nodes.body_07_body_0.geometry} material={materials['body.001']} />
      <mesh geometry={nodes.body_12_body_0.geometry} material={materials.body} />
      <mesh geometry={nodes.body_13_body_0.geometry} material={materials['body.001']} />
      <mesh geometry={nodes.body_14_body_0.geometry} material={materials.body} />
      <mesh geometry={nodes.body_15_body_0.geometry} material={materials.body} />
      <mesh geometry={nodes.body_16_body_0.geometry} material={materials['body.001']} />
      <mesh geometry={nodes.body_17_body_0.geometry} material={materials['body.001']} />
      <mesh geometry={nodes.body_18_body_0.geometry} material={materials.body} />
      <mesh geometry={nodes.brakes1_01_brakes1_0.geometry} material={materials.brakes1} />
      <mesh geometry={nodes.brakes1_02_brakes1_0.geometry} material={materials.brakes1} />
      <mesh geometry={nodes.brakes1_03_brakes1_0.geometry} material={materials.brakes1} />
      <mesh geometry={nodes.brakes1_04_brakes1_0.geometry} material={materials.brakes1} />
      <mesh geometry={nodes.chrome_01_chrome_0.geometry} material={materials['chrome.001']} />
      <mesh geometry={nodes.chrome_02_chrome_0.geometry} material={materials['chrome.001']} />
      <mesh geometry={nodes.chrome_03_chrome_0.geometry} material={materials['chrome.001']} />
      <mesh geometry={nodes.chrome_04_chrome_0.geometry} material={materials.chrome} />
      <mesh geometry={nodes.chrome_05_chrome_0.geometry} material={materials.chrome} />
      <mesh geometry={nodes.chrome_06_chrome_0.geometry} material={materials.chrome} />
      <mesh geometry={nodes.chrome_07_chrome_0.geometry} material={materials.chrome} />
      <mesh geometry={nodes.chrome_08_chrome_0.geometry} material={materials.chrome} />
      <mesh geometry={nodes.chrome_09_chrome_0.geometry} material={materials.chrome} />
      <mesh geometry={nodes.chrome_10_chrome_0.geometry} material={materials.chrome} />
      <mesh geometry={nodes.chrome_11_chrome_0.geometry} material={materials.chrome} />
      <mesh geometry={nodes.chrome_12_chrome_0.geometry} material={materials.chrome} />
      <mesh geometry={nodes.chrome_13_chrome_0.geometry} material={materials.chrome} />
      <mesh geometry={nodes.chrome_14_chrome_0.geometry} material={materials.chrome} />
      <mesh geometry={nodes.chrome_15_chrome_0.geometry} material={materials.chrome} />
      <mesh geometry={nodes.chrome_16_chrome_0.geometry} material={materials.chrome} />
      <mesh geometry={nodes.chrome_17_chrome_0.geometry} material={materials.chrome} />
      <mesh geometry={nodes.chrome_18_chrome_0.geometry} material={materials['chrome.001']} />
      <mesh geometry={nodes.chrome_19_chrome_0.geometry} material={materials['chrome.001']} />
      <mesh geometry={nodes.chrome_20_chrome_0.geometry} material={materials.chrome} />
      <mesh geometry={nodes.chrome_21_chrome_0.geometry} material={materials.chrome} />
      <mesh geometry={nodes.chrome_22_chrome_0.geometry} material={materials.chrome} />
      <mesh geometry={nodes.chrome_23_chrome_0.geometry} material={materials.chrome} />
      <mesh geometry={nodes.chrome_24_chrome_0.geometry} material={materials.chrome} />
      <mesh geometry={nodes.chrome_25_chrome_0.geometry} material={materials.chrome} />
      <mesh geometry={nodes.chrome_26_chrome_0.geometry} material={materials.chrome} />
      <mesh geometry={nodes.chrome_27_chrome_0.geometry} material={materials.chrome} />
      <mesh geometry={nodes.chrome_28_chrome_0.geometry} material={materials.chrome} />
      <mesh geometry={nodes.chrome_29_chrome_0.geometry} material={materials.chrome} />
      <mesh geometry={nodes.chrome_30_chrome_0.geometry} material={materials.chrome} />
      <mesh geometry={nodes.chrome_31_chrome_0.geometry} material={materials.chrome} />
      <mesh geometry={nodes.chrome_32_chrome_0.geometry} material={materials.chrome} />
      <mesh geometry={nodes.d_glass_01_d_glass_0.geometry} material={materials.d_glass} />
      <mesh geometry={nodes.d_glass_02_d_glass_0.geometry} material={materials['d_glass.001']} />
      <mesh geometry={nodes.d_glass_03_d_glass_0.geometry} material={materials.d_glass} />
      <mesh geometry={nodes.d_glass_04_d_glass_0.geometry} material={materials.d_glass} />
      <mesh geometry={nodes.d_red_01_d_red_0.geometry} material={materials.d_red} />
      <mesh geometry={nodes.d_red_02_d_red_0.geometry} material={materials.d_red} />
      <mesh geometry={nodes.glass_01_glass_0.geometry} material={materials['glass.001']} />
      <mesh geometry={nodes.glass_02_glass_0.geometry} material={materials['glass.001']} />
      <mesh geometry={nodes.glass_03_glass_0.geometry} material={materials.glass} />
      <mesh geometry={nodes.glass_04_glass_0.geometry} material={materials.glass} />
      <mesh geometry={nodes.glass_05_glass_0.geometry} material={materials.glass} />
      <mesh geometry={nodes.glass_06_glass_0.geometry} material={materials.glass} />
      <mesh geometry={nodes.glass_07_glass_0.geometry} material={materials.glass} />
      <mesh geometry={nodes.glass_08_glass_0.geometry} material={materials.glass} />
      <mesh geometry={nodes.gum_01_gum_0.geometry} material={materials.material} />
      <mesh geometry={nodes.gum_02_gum_0.geometry} material={materials.material} />
      <mesh geometry={nodes.gum_03_gum_0.geometry} material={materials['material.001']} />
      <mesh geometry={nodes.gum_04_gum_0.geometry} material={materials['material.001']} />
      <mesh geometry={nodes.gum_05_gum_0.geometry} material={materials['material.001']} />
      <mesh geometry={nodes.gum_06_gum_0.geometry} material={materials['material.001']} />
      <mesh geometry={nodes.gum_07_gum_0.geometry} material={materials['material.001']} />
      <mesh geometry={nodes.gum_07_gum_0001.geometry} material={materials['material.001']} />
      <mesh geometry={nodes.gum_08_gum_0.geometry} material={materials['material.001']} />
      <mesh geometry={nodes.gum_09_gum_0.geometry} material={materials['material.001']} />
      <mesh geometry={nodes.gum_10_gum_0.geometry} material={materials['material.001']} />
      <mesh geometry={nodes.gum_11_gum_0.geometry} material={materials.material} />
      <mesh geometry={nodes.gum_12_gum_0.geometry} material={materials['Material.001']} />
      <mesh geometry={nodes.gum_13_gum_0.geometry} material={materials['material.001']} />
      <mesh geometry={nodes.gum_14_gum_0.geometry} material={materials['material.001']} />
      <mesh geometry={nodes.gum_15_gum_0.geometry} material={materials['material.001']} />
      <mesh geometry={nodes.gum_16_gum_0.geometry} material={materials['material.001']} />
      <mesh geometry={nodes.gum_17_gum_0.geometry} material={materials.material} />
      <mesh geometry={nodes.gum_18_gum_0.geometry} material={materials.material} />
      <mesh geometry={nodes.gum_19_gum_0.geometry} material={materials['material.001']} />
      <mesh geometry={nodes.gum_20_gum_0.geometry} material={materials['material.001']} />
      <mesh geometry={nodes.gum_21_gum_0.geometry} material={materials.material} />
      <mesh geometry={nodes.gum_22_gum_0.geometry} material={materials['material.001']} />
      <mesh geometry={nodes.gum_23_gum_0.geometry} material={materials.material} />
      <mesh geometry={nodes.gum_24_gum_0.geometry} material={materials.material} />
      <mesh geometry={nodes.gum_25_gum_0.geometry} material={materials['material.001']} />
      <mesh geometry={nodes.gum_26_gum_0.geometry} material={materials['material.001']} />
      <mesh geometry={nodes.gum_27_gum_0.geometry} material={materials.material} />
      <mesh geometry={nodes.gum_28_gum_0.geometry} material={materials['material.001']} />
      <mesh geometry={nodes.gum_29_gum_0.geometry} material={materials['material.001']} />
      <mesh geometry={nodes.gum_30_gum_0.geometry} material={materials['material.001']} />
      <mesh geometry={nodes.gum_31_gum_0.geometry} material={materials['material.001']} />
      <mesh geometry={nodes.gum_32_gum_0.geometry} material={materials['material.001']} />
      <mesh geometry={nodes.gum_33_gum_0.geometry} material={materials['material.001']} />
      <mesh geometry={nodes.gum_34_gum_0.geometry} material={materials['material.001']} />
      <mesh geometry={nodes.gum_35_gum_0.geometry} material={materials['material.001']} />
      <mesh geometry={nodes.gum_36_gum_0.geometry} material={materials['material.001']} />
      <mesh geometry={nodes.gum_37_gum_0.geometry} material={materials['material.001']} />
      <mesh geometry={nodes.gum_38_gum_0.geometry} material={materials['material.001']} />
      <mesh geometry={nodes.gum_39_gum_0.geometry} material={materials['material.001']} />
      <mesh geometry={nodes.gum_40_gum_0.geometry} material={materials['material.001']} />
      <mesh geometry={nodes.gum_41_gum_0.geometry} material={materials['material.001']} />
      <mesh geometry={nodes.gum_42_gum_0.geometry} material={materials['material.001']} />
      <mesh geometry={nodes.gum_43_gum_0.geometry} material={materials['material.001']} />
      <mesh geometry={nodes.gum_44_gum_0.geometry} material={materials['material.001']} />
      <mesh geometry={nodes.gum_45_gum_0.geometry} material={materials['material.001']} />
      <mesh geometry={nodes.gum_46_gum_0.geometry} material={materials['material.001']} />
      <mesh geometry={nodes.gum_47_gum_0.geometry} material={materials['material.001']} />
      <mesh geometry={nodes.gum_48_gum_0.geometry} material={materials['material.001']} />
      <mesh geometry={nodes.gum_49_gum_0.geometry} material={materials['material.001']} />
      <mesh geometry={nodes.gum_50_gum_0.geometry} material={materials['material.001']} />
      <mesh geometry={nodes.gum_51_gum_0.geometry} material={materials['material.001']} />
      <mesh geometry={nodes.gum_52_gum_0.geometry} material={materials['material.001']} />
      <mesh geometry={nodes.gum_53_gum_0.geometry} material={materials['material.001']} />
      <mesh geometry={nodes.gum_54_gum_0.geometry} material={materials['material.001']} />
      <mesh geometry={nodes.gum_55_gum_0.geometry} material={materials['material.001']} />
      <mesh geometry={nodes.gum_56_gum_0.geometry} material={materials['material.001']} />
      <mesh geometry={nodes.gum_57_gum_0.geometry} material={materials['material.001']} />
      <mesh geometry={nodes.gum_58_gum_0.geometry} material={materials['material.001']} />
      <mesh geometry={nodes.gum_59_gum_0.geometry} material={materials['material.001']} />
      <mesh geometry={nodes.gum_60_gum_0.geometry} material={materials['material.001']} />
      <mesh geometry={nodes.interior_01_interior_0.geometry} material={materials.interior} />
      <mesh geometry={nodes.interior_02_interior_0.geometry} material={materials['interior.001']} />
      <mesh geometry={nodes.interior_03_interior_0.geometry} material={materials['interior.001']} />
      <mesh geometry={nodes.interior_04_interior_0.geometry} material={materials['interior.001']} />
      <mesh geometry={nodes.interior_05_interior_0.geometry} material={materials['interior.001']} />
      <mesh geometry={nodes.interior_06_interior_0.geometry} material={materials['interior.001']} />
      <mesh geometry={nodes.interior_07_interior_0.geometry} material={materials['interior.001']} />
      <mesh geometry={nodes.interior_08_interior_0.geometry} material={materials['interior.001']} />
      <mesh geometry={nodes.interior_09_interior_0.geometry} material={materials['interior.001']} />
      <mesh geometry={nodes.interior_10_interior_0.geometry} material={materials['interior.001']} />
      <mesh geometry={nodes.interior_11_interior_0.geometry} material={materials['interior.001']} />
      <mesh geometry={nodes.interior_12_interior_0.geometry} material={materials['interior.001']} />
      <mesh geometry={nodes.interior_13_interior_0.geometry} material={materials['interior.001']} />
      <mesh geometry={nodes.interior_14_interior_0.geometry} material={materials['interior.001']} />
      <mesh geometry={nodes.interior_15_interior_0.geometry} material={materials['interior.001']} />
      <mesh geometry={nodes.interior_16_interior_0.geometry} material={materials['interior.001']} />
      <mesh geometry={nodes.interior_17_interior_0.geometry} material={materials['interior.001']} />
      <mesh geometry={nodes.interior_18_interior_0.geometry} material={materials['interior.001']} />
      <mesh geometry={nodes.interior_19_interior_0.geometry} material={materials['interior.001']} />
      <mesh geometry={nodes.interior_20_interior_0.geometry} material={materials['interior.001']} />
      <mesh geometry={nodes.interior_21_interior_0.geometry} material={materials['interior.001']} />
      <mesh geometry={nodes.interior_22_interior_0.geometry} material={materials['interior.001']} />
      <mesh geometry={nodes.interior_23_interior_0.geometry} material={materials['interior.001']} />
      <mesh geometry={nodes.interior_24_interior_0.geometry} material={materials['interior.001']} />
      <mesh geometry={nodes.interior_25_interior_0.geometry} material={materials['interior.001']} />
      <mesh geometry={nodes.interior_26_interior_0.geometry} material={materials['interior.001']} />
      <mesh geometry={nodes.interior_27_interior_0.geometry} material={materials['interior.001']} />
      <mesh geometry={nodes.interior_28_interior_0.geometry} material={materials['interior.001']} />
      <mesh geometry={nodes.interior_29_interior_0.geometry} material={materials['interior.001']} />
      <mesh geometry={nodes.interior_30_interior_0.geometry} material={materials['interior.001']} />
      <mesh geometry={nodes.interior_31_interior_0.geometry} material={materials['interior.001']} />
      <mesh geometry={nodes.interior_32_interior_0.geometry} material={materials['interior.001']} />
      <mesh geometry={nodes.interior_33_interior_0.geometry} material={materials['interior.001']} />
      <mesh geometry={nodes.interior_34_interior_0.geometry} material={materials['interior.001']} />
      <mesh geometry={nodes.interior_35_interior_0.geometry} material={materials['interior.001']} />
      <mesh geometry={nodes.o_glass_01_o_glass_0.geometry} material={materials.o_glass} />
      <mesh geometry={nodes.o_glass_02_o_glass_0.geometry} material={materials.o_glass} />
      <mesh geometry={nodes.orange_01_orange_0.geometry} material={materials.orange} />
      <mesh geometry={nodes.orange_02_orange_0.geometry} material={materials.orange} />
      <mesh geometry={nodes.orange_03_orange_0.geometry} material={materials.orange} />
      <mesh geometry={nodes.plate_01_plate_0.geometry} material={materials.plate} />
      <mesh geometry={nodes.plate_02_plate_0.geometry} material={materials.plate} />
      <mesh geometry={nodes.r_glass_01_r_glass_0.geometry} material={materials.r_glass} />
      <mesh geometry={nodes.r_glass_02_r_glass_0.geometry} material={materials.r_glass} />
      <mesh geometry={nodes.r_glass_03_r_glass_0.geometry} material={materials.r_glass} />
      <mesh geometry={nodes.r_glass_04_r_glass_0.geometry} material={materials.r_glass} />
      <mesh geometry={nodes.r_lights_01_r_lights_0.geometry} material={materials.r_lights} />
      <mesh geometry={nodes.red_01_red_0.geometry} material={materials.material_17} />
      <mesh geometry={nodes.red_02_red_0.geometry} material={materials['material_17.001']} />
      <mesh geometry={nodes.red_02_red_0001.geometry} material={materials['material_17.001']} />
      <mesh geometry={nodes.red_03_red_0.geometry} material={materials['material_17.001']} />
      <mesh geometry={nodes.red_04_red_0.geometry} material={materials['material_17.001']} />
      <mesh geometry={nodes.red_05_red_0.geometry} material={materials['material_17.001']} />
      <mesh geometry={nodes.red_06_red_0.geometry} material={materials['material_17.001']} />
      <mesh geometry={nodes.red_07_red_0.geometry} material={materials.material_17} />
      <mesh geometry={nodes.red_08_red_0.geometry} material={materials['material_17.001']} />
      <mesh geometry={nodes.red_09_red_0.geometry} material={materials['material_17.001']} />
      <mesh geometry={nodes.red_10_red_0.geometry} material={materials.material_17} />
      <mesh geometry={nodes.rims_01_rims_0.geometry} material={materials.rims} />
      <mesh geometry={nodes.rims_02_rims_0.geometry} material={materials.rims} />
      <mesh geometry={nodes.rims_03_rims_0.geometry} material={materials.rims} />
      <mesh geometry={nodes.rims_04_rims_0.geometry} material={materials.rims} />
      <mesh geometry={nodes.silver_01_silver_0.geometry} material={materials.silver} />
      <mesh geometry={nodes.silver_02_silver_0.geometry} material={materials.silver} />
      <mesh geometry={nodes.silver_03_silver_0.geometry} material={materials.silver} />
      <mesh geometry={nodes.silver_04_silver_0.geometry} material={materials.silver} />
      <mesh geometry={nodes.silver_05_silver_0.geometry} material={materials.silver} />
      <mesh geometry={nodes.silver_06_silver_0.geometry} material={materials.silver} />
      <mesh geometry={nodes.silver_07_silver_0.geometry} material={materials.silver} />
      <mesh geometry={nodes.silver_08_silver_0.geometry} material={materials.silver} />
      <mesh geometry={nodes.silver_09_silver_0.geometry} material={materials.silver} />
      <mesh geometry={nodes.silver_10_silver_0.geometry} material={materials.silver} />
      <mesh geometry={nodes.silver_11_silver_0.geometry} material={materials.silver} />
      <mesh geometry={nodes.silver_12_silver_0.geometry} material={materials.silver} />
      <mesh geometry={nodes.silver_13_silver_0.geometry} material={materials.silver} />
      <mesh geometry={nodes.silver_d_01_silver_d_0.geometry} material={materials.silver_d} />
      <mesh geometry={nodes.silver_d_02_silver_d_0.geometry} material={materials.silver_d} />
      <mesh geometry={nodes.silver_d_03_silver_d_0.geometry} material={materials.silver_d} />
      <mesh geometry={nodes.silver_d_04_silver_d_0.geometry} material={materials.silver_d} />
      <mesh geometry={nodes.texture_01_texture_0.geometry} material={materials.texture} />
      <mesh geometry={nodes.tire_01_tire_0.geometry} material={materials.tire} />
      <mesh geometry={nodes.tire_02_tire_0.geometry} material={materials.tire} />
      <mesh geometry={nodes.tire_03_tire_0.geometry} material={materials.tire} />
      <mesh geometry={nodes.tire_04_tire_0.geometry} material={materials.tire} />
    </group>
  )
}

useGLTF.preload('/models/Gladiator.glb')
