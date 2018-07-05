export const FB_APP_ID = "675645059455989";

export const API_URL =
  "https://yo7itytg7l.execute-api.ap-northeast-2.amazonaws.com/production";

export const S3_URL =
  "https://s3.ap-northeast-2.amazonaws.com/artworksupload/public";

export const firebaseConfig = {
  apiKey: "AIzaSyC0cmG85C0uXbPv8VUNh8-Qn81roLgR3tQ",
  authDomain: "todays-exhibition.firebaseapp.com",
  databaseURL: "https://todays-exhibition.firebaseio.com",
  projectId: "todays-exhibition",
  storageBucket: "todays-exhibition.appspot.com",
  messagingSenderId: "1074458220768"
};

export const reduxFirebaseConfig = {
  userProfile: "users"
};

export const awsConfig = {
  Auth: {
    identityPoolId: "ap-northeast-2:341b5891-7e18-46a3-a904-3551dd3fe78c",
    region: "ap-northeast-2"
  },
  Storage: {
    bucket: "artworksupload",
    region: "ap-northeast-2"
  }
};

// 안드로이드 firebase expo 로그인에 필요한 것  -> 이거 입력하면 google api에 사용자 인증 정보에 android 생김
// 터미널에 openssl rand -base64 32 | openssl sha1 -c 친 결과
// a1:7e:a4:f9:7d:27:7d:68:f0:6d:89:fc:08:4d:0a:3f:71:ab:27:21
