export const getFeatureProduct = async() =>{
 const res = await fetch('featureProduct.json');
 return res.json()
}