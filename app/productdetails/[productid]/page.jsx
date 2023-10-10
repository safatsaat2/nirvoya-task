"use client"
import React, { useEffect, useState } from 'react';


const ProductDetail = ({ params }) => {
  const id = params.productid
  const [product, setProduct] = useState([]);

  const [img, setImg] = useState("https://i.ibb.co/6Wnccqq/image-5.png")

  const handleImage = (img) => {
    setImg(img)
  }

  useEffect(() => {
    fetch('/featureProduct.json') // Use the relative URL path
      .then((res) => {
        if (!res.ok) {
          throw new Error('Network response was not ok');
        }
        return res.json();
      })
      .then((data) => setProduct(data))
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  console.log(product)

  // const newProduct = product.find(pro => pro.id == id)


  return (
    <div className="max-w-[1400px] mx-auto mt-[55px]">
      <div className="">
        <p className="text-[#02344F]">{`Home > Men’s fashion >  `}<span className="text-[#757575]">Men's Stand Collar Leather Jacket</span></p>
        <div className='flex items-start justify-between gap-x-[104px]'>
          <div>
            <div className='flex items-start justify-center gap-x-6 mt-6'>
              <div>
                <img className="w-[550px] h-[550px] rounded-none" src={img} alt="Image" />

                <div className='mt-[45px] flex items-center gap-x-[12px]'>
                  <p className='text-xl text-[#333333]'>Share</p>
                  <div className='flex items-center justify-center gap-x-[14px]'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 44 44" fill="none">
                      <rect y="0.00012207" width="44" height="44" rx="22" fill="#5D9DB1" fill-opacity="0.15" />
                      <path d="M30.3986 12.1381H12.8374C12.0327 12.1381 11.3789 12.7765 11.3789 13.5601V30.4401C11.3789 31.2238 12.0327 31.8622 12.8374 31.8622H30.3986C31.2033 31.8622 31.8617 31.2238 31.8617 30.4401V13.5601C31.8617 12.7765 31.2033 12.1381 30.3986 12.1381ZM17.5695 29.0445H14.5336V19.6315H17.574V29.0445H17.5695ZM16.0515 18.3459C15.0777 18.3459 14.2913 17.5842 14.2913 16.6508C14.2913 15.7175 15.0777 14.9558 16.0515 14.9558C17.0208 14.9558 17.8118 15.7175 17.8118 16.6508C17.8118 17.5886 17.0254 18.3459 16.0515 18.3459ZM28.9493 29.0445H25.9134V24.4656C25.9134 23.3738 25.8906 21.9693 24.3361 21.9693C22.7542 21.9693 22.5118 23.158 22.5118 24.3864V29.0445H19.476V19.6315H22.3884V20.9171H22.4295C22.8365 20.1774 23.8286 19.3981 25.3054 19.3981C28.3778 19.3981 28.9493 21.3485 28.9493 23.8845V29.0445Z" fill="#268AA9" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 44 44" fill="none">
                      <rect y="0.00012207" width="44" height="44" rx="22" fill="#53D1E2" fill-opacity="0.15" />
                      <path d="M29.8344 17.4342C29.8469 17.6333 29.8469 17.8325 29.8469 18.0316C29.8469 24.1053 25.7795 31.1036 18.3453 31.1036C16.055 31.1036 13.9274 30.3497 12.1377 29.0411C12.4631 29.0838 12.776 29.098 13.1139 29.098C15.0037 29.098 16.7433 28.3726 18.1325 27.1351C16.3554 27.0924 14.866 25.7696 14.3529 23.9489C14.6032 23.9915 14.8535 24.02 15.1164 24.02C15.4793 24.02 15.8423 23.9631 16.1802 23.8635C14.3279 23.4368 12.9386 21.5877 12.9386 19.3545V19.2976C13.4768 19.639 14.1026 19.8523 14.7659 19.8808C13.677 19.0557 12.9637 17.6476 12.9637 16.0545C12.9637 15.201 13.1639 14.4187 13.5143 13.7359C15.5043 16.5239 18.4955 18.3445 21.8496 18.5437C21.787 18.2023 21.7494 17.8467 21.7494 17.4911C21.7494 14.9592 23.5517 12.8967 25.7919 12.8967C26.9558 12.8967 28.0071 13.4515 28.7455 14.3476C29.6591 14.1485 30.5352 13.7644 31.3112 13.2381C31.0108 14.3049 30.3725 15.2011 29.534 15.77C30.3475 15.6705 31.136 15.4144 31.8618 15.0588C31.3113 15.9691 30.6229 16.7799 29.8344 17.4342Z" fill="#53D1E2" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 44 44" fill="none">
                      <rect y="0.00012207" width="44" height="44" rx="22" fill="#4391DA" fill-opacity="0.15" />
                      <path d="M26.5653 23.3277L27.1553 19.4835H23.4658V16.9889C23.4658 15.9372 23.9812 14.912 25.6336 14.912H27.311V11.6391C27.311 11.6391 25.7888 11.3794 24.3335 11.3794C21.2951 11.3794 19.3091 13.2206 19.3091 16.5537V19.4835H15.9316V23.3277H19.3091V32.6208H23.4658V23.3277H26.5653Z" fill="#4391DA" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 44 44" fill="none">
                      <rect y="0.00012207" width="44" height="44" rx="22" fill="#3AB137" fill-opacity="0.15" />
                      <path d="M28.9076 15.7629C27.0629 13.9138 24.6062 12.8967 21.9954 12.8967C16.6064 12.8967 12.2213 17.2818 12.2213 22.6707C12.2213 24.3922 12.6704 26.074 13.5245 27.5578L12.1377 32.6209L17.3197 31.2604C18.7462 32.0397 20.3532 32.4492 21.991 32.4492H21.9954C27.3799 32.4492 31.8618 28.0641 31.8618 22.6751C31.8618 20.0643 30.7523 17.612 28.9076 15.7629ZM21.9954 30.8025C20.5337 30.8025 19.1028 30.4107 17.8568 29.6711L17.5618 29.4949L14.4887 30.3006L15.3076 27.3024L15.1139 26.9942C14.2994 25.6998 13.8724 24.2073 13.8724 22.6707C13.8724 18.1932 17.5178 14.5477 21.9998 14.5477C24.1703 14.5477 26.2088 15.3931 27.7409 16.9296C29.273 18.4662 30.2152 20.5046 30.2108 22.6751C30.2108 27.1571 26.4729 30.8025 21.9954 30.8025ZM26.4509 24.718C26.2088 24.5947 25.0068 24.0048 24.7823 23.9255C24.5577 23.8419 24.3948 23.8022 24.2319 24.0488C24.069 24.2953 23.6024 24.8413 23.4571 25.0086C23.3162 25.1715 23.1709 25.1935 22.9287 25.0702C21.4935 24.3526 20.5513 23.789 19.6047 22.1644C19.3537 21.733 19.8556 21.7638 20.3223 20.8304C20.4016 20.6675 20.362 20.5266 20.3003 20.4033C20.2387 20.2801 19.75 19.0781 19.5475 18.5894C19.3493 18.1139 19.1468 18.18 18.9971 18.1712C18.8562 18.1624 18.6933 18.1624 18.5304 18.1624C18.3675 18.1624 18.1034 18.224 17.8788 18.4662C17.6543 18.7127 17.0247 19.3027 17.0247 20.5046C17.0247 21.7065 17.9008 22.8689 18.0197 23.0318C18.143 23.1947 19.7412 25.6602 22.1935 26.7212C23.7432 27.3904 24.3508 27.4477 25.1257 27.3332C25.5968 27.2628 26.5698 26.7432 26.7723 26.1709C26.9748 25.5985 26.9748 25.1098 26.9132 25.0086C26.856 24.8985 26.6931 24.8369 26.4509 24.718Z" fill="#3AB137" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 44 44" fill="none">
                      <rect y="0.00012207" width="44" height="44" rx="22" fill="#FF7020" fill-opacity="0.15" />
                      <path d="M24.0928 20.1169C25.8633 21.712 25.839 24.2694 24.1034 25.8401C24.1002 25.8433 24.0963 25.8467 24.0928 25.8499L22.1014 27.6422C20.345 29.2229 17.4875 29.2227 15.7314 27.6422C13.975 26.0617 13.975 23.4896 15.7314 21.9092L16.8309 20.9195C17.1225 20.6571 17.6247 20.8315 17.6398 21.2024C17.659 21.675 17.7531 22.1499 17.9269 22.6085C17.9858 22.7637 17.9437 22.9355 17.8148 23.0515L17.427 23.4005C16.5965 24.148 16.5704 25.3651 17.3928 26.1198C18.2232 26.8821 19.5882 26.8866 20.425 26.1334L22.4164 24.3415C23.2518 23.5896 23.2483 22.3744 22.4164 21.6256C22.3067 21.5271 22.1963 21.4506 22.11 21.3971C22.0489 21.3594 21.9985 21.3093 21.9628 21.251C21.927 21.1926 21.9069 21.1275 21.9041 21.0609C21.8924 20.7791 22.0033 20.4887 22.2507 20.266L22.8747 19.7044C23.0383 19.5572 23.2949 19.5391 23.4846 19.6583C23.7019 19.7948 23.9054 19.9483 24.0928 20.1169ZM28.2692 16.358C26.5131 14.7774 23.6555 14.7772 21.8991 16.358L19.9078 18.1502C19.9042 18.1534 19.9004 18.1569 19.8971 18.1601C18.1616 19.7307 18.1372 22.2881 19.9078 23.8832C20.0951 24.0519 20.2986 24.2053 20.5159 24.3418C20.7056 24.461 20.9623 24.4429 21.1259 24.2957L21.7498 23.7341C21.9972 23.5114 22.1082 23.221 22.0964 22.9392C22.0936 22.8726 22.0735 22.8075 22.0377 22.7492C22.002 22.6908 21.9516 22.6407 21.8906 22.603C21.8043 22.5495 21.6938 22.473 21.5841 22.3745C20.7522 21.6258 20.7487 20.4105 21.5841 19.6586L23.5755 17.8667C24.4123 17.1135 25.7773 17.1181 26.6078 17.8803C27.4301 18.635 27.4041 19.8521 26.5735 20.5996L26.1857 20.9486C26.0568 21.0646 26.0148 21.2364 26.0736 21.3916C26.2474 21.8502 26.3416 22.3251 26.3608 22.7977C26.3758 23.1686 26.878 23.343 27.1696 23.0806L28.2692 22.091C30.0256 20.5105 30.0256 17.9384 28.2692 16.358Z" fill="#FF7020" />
                    </svg>
                  </div>
                </div>
              </div>



              <div className='flex flex-col items-center -mt-1'>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M2.08973 11.2307L10 3.32045L17.9103 11.2307" stroke="#949494" stroke-width="4" />
                </svg>
                <img onClick={() => handleImage("https://i.ibb.co/6Wnccqq/image-5.png")} className={img === "https://i.ibb.co/6Wnccqq/image-5.png" ? 'w-[92px] h-[92px] cursor-pointer mt-[24px] border border-[#0198E9] p-1' : "w-[92px] h-[92px] cursor-pointer mt-[24px]"} src="https://i.ibb.co/6Wnccqq/image-5.png" alt="" />


                <img onClick={() => handleImage("https://i.ibb.co/r7km0bp/image-12.png")} className={img === "https://i.ibb.co/r7km0bp/image-12.png" ? 'w-[92px] h-[92px] cursor-pointer mt-[10px] border border-[#0198E9] p-1' : "w-[92px] h-[92px] cursor-pointer mt-[10px]"} src="https://i.ibb.co/r7km0bp/image-12.png" alt="" />
                <img onClick={() => handleImage("https://i.ibb.co/tBm8BLP/image-10.png")} className={img === "https://i.ibb.co/tBm8BLP/image-10.png" ? 'w-[92px] h-[92px] cursor-pointer mt-[10px] border border-[#0198E9] p-1' : "w-[92px] h-[92px] cursor-pointer mt-[10px]"} src="https://i.ibb.co/tBm8BLP/image-10.png" alt="" />
                <img onClick={() => handleImage("https://i.ibb.co/x1sHm8R/image-3.png")} className={img === "https://i.ibb.co/x1sHm8R/image-3.png" ? 'w-[92px] h-[92px] cursor-pointer mt-[10px] border border-[#0198E9] p-1' : "w-[92px] h-[92px] cursor-pointer mt-[10px]"} src="https://i.ibb.co/x1sHm8R/image-3.png" alt="" />
                <svg className='mt-[25px]' xmlns="http://www.w3.org/2000/svg" width="20" height="19" viewBox="0 0 20 19" fill="none">
                  <path d="M2.08973 8.2307L10 16.141L17.9103 8.2307" stroke="#0198E9" stroke-width="4" />
                </svg>
              </div>
            </div>
          </div>
          <div>
            <h3 className='text-[26px] font-medium text-[#333333] w-[611px]'>Super Skinny Rib Trouser & Joggers for Men By Sowdagar Trouser</h3>
            <div className='flex items-center mt-[18px]'>
              <div className='flex items-start justify-center gap-1'>
                <p className='text-[18px] font-medium text-blackPrimary-0'>4.0</p>
                <div className='flex items-center gap-x-[3px]'>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="22" viewBox="0 0 24 22" fill="none">
                    <path d="M12 0L14.6942 8.2918H23.4127L16.3593 13.4164L19.0534 21.7082L12 16.5836L4.94658 21.7082L7.64074 13.4164L0.587322 8.2918H9.30583L12 0Z" fill="#FFB340" />
                  </svg>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="22" viewBox="0 0 24 22" fill="none">
                    <path d="M12 0L14.6942 8.2918H23.4127L16.3593 13.4164L19.0534 21.7082L12 16.5836L4.94658 21.7082L7.64074 13.4164L0.587322 8.2918H9.30583L12 0Z" fill="#FFB340" />
                  </svg>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="22" viewBox="0 0 24 22" fill="none">
                    <path d="M12 0L14.6942 8.2918H23.4127L16.3593 13.4164L19.0534 21.7082L12 16.5836L4.94658 21.7082L7.64074 13.4164L0.587322 8.2918H9.30583L12 0Z" fill="#FFB340" />
                  </svg>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="22" viewBox="0 0 24 22" fill="none">
                    <path d="M12 0L14.6942 8.2918H23.4127L16.3593 13.4164L19.0534 21.7082L12 16.5836L4.94658 21.7082L7.64074 13.4164L0.587322 8.2918H9.30583L12 0Z" fill="#FFB340" />
                  </svg>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="22" viewBox="0 0 24 22" fill="none">
                    <path opacity="0.25" d="M12 0L14.6942 8.2918H23.4127L16.3593 13.4164L19.0534 21.7082L12 16.5836L4.94658 21.7082L7.64074 13.4164L0.587322 8.2918H9.30583L12 0Z" fill="#A7A7A7" />
                  </svg>
                </div>
                <p className='text-[18px] font-medium text-[#BABABA]'>(223)</p>
              </div>
              <div className='flex gap-x-[10px] items-center ml-[34px]'>
                <svg xmlns="http://www.w3.org/2000/svg" width="21" height="15" viewBox="0 0 21 15" fill="none">
                  <path d="M7.13253 14.7054L0.307525 8.16802C-0.102508 7.77527 -0.102508 7.13846 0.307525 6.74567L1.79242 5.32332C2.20245 4.93053 2.86731 4.93053 3.27735 5.32332L7.875 9.72717L17.7227 0.294565C18.1327 -0.0981884 18.7976 -0.0981884 19.2076 0.294565L20.6925 1.71692C21.1025 2.10967 21.1025 2.74647 20.6925 3.13927L8.61746 14.7054C8.20739 15.0982 7.54257 15.0982 7.13253 14.7054Z" fill="#0AC96D" />
                </svg>
                <p className='text-[18px] text-blackPrimary-0 font-semibold'>
                  4,320 <span className='font-normal'>Sold</span>
                </p>

              </div>
              <div className='flex gap-x-[15px] items-center ml-[35px]'>
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="19" viewBox="0 0 22 19" fill="none">
                  <path d="M19.8646 1.29915C17.51 -0.681392 14.0081 -0.325149 11.8468 1.87593L11.0003 2.73685L10.1538 1.87593C7.99686 -0.325149 4.49068 -0.681392 2.13603 1.29915C-0.562353 3.57232 -0.704147 7.65216 1.71065 10.1162L10.0249 18.5897C10.562 19.1368 11.4343 19.1368 11.9714 18.5897L20.2857 10.1162C22.7048 7.65216 22.563 3.57232 19.8646 1.29915Z" fill="#C7C7C7" />
                </svg>
                <p className='text-[18px] text-secondary-0 font-bold'>
                  Add to wishlist
                </p>
              </div>
            </div>
            <div className='mt-[33px] flex items-center'>
              <h2 className='text-secondary-0 font-semibold text-[36px]'>$976.33</h2>
              <p className='text-xl text-[#8D8D8D] line-through ml-[25px]'>$1,020.99</p>
              <div className='discount-box2 px-[10px] py-1  ml-[17px]'>
                <p className='text-sm font-semibold text-white'>20%</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default ProductDetail;