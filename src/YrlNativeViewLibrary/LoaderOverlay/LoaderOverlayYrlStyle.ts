import { StyleSheet } from 'react-native'

export const LoaderOverlayYrlStyle = StyleSheet.create({
  LoaderOverlay: {
    flex: 1,
    // flexDirection: row,
    // justifyContent: center;
    // alignItems: center;
    // position: fixed; /* Stay in place */
    // z-index: 1; /* Sit on top */
    // left: 0;
    // top: 0;
    // width: 100%; /* Full width */
    // height: 100%; /* Full height */
    // overflow: auto; /* Enable scroll if needed */
  },
  spinner: {
    height: 100,
    width: 100,
    position: 'absolute',
    top: '50%',
    left: '50%',
  },
  // [flex, none]; /* Hidden by default */
  // flex-direction: row;
  // justify-content: center;
  // align-items: center;
  // position: fixed; /* Stay in place */
  // z-index: 1; /* Sit on top */
  // container: {},
  // image: {
  //   width: 50,
  //   height: 50,
  // },
})

// .LoaderOverlay {
//   display: none; // [flex, none]; /* Hidden by default */
//   flex-direction: row;
//   justify-content: center;
//   align-items: center;
//   position: fixed; /* Stay in place */
//   z-index: 1; /* Sit on top */
//   left: 0;
//   top: 0;
//   width: 100%; /* Full width */
//   height: 100%; /* Full height */
//   overflow: auto; /* Enable scroll if needed */

//   @keyframes spinner {
//     0% {
//       transform: translate3d(-50%, -50%, 0) rotate(0deg);
//     }
//     100% {
//       transform: translate3d(-50%, -50%, 0) rotate(360deg);
//     }
//   }

//   ._spinner::before {
//     animation: 1.5s linear infinite spinner;
//     animation-play-state: inherit;
//     border: solid 0.5rem #cfd0d1;
//     border-bottom-color: #1c87c9;
//     border-radius: 50%;
//     content: '';
//     height: 100px;
//     width: 100px;
//     position: absolute;
//     top: 50%;
//     left: 50%;
//     transform: translate3d(-50%, -50%, 0);
//     will-change: transform;
//   }

//   &_show {
//     display: flex;
//     background-color: rgba(255, 255, 255, 0.85);
//   }

//   @supports (
//     (-webkit-backdrop-filter: blur(2em)) or (backdrop-filter: blur(2em))
//   ) {
//     &_show {
//       background-color: rgba(255, 255, 255, 0);
//       backdrop-filter: blur(0.33rem);
//       transition: backdrop-filter 5s;
//       -webkit-backdrop-filter: blur(0.33rem);
//     }
//   }

//   @media @large {
//   }
//   @media @desktop, @desktop-strict {
//   }
//   @media @tablet, @tablet-strict {
//   }
//   @media @phone, @phone-strict {
//   }
// }
