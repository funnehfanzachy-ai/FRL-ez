// Shared disposal helper is kept separate so the renderer can rebuild the ship without
// leaving WebGL buffers behind after a player leaves or changes rooms.
export function disposeObjectTree(root){
 const geometries=new Set(),materials=new Set(),textures=new Set();
 root.traverse(object=>{
  if(object.geometry)geometries.add(object.geometry);
  const list=Array.isArray(object.material)?object.material:object.material?[object.material]:[];
  for(const material of list){materials.add(material);for(const value of Object.values(material)){if(value?.isTexture)textures.add(value)}}
 });
 for(const geometry of geometries)geometry.dispose();
 for(const texture of textures)texture.dispose();
 for(const material of materials)material.dispose();
 root.clear();
}
