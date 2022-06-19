import React from 'react';

export function AuthSvgSelector({ id }: { id: string }) {
  switch (id) {
    case 'email':
      return (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M12 2C10.466 1.99993 8.95266 2.35274 7.57691 3.03113C6.20116 3.70952 4.99992 4.69531 4.0661 5.91222C3.13229 7.12914 2.49094 8.54457 2.19168 10.049C1.89241 11.5535 1.94325 13.1066 2.34026 14.5882C2.73727 16.0699 3.46982 17.4403 4.48121 18.5936C5.49261 19.7468 6.75576 20.6519 8.17293 21.2389C9.5901 21.8259 11.1233 22.0789 12.6539 21.9786C14.1846 21.8782 15.6716 21.427 17 20.66C17.1195 20.5975 17.2251 20.5114 17.3105 20.407C17.3959 20.3027 17.4592 20.1821 17.4968 20.0525C17.5344 19.923 17.5454 19.7872 17.5291 19.6533C17.5129 19.5194 17.4697 19.3902 17.4022 19.2735C17.3347 19.1567 17.2443 19.0548 17.1364 18.9739C17.0285 18.893 16.9053 18.8347 16.7743 18.8026C16.6433 18.7705 16.5072 18.7653 16.3741 18.7872C16.241 18.8091 16.1138 18.8576 16 18.93C14.4749 19.8105 12.7019 20.1632 10.956 19.9334C9.21003 19.7036 7.5887 18.9041 6.34342 17.659C5.09813 16.4138 4.29848 14.7926 4.06848 13.0467C3.83848 11.3008 4.19097 9.52774 5.0713 8.00257C5.95163 6.47741 7.31059 5.28532 8.93745 4.61119C10.5643 3.93706 12.3681 3.81855 14.0692 4.27404C15.7703 4.72953 17.2735 5.73358 18.3458 7.13046C19.4181 8.52734 19.9996 10.239 20 12V12.75C20 13.2141 19.8156 13.6592 19.4874 13.9874C19.1592 14.3156 18.7141 14.5 18.25 14.5C17.7858 14.5 17.3407 14.3156 17.0125 13.9874C16.6843 13.6592 16.5 13.2141 16.5 12.75V8.5C16.5 8.23478 16.3946 7.98043 16.2071 7.79289C16.0195 7.60536 15.7652 7.5 15.5 7.5C15.2674 7.49483 15.0403 7.57088 14.8578 7.71507C14.6753 7.85926 14.5487 8.06257 14.5 8.29C13.7649 7.78158 12.8937 7.5063 12 7.5C11.2471 7.491 10.5041 7.67102 9.83882 8.0236C9.17359 8.37617 8.60745 8.89001 8.19226 9.51807C7.77706 10.1461 7.52609 10.8683 7.46231 11.6185C7.39854 12.3687 7.524 13.1229 7.82722 13.812C8.13044 14.5011 8.60171 15.1032 9.19788 15.563C9.79405 16.0228 10.4961 16.3257 11.2396 16.4439C11.9832 16.5621 12.7445 16.4918 13.4539 16.2396C14.1632 15.9873 14.798 15.5611 15.3 15C15.7751 15.6153 16.4302 16.0673 17.1741 16.293C17.918 16.5188 18.7138 16.5071 19.4508 16.2596C20.1877 16.0121 20.8292 15.5411 21.2861 14.9121C21.743 14.2831 21.9925 13.5274 22 12.75V12C22 10.6868 21.7413 9.38642 21.2387 8.17317C20.7362 6.95991 19.9996 5.85752 19.071 4.92893C18.1424 4.00035 17.04 3.26375 15.8268 2.7612C14.6135 2.25866 13.3132 2 12 2ZM12 14.5C11.5055 14.5 11.0221 14.3534 10.611 14.0787C10.1999 13.804 9.87947 13.4135 9.69025 12.9567C9.50103 12.4999 9.45153 11.9972 9.54799 11.5123C9.64445 11.0273 9.88255 10.5819 10.2322 10.2322C10.5818 9.8826 11.0273 9.6445 11.5122 9.54804C11.9972 9.45157 12.4998 9.50108 12.9567 9.6903C13.4135 9.87952 13.8039 10.2 14.0786 10.6111C14.3533 11.0222 14.5 11.5055 14.5 12C14.5 12.663 14.2366 13.2989 13.7677 13.7678C13.2989 14.2366 12.663 14.5 12 14.5Z" />
        </svg>
      );
    case 'password':
      return (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M12 13C11.7348 13 11.4804 13.1054 11.2929 13.2929C11.1054 13.4804 11 13.7348 11 14V17C11 17.2652 11.1054 17.5196 11.2929 17.7071C11.4804 17.8946 11.7348 18 12 18C12.2652 18 12.5196 17.8946 12.7071 17.7071C12.8946 17.5196 13 17.2652 13 17V14C13 13.7348 12.8946 13.4804 12.7071 13.2929C12.5196 13.1054 12.2652 13 12 13ZM17 9V7C17 5.67392 16.4732 4.40215 15.5355 3.46447C14.5979 2.52678 13.3261 2 12 2C10.6739 2 9.40215 2.52678 8.46447 3.46447C7.52678 4.40215 7 5.67392 7 7V9C6.20435 9 5.44129 9.31607 4.87868 9.87868C4.31607 10.4413 4 11.2044 4 12V19C4 19.7956 4.31607 20.5587 4.87868 21.1213C5.44129 21.6839 6.20435 22 7 22H17C17.7956 22 18.5587 21.6839 19.1213 21.1213C19.6839 20.5587 20 19.7956 20 19V12C20 11.2044 19.6839 10.4413 19.1213 9.87868C18.5587 9.31607 17.7956 9 17 9ZM9 7C9 6.20435 9.31607 5.44129 9.87868 4.87868C10.4413 4.31607 11.2044 4 12 4C12.7956 4 13.5587 4.31607 14.1213 4.87868C14.6839 5.44129 15 6.20435 15 7V9H9V7ZM18 19C18 19.2652 17.8946 19.5196 17.7071 19.7071C17.5196 19.8946 17.2652 20 17 20H7C6.73478 20 6.48043 19.8946 6.29289 19.7071C6.10536 19.5196 6 19.2652 6 19V12C6 11.7348 6.10536 11.4804 6.29289 11.2929C6.48043 11.1054 6.73478 11 7 11H17C17.2652 11 17.5196 11.1054 17.7071 11.2929C17.8946 11.4804 18 11.7348 18 12V19Z" />
        </svg>
      );
    case 'person':
      return (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M15.71 12.7099C16.6904 11.9385 17.406 10.8808 17.7572 9.68382C18.1085 8.48684 18.0779 7.21015 17.6698 6.03135C17.2617 4.85255 16.4963 3.83027 15.4801 3.10674C14.4639 2.3832 13.2474 1.99438 12 1.99438C10.7525 1.99438 9.53611 2.3832 8.51993 3.10674C7.50374 3.83027 6.73834 4.85255 6.33021 6.03135C5.92208 7.21015 5.89151 8.48684 6.24276 9.68382C6.59401 10.8808 7.3096 11.9385 8.29 12.7099C6.61007 13.3829 5.14428 14.4992 4.04889 15.9398C2.95349 17.3804 2.26956 19.0912 2.07 20.8899C2.05555 21.0212 2.06711 21.1541 2.10402 21.2809C2.14093 21.4078 2.20246 21.5261 2.28511 21.6292C2.45202 21.8374 2.69478 21.9707 2.96 21.9999C3.22521 22.0291 3.49116 21.9517 3.69932 21.7848C3.90749 21.6179 4.04082 21.3751 4.07 21.1099C4.28958 19.1551 5.22168 17.3497 6.68822 16.0387C8.15475 14.7277 10.0529 14.0029 12.02 14.0029C13.9871 14.0029 15.8852 14.7277 17.3518 16.0387C18.8183 17.3497 19.7504 19.1551 19.97 21.1099C19.9972 21.3556 20.1144 21.5825 20.2991 21.7469C20.4838 21.9113 20.7228 22.0014 20.97 21.9999H21.08C21.3421 21.9697 21.5817 21.8372 21.7466 21.6311C21.9114 21.4251 21.9881 21.1622 21.96 20.8999C21.7595 19.0961 21.0719 17.3809 19.9708 15.9381C18.8698 14.4953 17.3969 13.3794 15.71 12.7099ZM12 11.9999C11.2089 11.9999 10.4355 11.7653 9.77772 11.3258C9.11992 10.8862 8.60723 10.2615 8.30448 9.53061C8.00173 8.79971 7.92251 7.99544 8.07686 7.21952C8.2312 6.4436 8.61216 5.73086 9.17157 5.17145C9.73098 4.61204 10.4437 4.23108 11.2196 4.07674C11.9956 3.9224 12.7998 4.00161 13.5307 4.30436C14.2616 4.60711 14.8863 5.1198 15.3259 5.7776C15.7654 6.4354 16 7.20876 16 7.99988C16 9.06075 15.5786 10.0782 14.8284 10.8283C14.0783 11.5785 13.0609 11.9999 12 11.9999Z"
            fill="#FFEBA7"
          />
        </svg>
      );

    default:
      return null;
  }
}
